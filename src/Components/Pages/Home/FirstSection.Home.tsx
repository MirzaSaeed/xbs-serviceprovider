import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import section1 from "../../Assets/Images/section-1-1.png";

const FirstSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } },
  };
  return (
    <React.Fragment>
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Initial animation state
        animate={{ opacity: 1, y: 0 }} // Animation to play on scroll
        transition={{ delay: 0.2 }} // Delay before animation starts
        className=" flex flex-wrap flex-col items-center justify-between mx-auto  border-gray-200 bg-stone-900 dark:bg-neutral-800 dark:border-neutral-700 "
      >
        <img
          className="w-full h-[75vh] md:h-[75vh] object-cover"
          src={section1}
          alt="image description"
        />
        <div className=" max-w-screen-xl text-center flex-col flex flex-wrap items-center justify-center ">
          <motion.h1
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            className="mt-14 mb-6 text-2xl font-semibold leading-none tracking-normal text-gray-900 md:text-5xl lg:text-4xl dark:text-white"
            style={{ fontFamily: "Montserrat" }}
          >
            PROFESSIONAL TECHNOLOGY ASSISTANCE
          </motion.h1>

          <motion.p
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
            style={{ fontFamily: "Montserrat" }}
          >
            We make technology accessible!
          </motion.p>
          <motion.a
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            href="#"
            className="mb-14 inline-flex items-center tracking-widest border-white border-2 dark:border-2 dark:border-white justify-center px-5 py-3 text-base font-bold text-center text-white bg-neutral-800 rounded-sm hover:bg-white hover:text-neutral-700 focus:ring-4 focus:ring-white dark:focus:ring-white"
            style={{
              fontFamily: "Exo 2",
            }}
          >
            BOOK ONLINE
            {/* <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg> */}
          </motion.a>
        </div>
      </motion.div>
    </React.Fragment>
  );
};

export default FirstSection;
