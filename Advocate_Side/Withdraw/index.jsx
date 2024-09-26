import React from "react";
import line8 from "./line-8.svg";
import line9 from "./line-9.svg";
import "./style.css";

export const Withdraw = () => {
  return (
    <div className="withdraw">
      <div className="div">
        <div className="overlap">
          <img className="line" alt="Line" src={line8} />
          <img className="img" alt="Line" src={line9} />
          <div className="text-wrapper">Application Details</div>
        </div>
        <div className="text-wrapper-2">APPLICATION</div>
        <div className="overlap-group">
          <div className="text-wrapper-3">FIR No:</div>
          <div className="rectangle" />
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-4">APPLY BAIL</div>
          <div className="rectangle-2" />
          <div className="text-wrapper-4">WITHDRAW</div>
        </div>
      </div>
    </div>
  );
};