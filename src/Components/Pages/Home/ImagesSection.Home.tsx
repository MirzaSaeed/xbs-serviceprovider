import React from "react";
import { motion } from "framer-motion";
import image1 from "../../Assets/Images/section-1-2.png";
import image2 from "../../Assets/Images/section-1-3.png";
import image3 from "../../Assets/Images/section-1-4.png";
import image4 from "../../Assets/Images/section-1-5.png";
import image5 from "../../Assets/Images/section-1-6.png";
import image7 from "../../Assets/Images/section-1-7.png";
import { styles } from "../../components/mediaquery";
import Radium from "radium";
const ImagesSection = () => {
  return (
    <React.Fragment>
      <div className=" flex flex-wrap flex-col items-center justify-between mx-auto  border-gray-200 bg-stone-900 dark:bg-neutral-800 dark:border-neutral-700">
        <div
          style={styles.grid1}
          className="grid grid-cols-4 md:grid-cols-4 gap-0"
        >
          <div className="relative  overflow-hidden bg-cover bg-no-repeat">
            <img
              className="h-auto max-w-full transition duration-300 ease-in-out hover:scale-110"
              src={image1}
              alt=""
            />
          </div>
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img
              className="h-auto max-w-full transition duration-300 ease-in-out hover:scale-110"
              src={image2}
              alt=""
            />
          </div>
          <div className="relative  overflow-hidden bg-cover bg-no-repeat">
            <img
              className="h-auto max-w-full transition duration-300 ease-in-out hover:scale-110"
              src={image4}
              alt=""
            />
          </div>
          <div className="relative  overflow-hidden bg-cover bg-no-repeat">
            <img
              className="h-auto max-w-full transition duration-300 ease-in-out hover:scale-110"
              src={image3}
              alt=""
            />
          </div>
        </div>

        <div
          style={styles.grid1}
          className="grid grid-cols-4 md:grid-cols-4 gap-0"
        >
          <div className="relative  overflow-hidden bg-cover bg-no-repeat">
            <img
              className="h-auto max-w-full transition duration-300 ease-in-out hover:scale-110"
              src={image5}
              alt=""
            />
          </div>
          <div className="relative  overflow-hidden bg-cover bg-no-repeat">
            <img
              className="h-auto max-w-full transition duration-300 ease-in-out hover:scale-110"
              src={image3}
              alt=""
            />
          </div>
          <div className="relative  overflow-hidden bg-cover bg-no-repeat">
            <img
              className="h-auto max-w-full transition duration-300 ease-in-out hover:scale-110"
              src={image1}
              alt=""
            />
          </div>
          <div className="relative  overflow-hidden bg-cover bg-no-repeat">
            <img
              className="h-auto max-w-full transition duration-300 ease-in-out hover:scale-110"
              src={image5}
              alt=""
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Radium(ImagesSection);
