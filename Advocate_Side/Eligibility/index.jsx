import React from "react";
import line8 from "./line-8.svg";
import line9 from "./line-9.svg";
import "./style.css";

export const Eligibilty = () => {
  return (
    <div className="eligibilty">
      <div className="div">
        <div className="overlap-group">
          <img className="line" alt="Line" src={line8} />
          <img className="img" alt="Line" src={line9} />
          <div className="text-wrapper">FIR Details</div>
        </div>
        <div className="text-wrapper-2">FIR</div>
        <div className="overlap">
          <div className="text-wrapper-3">FIR No:</div>
          <div className="rectangle" />
        </div>
        <div className="text-wrapper-4">Eligibilty:</div>
        <div className="rectangle-2" />
        <div className="overlap-2">
          <div className="rectangle-3" />
          <div className="text-wrapper-5">APPLY BAIL</div>
          <div className="rectangle-3" />
          <div className="text-wrapper-5">APPLY BAIL</div>
        </div>
        <div className="overlap-3">
          <div className="rectangle-3" />
          <div className="text-wrapper-5">APPEAL</div>
        </div>
      </div>
    </div>
  );
};