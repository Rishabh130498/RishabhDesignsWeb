import React from "react";
import web from "../src/Images/2.png";
import Resuable from "./Reusable";

const About = () => {
  return (
    <>
      <Resuable
        name="Here's, What you want to know about"
        desc="We’re more than just a place to work. We’re a place to learn, thrive & grow – as people & professionals.
        The web is our passion, and we’re passionate about helping businesses reach their goals."
        buttonName="Know More"
        vector={web}
        btLink="/contact"
      />
    </>
  );
};

export default About;
