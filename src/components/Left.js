import React from "react";
import "../Stylesheets/left.css";
import add_circle from "../images/add_circle.png";
import dot from "../images/dot.png";
import location from "../images/location.png";
import raise from "../images/raise.png";
import fall from "../images/fall.png";
import previous from '../images/previous.png'
import next from '../images/next.png'
import { useState } from "react";

const Left = () => {
  const [toggler, setToggler] = useState("Slider left");
  const Toggle = () => {
    if (toggler === "Slider left") setToggler("Slider right");
    else setToggler("Slider left");
    console.log("toggled");
  };

  return (
    <div className="Baseleft">
      <div className="Top">
        <img src={add_circle} alt="Add icon" />
        <img src={dot} alt="Add icon" />
        <div className="Toggler">
          <h4> &deg;C</h4>
          <div className="Switch" onClick={Toggle}>
            <span className={toggler}></span>
          </div>
          <h4> &deg;F</h4>
        </div>
      </div>
      <div className="Location">
        <div className="LocIcon">
          <img src={location} alt="Location" className="Icon" />
          <p>New York, USA </p>
          <br />
        </div>
        <p>Today 18 Mar </p>
        <div className="LocTime">
          <p>
            <img src={raise} alt="raise" className="Icon" />
            &ensp;07:15
          </p>
          <p>
            <img src={fall} alt="raise" className="Icon" />
            &ensp;19:32
          </p>
        </div>
      </div>
      <div className="Temprature">
        <img src={previous} alt="Previous" />
        <div>
        <h1>27&deg;</h1>
        <p><img src={raise} alt="raise" className="Icon" />
        &ensp; Sunny
        </p>
        </div>
        <img src={next} alt='Next'/>
      </div>
    </div>
  );
};

export default Left;
