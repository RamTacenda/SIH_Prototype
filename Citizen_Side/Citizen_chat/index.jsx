import React from "react";
import rectangle64 from "./rectangle-64.svg";
import "./style.css";

export const CitizenChat = () => {
  return (
    <div className="CITIZEN-CHAT">
      <div className="div">
        <div className="overlap">
          <div className="overlap-group">
            <div className="rectangle" />
            <div className="rectangle-2" />
            <div className="text-wrapper">ATVOCATE 2</div>
            <div className="rectangle-3" />
            <div className="text-wrapper-2">ADVOCATE 1</div>
            <div className="rectangle-4" />
            <div className="text-wrapper-3">ADVOCATE CHAT</div>
          </div>
          <div className="overlap-2">
            <div className="rectangle-5" />
            <div className="rectangle-6" />
            <div className="text-wrapper-4">SEND</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-5">XXXXXXXXXXXX</div>
          </div>
          <div className="overlap-3">
            <div className="text-wrapper-6">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
          </div>
          <div className="overlap-4">
            <div className="text-wrapper-7">XXXXXXXXXXXX</div>
          </div>
        </div>
        <img className="img" alt="Rectangle" src={rectangle64} />
      </div>
    </div>
  );
};