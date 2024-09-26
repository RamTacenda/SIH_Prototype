import React from "react";
import image2 from "./image-2.png";
import rectangle43 from "./rectangle-43.svg";
import rectangle44 from "./rectangle-44.svg";
import rectangle45 from "./rectangle-45.svg";
import "./style.css";

export const PeriodFir = () => {
  return (
    <div className="period-FIR">
      <div className="div">
        <div className="text-wrapper">FIR</div>
        <div className="overlap">
          <div className="rectangle" />
          <div className="text-wrapper-2">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
        </div>
        <div className="overlap-group">
          <img className="img" alt="Rectangle" src={rectangle43} />
          <div className="text-wrapper-3">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
        </div>
        <div className="overlap-2">
          <img className="img" alt="Rectangle" src={rectangle44} />
          <div className="text-wrapper-3">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
        </div>
        <div className="overlap-3">
          <img className="img" alt="Rectangle" src={rectangle45} />
          <div className="text-wrapper-4">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
        </div>
        <div className="text-wrapper-5">From</div>
        <div className="rectangle-2" />
        <div className="text-wrapper-6">To</div>
        <div className="rectangle-3" />
        <div className="overlap-4">
          <div className="text-wrapper-7">SEARCH</div>
          <img className="image" alt="Image" src={image2} />
          <div className="group" />
        </div>
      </div>
    </div>
  );
};