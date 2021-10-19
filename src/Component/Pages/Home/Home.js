import React from "react";
import About from "../../SharedSection/About/About";
import CardDrawer from "../../SharedSection/CardDrawer/CardDrawer";
import Services from "../../SharedSection/Services/Services";
import Slider from "../../SharedSection/Slider/Slider";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <About></About>
      <Services></Services>
      <CardDrawer></CardDrawer>
    </div>
  );
};

export default Home;
