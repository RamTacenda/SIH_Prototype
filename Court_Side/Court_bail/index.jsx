import React from "react";
import "./style.css";

export const CourtBail = () => {
  return (
    <div className="COURT-BAIL">
      <div className="div">
        <div className="text-wrapper">BAIL APPLICATION</div>
        <div className="text-wrapper-2">DISTRICT</div>
        <div className="text-wrapper-3">FIR NO</div>
        <div className="text-wrapper-4">POLICE STATION</div>
        <div className="rectangle" />
        <div className="rectangle-2" />
        <div className="rectangle-3" />
        <div className="text-wrapper-5">DOCUMENTS</div>
        <div className="text-wrapper-6">REASON</div>
        <div className="rectangle-4" />
        <div className="rectangle-5" />
        <div className="overlap-group">
          <div className="rectangle-6" />
          <div className="text-wrapper-7">PROCEED</div>
        </div>
        <div className="overlap">
          <div className="rectangle-6" />
          <div className="text-wrapper-8">RETURN</div>
        </div>
      </div>
    </div>
  );
};