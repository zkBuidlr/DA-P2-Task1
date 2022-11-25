import Link from "next/link";
import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { Button, Form, Loader } from "semantic-ui-react";
import { useRouter } from "next/router";

const NewNote = () => {
  const [form, setForm] = useState({ discord: "", twitter: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        createNote();
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const createNote = async () => {
    try {
      const res = await fetch("https://buidlr.vercel.app/api/User", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let err = {};

    if (!form.discord) {
      err.discord = "Title is required";
    }
    if (!form.twitter) {
      err.twitter = "Description is required";
    }

    return err;
  };

  return (
    <div id="contact" className="container mx-auto py-5">
      <h2 class="text-3xl font-bold mb-12 text-center">Contact</h2>
      <div>
        {isSubmitting ? (
          <Loader active inline="centered" />
        ) : (
          <Form className="grid lg:grid cols-2" onSubmit={handleSubmit}>
            <Form.Input
              className="input-type py-2 border w-full px-5 focus:outline-none rounded-md"
              fluid
              error={
                errors.title
                  ? { content: "Please enter a title", pointing: "below" }
                  : null
              }
              // label="Discord"
              placeholder="Discord Handle"
              name="discord"
              onChange={handleChange}
            />
            <Form.Input
              className="input-type py-2 border w-full px-5 mt-2 focus:outline-none rounded-md"
              fluid
              // label="Twitter"
              placeholder="Twitter"
              name="twitter"
              error={
                errors.description
                  ? { content: "Please enter a description", pointing: "below" }
                  : null
              }
              onChange={handleChange}
            />
            <Form.Input
              className="input-type py-2 border w-full px-5 mt-2 focus:outline-none rounded-md"
              fluid
              // label="Email"
              placeholder="Email"
              name="email"
              error={
                errors.description
                  ? { content: "Please enter a description", pointing: "below" }
                  : null
              }
              onChange={handleChange}
            />
            <button
              type="submit"
              class="text-white bg-gradient-to-r mt-2 from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Submit
            </button>
          </Form>
        )}
      </div>
    </div>
  );
};

export default NewNote;
