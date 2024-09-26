import React from "react";
import line18 from "./line-18.svg";
import line19 from "./line-19.svg";
import line22 from "./line-22.svg";
import "./style.css";

export const AdvocateDashboard = () => {
  return (
    <div className="advocate-dashboard">
      <div className="div">
        <div className="text-wrapper">DASHBOARD</div>
        <div className="text-wrapper-2">BAIL APPLICATION STATUS</div>
        <div className="overlap">
          <div className="rectangle" />
          <div className="text-wrapper-3">APPLY BAIL</div>
        </div>
        <div className="overlap-group">
          <div className="overlap-2">
            <div className="rectangle-2" />
            <div className="text-wrapper-4">View</div>
            <div className="text-wrapper-5">View</div>
            <div className="rectangle-3" />
            <div className="text-wrapper-6">Denied</div>
            <div className="text-wrapper-7">Applied</div>
            <img className="line" alt="Line" src={line18} />
            <img className="img" alt="Line" src={line19} />
            <div className="text-wrapper-8">Approved</div>
            <img className="line-2" alt="Line" src={line22} />
            <div className="rectangle-4" />
            <div className="rectangle-4" />
            <div className="text-wrapper-5">View</div>
            <div className="text-wrapper-9">View</div>
          </div>
          <div className="overlap-3">
            <div className="rectangle-5" />
            <div className="text-wrapper-10">View</div>
          </div>
          <div className="text-wrapper-11">Required Documents</div>
          <div className="text-wrapper-12">Bail Details</div>
          <div className="text-wrapper-13">Status</div>
          <div className="div-wrapper">
            <div className="text-wrapper-14">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
          </div>
          <div className="overlap-4">
            <div className="text-wrapper-15">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
          </div>
          <div className="overlap-5">
            <div className="text-wrapper-16">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
          </div>
          <div className="overlap-6">
            <div className="text-wrapper-17">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
          </div>
          <div className="text-wrapper-18">Download</div>
        </div>
        <div className="overlap-7">
          <div className="rectangle-6" />
          <div className="text-wrapper-3">MANAGE CLIENTS</div>
        </div>
      </div>
    </div>
  );
};