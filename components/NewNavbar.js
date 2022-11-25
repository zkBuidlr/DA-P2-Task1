import React from "react";

const NewNavbar = () => {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-slate-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <div className="md:hidden text-[24px]"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
          />
        </svg>
        <span class="font-semibold text-xl tracking-tight">BUIDLR</span>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a
            href="#about"
            class="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-teal-400 mr-4"
          >
            About
          </a>
          <a
            href="#services"
            class="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-teal-500"
          >
            Services
          </a>
        </div>
        <div>
          <a
            href="#contact"
            class="inline-block text-md px-6 py-3 leading-none rounded text-white bg-green-500 hover:border-transparent hover:text-white hover:bg-green-800 mt-4 lg:mt-0"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NewNavbar;
