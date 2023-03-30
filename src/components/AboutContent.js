import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom" 


const AboutContent = () => {
  return <div className="about">
    <div className="left">
      <h1>1</h1>
      <p>1</p>
      <Link to="/contact">
        <button className="btn">Post</button>
      </Link>
    </div>

  </div>;
};

export default AboutContent;
