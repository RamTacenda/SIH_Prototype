import React from "react";
import image2 from "./image-2.png";
import line18 from "./line-18.svg";
import line19 from "./line-19.svg";
import "./style.css";

export const JudgeDashboard = () => {
  return (
    <div className="judge-dashboard">
      <div className="div">
        <div className="text-wrapper">DASHBOARD</div>
        <div className="overlap">
          <div className="overlap-group">
            <div className="group" />
            <div className="text-wrapper-2">View</div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
              <div className="text-wrapper-3">View</div>
              <div className="text-wrapper-3">View</div>
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-group-2">
              <div className="text-wrapper-3">View</div>
            </div>
          </div>
          <div className="text-wrapper-4">Bail Details</div>
          <div className="overlap-2">
            <img className="line" alt="Line" src={line18} />
            <img className="img" alt="Line" src={line19} />
          </div>
          <div className="text-wrapper-5">Status</div>
          <div className="div-wrapper">
            <div className="text-wrapper-6">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
          </div>
          <div className="overlap-3">
            <div className="text-wrapper-7">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
          </div>
          <div className="overlap-4">
            <div className="text-wrapper-8">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
          </div>
          <div className="overlap-5">
            <div className="text-wrapper-9">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
          </div>
          <div className="overlap-6">
            <div className="group" />
            <div className="text-wrapper-10">View</div>
          </div>
        </div>
        <div className="overlap-7">
          <div className="group-2" />
          <div className="text-wrapper-11">SEARCH</div>
          <img className="image" alt="Image" src={image2} />
        </div>
      </div>
    </div>
  );
};