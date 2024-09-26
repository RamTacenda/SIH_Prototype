import React from "react";
import image4 from "./image-4.png";
import image5 from "./image-5.png";
import image6 from "./image-6.png";
import "./style.css";

export const RequiredDocuments = () => {
  return (
    <div className="required-documents">
      <div className="div">
        <div className="text-wrapper">REQUIREMENTS</div>
        <div className="overlap">
          <img className="image" alt="Image" src={image4} />
        </div>
        <div className="text-wrapper-2">DOCUMENTS</div>
        <div className="text-wrapper-3">SURETY</div>
        <div className="text-wrapper-4">FINE</div>
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="rectangle-2" />
          <div className="text-wrapper-5">Biometric</div>
          <img className="img" alt="Image" src={image5} />
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-6">Payment</div>
          <img className="image-2" alt="Image" src={image6} />
        </div>
        <div className="overlap-3">
          <div className="rectangle-3" />
          <div className="text-wrapper-7">SUBMIT</div>
        </div>
      </div>
    </div>
  );
};