import React from "react";
import { ScrollText } from "../ui/ScrollText/ScrollText";
import { Button } from "../ui/Button/Button";
import projectsImg from "../../assets/images/projects.png";
import greenline from "../../assets/svg/greenline.svg";

export const Projects = () => {
  return (
    <div className="relative">
      <div className="relative -mt-32  text-white font-akira text-7xl flex flex-col content-center w-full items-center">
        <div>OUR</div>
        <div className="text-brand">PROJECTS</div>
      </div>
      <div className="h-[8rem]"></div>
      <img src={projectsImg} className="w-full" />
      <div className="z-10 absolute top-[77%] w-full bg-grey-blur backdrop-blur-[30px] h-[15rem] flex items-center">
        <Button className="bg-black ml-[24.5rem] px-10">
          <span className="text-white font-poppins">See all work</span>
        </Button>
        <div className="text-white font-poppins w-[40%] ml-[13.75rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
          voluptates explicabo. Sint minus eum rem iure tenetur. Dolorem beatae
          doloribus sunt velit, dolore quibusdam fugiat fugit molestiae eaque
          modi? Culpa.
        </div>
      </div>
      <img src={greenline} className="absolute z-10 bottom-0 w-full" />
    </div>
  );
};
