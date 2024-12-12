import React from "react";
import { TextDivider } from "../ui/TextDivider/TextDivider";
import SimpleSlider from "../ui/Slider/SimpleSlider";

export const HearFromThem = () => {
  return (
    <div className="bg-brand py-[5rem]">
      <TextDivider linecolor="white">
        <div className="text-black font-akira text-5xl uppercase flex">
          Hear from <div className="text-white">&nbsp;them</div>
        </div>
      </TextDivider>
      <div className="px-[5rem] mt-[2rem]">
        <SimpleSlider />
      </div>
    </div>
  );
};
