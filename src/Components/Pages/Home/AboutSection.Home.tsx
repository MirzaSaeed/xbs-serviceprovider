import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Radium from "radium";
import { styles } from "../../components/mediaquery";
const AboutSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } },
  };
  const card1 = {
    hidden: { opacity: 0, x: "-100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };
  const card2 = {
    hidden: { opacity: 0, y: "100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };
  const card3 = {
    hidden: { opacity: 0, x: " 100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };
  const socialSection = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };
  return (
    <React.Fragment>
      <div className=" flex flex-wrap flex-col items-center justify-between mx-auto  border-neutral-200 bg-neutral-700 dark:bg-white dark:text-neutral-700 dark:border-neutral-700 ">
        <div className="max-w-screen-xl flex-col flex flex-wrap items-center justify-center ">
          <motion.h1
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            className="mt-14 mb-6  font-semibold leading-none tracking-normal text-gray-900  sm:text-xl md:text-3xl lg:text-4xl dark:text-neutral-700"
            style={{ fontFamily: "Montserrat", ...styles.about }}
          >
            About Us
          </motion.h1>

          <div style={styles.grid} className="grid grid-cols-3 gap-3 px-3">
            <div
              style={{ fontFamily: "Montserrat" }}
              className="w-full max-w-sm bg-white    dark:bg-white "
            >
              <motion.div
                ref={ref1}
                initial="hidden"
                animate={inView1 ? "visible" : "hidden"}
                variants={card1}
                className="flex flex-col items-center pb-10"
              >
                <h1
                  className="mt-6 mb-6 text-xs font-semibold leading-none tracking-normal text-gray-900 md:text-sm lg:text-lg dark:text-neutral-800"
                  style={styles.font1}
                >
                  Technical Experience
                </h1>
                <img
                  className=" w-2/1  mb-2   "
                  src="https://img1.wsimg.com/isteam/ip/7d10058f-f975-449e-b84b-21d66a5e7290/tech.png/:/cr=t:25%25,l:0%25,w:100%25,h:50%25/rs=w:388,h:194,cg:true"
                  alt="Bonnie image"
                />

                <span className="tracking-normal lg:text-base md:text-xs sm:text-xs xs:text-xs text-center text-neutral-500 dark:text-neutral-700">
                  We are experienced in a variety of operating systems,
                  networks, and databases. We work with just about any
                  technology that a small business would encounter. We use this
                  expertise to help customers with small to mid-sized projects.
                </span>
              </motion.div>
            </div>

            <div
              style={{ fontFamily: "Montserrat" }}
              className="w-full max-w-sm bg-white    dark:bg-white "
            >
              <motion.div
                ref={ref2}
                initial="hidden"
                animate={inView2 ? "visible" : "hidden"}
                variants={card2}
                className="flex flex-col items-center pb-10"
              >
                <h1
                  className="mt-6 mb-6 text-xs font-semibold leading-none tracking-normal text-gray-900 md:text-sm lg:text-lg dark:text-neutral-800"
                  style={styles.font1}
                >
                  High ROI
                </h1>
                <img
                  className=" w-2/1  mb-3   "
                  src="https://img1.wsimg.com/isteam/ip/7d10058f-f975-449e-b84b-21d66a5e7290/roi.png/:/cr=t:25%25,l:0%25,w:100%25,h:50%25/rs=w:388,h:194,cg:true"
                  alt="Bonnie image"
                />

                <span className="tracking-normal lg:text-base md:text-xs sm:text-xs xs:text-xs text-center text-neutral-500 dark:text-neutral-700">
                  Do you spend most of your IT budget on maintaining your
                  current system? Many companies find that constant maintenance
                  eats into their budget for new technology. By outsourcing your
                  IT management to us, you can focus on running your business.{" "}
                </span>
              </motion.div>
            </div>

            <div
              style={{ fontFamily: "Montserrat" }}
              className="w-full max-w-sm bg-white    dark:bg-white "
            >
              <motion.div
                ref={ref3}
                initial="hidden"
                animate={inView3 ? "visible" : "hidden"}
                variants={card3}
                className="flex flex-col items-center pb-10"
              >
                <h1
                  className="mt-6 mb-6 text-xs font-semibold leading-none tracking-normal text-gray-900 md:text-sm lg:text-lg dark:text-neutral-800"
                  style={styles.font1}
                >
                  Looking Ahead
                </h1>
                <img
                  className=" w-2/1  mb-3   "
                  src="https://img1.wsimg.com/isteam/ip/7d10058f-f975-449e-b84b-21d66a5e7290/future.png/:/cr=t:25%25,l:0%25,w:100%25,h:50%25/rs=w:388,h:194,cg:true"
                  alt="Bonnie image"
                />

                <span className="tracking-normal lg:text-base md:text-xs sm:text-xs xs:text-xs text-center text-neutral-500 dark:text-neutral-700">
                  The world of technology can be fast-paced. That's why our goal
                  is to provide an experience that keeps up with your company's
                  needs. We will help you understand how to plan for your
                  technology needs and invest in your infrastructure.
                </span>
              </motion.div>
            </div>
          </div>
          <motion.h1
            ref={ref4}
            initial="hidden"
            animate={inView4 ? "visible" : "hidden"}
            variants={socialSection}
            className="mt-14 mb-6 font-semibold leading-none tracking-normal text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl dark:text-neutral-700"
            style={{ fontFamily: "Montserrat", ...styles.font }}
          >
            Social
          </motion.h1>

          <div className="grid grid-cols-3 gap-20 mb-14 ">
            <motion.div
              whileHover={{ scale: 1.5 }}
              whileTap={{
                scale: 1,
              }}
            >
              <FacebookRoundedIcon
                fontSize="large"
                className="dark:hover:text-neutral-900 dark:text-zinc-500"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.5 }}
              whileTap={{
                scale: 1,
              }}
            >
              <LinkedInIcon
                fontSize="large"
                className="dark:hover:text-neutral-900 dark:text-zinc-500"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.5 }}
              whileTap={{
                scale: 1,
              }}
            >
              <TwitterIcon
                fontSize="large"
                className="dark:hover:text-neutral-900 dark:text-zinc-500"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Radium(AboutSection);
