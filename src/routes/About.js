import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>"Done is better than perfect."</span>
      <span>- Hubert de Yoo</span>
    </div>
  );
}

export default About;
