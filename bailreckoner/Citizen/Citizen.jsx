import React from "react";
import "./style.css";

export const Citizen = () => {
  return (
    <div className="citizen">
      <div className="div">
        <div className="overlap-group">
          <div className="rectangle" />
          <img className="line" alt="Line" src="/img/line-4.svg" />
          <img className="img" alt="Line" src="/img/line-6.svg" />
        </div>
        <div className="text-wrapper">LOGIN TO CONTINUE</div>
        <div className="text-wrapper-2">Citizen</div>
        <div className="text-wrapper-3">Advocate</div>
        <div className="text-wrapper-4">Judge</div>
        <div className="text-wrapper-5">Clerk</div>
        <div className="text-wrapper-6">PP</div>
        <img className="line-2" alt="Line" src="/img/line-5.svg" />
        <div className="overlap">
          <div className="div-wrapper">
            <div className="text-wrapper-7">Citizen Id</div>
          </div>
          <div className="overlap-2">
            <div className="text-wrapper-7">OTP</div>
          </div>
          <div className="overlap-3">
            <div className="rectangle-2" />
            <div className="text-wrapper-8">Login</div>
          </div>
        </div>
        <div className="text-wrapper-9">LOGO</div>
        <div className="text-wrapper-10">Home</div>
        <div className="text-wrapper-11">About</div>
        <div className="text-wrapper-12">Contact</div>
      </div>
    </div>
  );
};
