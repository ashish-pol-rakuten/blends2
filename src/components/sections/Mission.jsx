import React from "react";
import mission from "../..//assets/svg/mission.svg";
import { StaggerText } from "../ui/StaggerText/StaggerText";
import { BlendsRotatingIcon } from "../ui/BlendsRotatingIcon/BlendsRotatingIcon";

export const Mission = () => {
  return (
    <div className="relative flex bg-mission bg-cover bg-no-repeat h-[70rem] min-[1920px]:h-[85rem] justify-end">
      <div className="text-black mt-60">
        <StaggerText
          className="text-8xl font-akira text-black gap-[3rem] items-end pr-[3.25rem]"
          text={["you", "imagine", "we", "will", "craft"]}
          fontColor="text-black"
          animationType="animated-slideinleft"
        />
      </div>
      <div className="absolute top-[37.5rem] left-[22.5rem]">
        <BlendsRotatingIcon className="text-white font-akira w-[15rem] h-[15rem]" />
      </div>
    </div>
  );
};
