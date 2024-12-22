import React from "react";
import "./OfferCard.css";

export const OfferCard = ({ number, title, description }) => {
  return (
    <div className="flex flex-col relative groupt p-8">
      <div className="cardcontent relative">
        <div className="text-brand font-semibold text-3xl">{number}</div>
        <div className="text-white font-semibold text-3xl">{title}</div>
        <div className="text-white text-base font-light mt-4 mb-8">
          {description}
        </div>
        <div className="lineh2"></div>
      </div>
      <div className="lineh"></div>
      <div className="linev"></div>
    </div>
  );
};