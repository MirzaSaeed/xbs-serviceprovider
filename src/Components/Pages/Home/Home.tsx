import React from "react";
import Navbar from "../../components/Navbar";
import FirstSection from "./FirstSection.Home";
import AboutSection from "./AboutSection.Home";
import ImagesSection from "./ImagesSection.Home";
import ReviewSection from "./ReviewSection.Home";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <FirstSection />
      <AboutSection />
      <ImagesSection />
      <ReviewSection />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
