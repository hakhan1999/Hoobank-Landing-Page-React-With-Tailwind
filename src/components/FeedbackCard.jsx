import React from "react";
import { quotes } from "../assets";
import { feedback } from "../constants";

const FeedbackCard = ({ content, name, title, img, index }) => {
  return (
    <div
      className={`flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card ${
        index === feedback.length - 3 ? "active" : ""
      }`}
    >
      <img
        src={quotes}
        alt="Quotes"
        className="w-[42px] h-[27px] object-contain"
      />
      <p className="font-poppins font-normal text-[18px] text-white my-10 leading-[32px]">
        {content}
      </p>
      <div className="flex flex-row">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] text-white leading-[32px]">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[16px] text-dimWhite leading-[24px]">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
