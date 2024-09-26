import React from "react";
import "./style.css";

export const Eligibilty = () => {
  return (
    <div className="eligibilty">
      <div className="div">
        <div className="overlap-group">
          <img className="line" alt="Line" src="/img/line-8.svg" />
          <img className="img" alt="Line" src="/img/line-9.svg" />
          <div className="text-wrapper">PROCEDURE</div>
        </div>
        <div className="text-wrapper-2">FIR SEARCH</div>
        <div className="overlap">
          <div className="text-wrapper-3">FIR No:</div>
          <div className="rectangle" />
        </div>
        <div className="text-wrapper-4">Eligibilty:</div>
        <div className="rectangle-2" />
        <div className="overlap-2">
          <img className="line-2" alt="Line" src="/img/line-21.svg" />
          <div className="text-wrapper-5">FIR</div>
        </div>
      </div>
    </div>
  );
};
