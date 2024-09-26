import React from "react";
import line19 from "./line-19.svg";
import "./style.css";

export const RiskCalculation = () => {
  return (
    <div className="risk-calculation">
      <div className="div">
        <div className="overlap">
          <div className="overlap-group">
            <div className="group" />
            <div className="text-wrapper">View</div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
              <div className="text-wrapper-2">View</div>
              <div className="text-wrapper-2">View</div>
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-group-2">
              <div className="text-wrapper-2">View</div>
            </div>
          </div>
          <div className="text-wrapper-3">Relevant Judgements</div>
          <img className="line" alt="Line" src={line19} />
          <div className="div-wrapper">
            <div className="text-wrapper-4">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
          </div>
          <div className="overlap-2">
            <div className="text-wrapper-5">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
          </div>
          <div className="overlap-3">
            <div className="text-wrapper-6">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
          </div>
          <div className="overlap-4">
            <div className="text-wrapper-7">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
          </div>
          <div className="overlap-5">
            <div className="group" />
            <div className="text-wrapper-8">View</div>
          </div>
        </div>
        <div className="overlap-6">
          <div className="text-wrapper-9">Calculated Risk Factor</div>
          <div className="overlap-7">
            <div className="text-wrapper-4">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
          </div>
          <div className="overlap-8">
            <div className="text-wrapper-10">Risk %</div>
          </div>
        </div>
        <div className="text-wrapper-11">Assitant</div>
      </div>
    </div>
  );
};