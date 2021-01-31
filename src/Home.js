import React from "react";
import web from "../src/Images/1.png";
import Resuable from "./Reusable";

const Home = () => {
  return (
    <>
      <Resuable
        name="Power your business to new heights with "
        desc="We provide Industry proven solutions for design, engineering, simulation, manufacturing, and quality for an overall improvement of your designing workflow and experience.  Our aim is to help our companies become Industry 4.0 ready."
        buttonName="Get Started"
        vector={web}
        btLink="/service"
      />
    </>
  );
};

export default Home;
