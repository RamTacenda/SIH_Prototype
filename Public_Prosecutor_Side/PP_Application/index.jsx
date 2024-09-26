import React from "react";
import image3 from "./image-3.png";
import line20 from "./line-20.svg";
import line21 from "./line-21.svg";
import "./style.css";

export const PpApplications = () => {
  return (
    <div className="PP-APPLICATIONS">
      <div className="div">
        <div className="text-wrapper">APPLICATIONS</div>
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="text-wrapper-2">Applied</div>
          <div className="text-wrapper-3">Applied</div>
          <div className="text-wrapper-4">Applied</div>
          <div className="text-wrapper-5">Bail Details</div>
          <img className="line" alt="Line" src={line20} />
          <img className="img" alt="Line" src={line21} />
          <div className="text-wrapper-6">Status</div>
          <div className="rectangle-2" />
          <div className="text-wrapper-7">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
          <div className="rectangle-3" />
          <div className="rectangle-4" />
          <div className="text-wrapper-8">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
          <div className="rectangle-5" />
          <div className="text-wrapper-9">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
          <div className="text-wrapper-10">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
          <div className="text-wrapper-11">Applied</div>
        </div>
        <div className="overlap">
          <div className="group" />
          <div className="text-wrapper-12">SEARCH</div>
          <img className="image" alt="Image" src={image3} />
        </div>
      </div>
    </div>
  );
};