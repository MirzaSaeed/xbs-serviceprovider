import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-stone-900 dark:bg-neutral-800 dark:border-neutral-700 ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between"></div>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="#" className="hover:underline">
            <span
              className="self-center font-semibold whitespace-nowrap dark:text-white"
              style={{
                fontFamily: "Syncopate",
              }}
            >
              XBS
            </span>
            <span
              className="self-center whitespace-nowrap dark:text-white"
              style={{
                fontFamily: "Syncopate",
              }}
            >
              Plus™
            </span>
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
