import React from "react";
import "./style.css";

export const Schedule = () => {
  return (
    <div className="schedule">
      <div className="div">
        <div className="text-wrapper">SCHEDULE HEARING</div>
        <div className="text-wrapper-2">DISTRICT</div>
        <div className="text-wrapper-3">FIR NO</div>
        <div className="text-wrapper-4">POLICE STATION</div>
        <div className="rectangle" />
        <div className="rectangle-2" />
        <div className="rectangle-3" />
        <div className="text-wrapper-5">DOCUMENTS</div>
        <div className="rectangle-4" />
        <div className="text-wrapper-6">DATE</div>
        <div className="rectangle-5" />
        <div className="text-wrapper-7">REASON</div>
        <div className="rectangle-6" />
        <div className="overlap-group">
          <div className="rectangle-7" />
          <div className="text-wrapper-8">SCHEDULE</div>
        </div>
      </div>
    </div>
  );
};