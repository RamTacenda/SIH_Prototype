import React from "react";
import line18 from "./line-18.svg";
import line19 from "./line-19.svg";
import line22 from "./line-22.svg";
import "./style.css";

export const AdvocateSearch = () => {
  return (
    <div className="advocate-search">
      <div className="div">
        <div className="text-wrapper">Advocate search</div>
        <div className="overlap">
          <div className="rectangle" />
          <div className="text-wrapper-2">Chat with Advocates?</div>
        </div>
        <div className="overlap-group">
          <div className="overlap-2">
            <div className="text-wrapper-3">View</div>
            <div className="environmental">
              Environmental
              <br />
              Affairs
            </div>
            <div className="text-wrapper-4">Bankruptcy</div>
            <img className="line" alt="Line" src={line18} />
            <img className="img" alt="Line" src={line19} />
            <div className="criminal-affairs">
              Criminal
              <br />
              Affairs
            </div>
            <img className="line-2" alt="Line" src={line22} />
            <div className="rectangle-2" />
            <div className="rectangle-3" />
            <div className="rectangle-4" />
            <div className="rectangle-5" />
            <div className="text-wrapper-5">Phone no</div>
            <div className="text-wrapper-6">Phone no</div>
            <div className="text-wrapper-7">Phone no</div>
          </div>
          <div className="corporate-affairs">
            Corporate
            <br />
            affairs
          </div>
          <div className="text-wrapper-8">Advocates Details</div>
          <div className="text-wrapper-9">Category</div>
          <div className="div-wrapper">
            <div className="text-wrapper-10">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
          </div>
          <div className="overlap-3">
            <div className="text-wrapper-11">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
          </div>
          <div className="overlap-4">
            <div className="text-wrapper-12">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
          </div>
          <div className="overlap-5">
            <div className="text-wrapper-13">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
          </div>
          <div className="text-wrapper-14">Contact info</div>
          <div className="overlap-6">
            <div className="text-wrapper-15">Phone no</div>
          </div>
        </div>
      </div>
    </div>
  );
};