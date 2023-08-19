import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/components/Navbar";
import FirstSection from "./Components/Pages/Home/FirstSection.Home";
import AboutSection from "./Components/Pages/Home/AboutSection.Home";
import ImagesSection from "./Components/Pages/Home/ImagesSection.Home";
import ReviewSection from "./Components/Pages/Home/ReviewSection.Home";
import Footer from "./Components/components/Footer";

function App() {
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
}

export default App;
