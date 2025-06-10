import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="loader-bar bar1"></div>
        <div className="loader-bar bar2"></div>
        <div className="loader-bar bar3"></div>
        <div className="loader-bar bar4"></div>
        <div className="loader-bar bar5"></div>
      </div>
    </div>
  );
};

export default Loader;
