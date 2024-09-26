import React from "react";
import line14 from "./line-14.svg";
import line17 from "./line-17.svg";
import line2 from "./line-2.svg";
import line5 from "./line-5.svg";
import rectangle20 from "./rectangle-20.svg";
import "./style.css";

export const Court = () => {
  return (
    <div className="court">
      <div className="div">
        <div className="text-wrapper">LOGO</div>
        <div className="text-wrapper-2">Home</div>
        <div className="text-wrapper-3">About</div>
        <div className="text-wrapper-4">Contact</div>
        <div className="text-wrapper-5">LOGIN TO CONTINUE</div>
        <img className="line" alt="Line" src={line2} />
        <div className="overlap-group">
          <div className="overlap">
            <div className="text-wrapper-6">Clerk Id</div>
          </div>
          <div className="overlap-2">
            <div className="text-wrapper-6">Password</div>
            <div className="text-wrapper-6">Password</div>
          </div>
          <div className="overlap-3">
            <div className="rectangle" />
            <div className="text-wrapper-7">Login</div>
            <div className="text-wrapper-7">Login</div>
          </div>
        </div>
        <img className="img" alt="Rectangle" src={rectangle20} />
        <div className="overlap-4">
          <img className="line-2" alt="Line" src={line14} />
          <img className="line-3" alt="Line" src={line17} />
        </div>
        <div className="text-wrapper-8">Citizen</div>
        <div className="text-wrapper-9">Advocate</div>
        <div className="text-wrapper-10">Judge</div>
        <div className="text-wrapper-11">Clerk</div>
        <div className="text-wrapper-12">PP</div>
        <img className="line-4" alt="Line" src={line5} />
      </div>
    </div>
  );
};