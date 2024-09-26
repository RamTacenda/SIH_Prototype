import React from "react";
import line12 from "./line-12.svg";
import line13 from "./line-13.svg";
import line2 from "./line-2.svg";
import line7 from "./line-7.svg";
import rectangle15 from "./rectangle-15.svg";
import "./style.css";

export const Advocate = () => {
  return (
    <div className="advocate">
      <div className="div">
        <div className="text-wrapper">LOGO</div>
        <div className="text-wrapper-2">Home</div>
        <div className="text-wrapper-3">About</div>
        <div className="text-wrapper-4">Contact</div>
        <div className="overlap-group">
          <img className="line" alt="Line" src={line12} />
          <img className="img" alt="Line" src={line13} />
        </div>
        <div className="text-wrapper-5">LOGIN TO CONTINUE</div>
        <img className="line-2" alt="Line" src={line2} />
        <div className="overlap">
          <div className="div-wrapper">
            <div className="text-wrapper-6">Advocate Id</div>
          </div>
          <div className="overlap-2">
            <div className="text-wrapper-6">Password</div>
            <div className="text-wrapper-6">Password</div>
          </div>
          <div className="overlap-3">
            <div className="text-wrapper-7">Login</div>
            <div className="text-wrapper-7">Login</div>
          </div>
        </div>
        <img className="rectangle" alt="Rectangle" src={rectangle15} />
        <div className="text-wrapper-8">Citizen</div>
        <div className="text-wrapper-9">Advocate</div>
        <div className="text-wrapper-10">Judge</div>
        <div className="text-wrapper-11">Clerk</div>
        <div className="text-wrapper-12">PP</div>
        <img className="line-3" alt="Line" src={line7} />
      </div>
    </div>
  );
};