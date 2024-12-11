import React from "react";
import blends from "../../../assets/svg/blends.svg";
import blends2 from "../../../assets/svg/blends2.svg";
import facebook from "../../../assets/svg/facebook.svg";
import twitter from "../../../assets/svg/twitter.svg";
import instagram from "../../../assets/svg/instagram.svg";
import arrowTl from "../../../assets/svg/arrow-tl.svg";
import { Button } from "../../ui/Button/Button";

export const Footer = () => {
  return (
    <div>
      <hr className="block h-1 border-t-[1px] w-full border-brand" />
      <div className="flex py-[7rem]">
        <div className="flex flex-col ml-[3.75rem] gap-[1.5rem]">
          <div className="flex gap-[1.375rem]">
            <img src={blends2} className="h-[6.25rem]" />
            <img src={blends} className="h-[6.25rem]" />
          </div>
          <div className="text-white font-poppins text-[1rem] font-light">
            Lorem ipsum dolor sit amet consectetur. Ultrices
            <br /> dictum mauris rhoncus sit neque non tincidunt.
          </div>
        </div>
        <div className="flex flex-col text-white font-akira text-[1.25rem] gap-8 uppercase ml-[17.5rem]">
          <div>Work</div>
          <div>Services</div>
          <div>About</div>
          <div>Contact</div>
        </div>
        <div className="flex flex-col ml-[10.75rem] mt-[2rem] gap-[1.25rem]">
          <div className="flex gap-[2rem]">
            <img src={facebook} />
            <img src={twitter} />
            <img src={instagram} />
          </div>
          <div className="text-white font-poppins text-[1rem] font-light">
            Email: info@blends.com
          </div>
          <Button className="py-1 rounded-[2.5rem] px-2 -ml-2">
            <div className="flex gap-1 items-center px-1">
              <span className="text-[1.5rem] text-white font-akira uppercase tracking-wide">
                Get in touch
              </span>
              <img src={arrowTl} />
            </div>
          </Button>
        </div>
      </div>
      <hr className="block h-1 border-t-[1px] w-full border-brand" />
      <div className="flex items-center justify-center py-[2.625rem] text-white opacity-[0.8] font-poppins">
        © Copyright 2024 Blends Inc.
      </div>
      <hr className="block h-1 border-t-[1px] w-full border-brand" />
    </div>
  );
};
