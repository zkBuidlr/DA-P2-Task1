import React from "react";
import Typerwriter from "typewriter-effect";
import Button from "./Button";

const Hero = () => {
  return (
    <div
      className='bg-[url("/anon-bg.jpeg")] h-screen bg-cover
    bg-center bg-fixed flex items-center'
    >
      <div className="container mx-auto px-4">
        <div className="max-w-[450px] text-white flex flex-col gap-[40px]">
          <div>
            <h1 className="text-4xl">BUIDLR</h1>
            <h4 className="text-4xl mt-3 text-green-500">
              <Typerwriter
                options={{
                  strings: [
                    "Product Manager",
                    "Degen",
                    "Wannabe Developer",
                    "Anon.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h4>
          </div>

          <div className="bg-[green] h-[2px] w-[40px]"></div>

          <div>
            <p>Part-time degen, full-time burger flipper.</p>
          </div>
          <button
            type="button"
            class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
