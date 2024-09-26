import React from "react";
import image3 from "./image-3.png";
import line20 from "./line-20.svg";
import line21 from "./line-21.svg";
import "./style.css";

export const CourtDashboard = () => {
  return (
    <div className="court-dashboard">
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
            <img className="line" alt="Line" src={line20} />
            <img className="img" alt="Line" src={line21} />
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
          <img className="image" alt="Image" src={image3} />
        </div>
      </div>
    </div>
  );
};