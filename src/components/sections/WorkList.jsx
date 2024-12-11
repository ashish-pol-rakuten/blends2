import React from "react";
import upwardParabola from "../../assets/svg/upwardParabola.svg";
import arrowDown from "../../assets/svg/arrowDown.svg";
import daulat from "../../assets/images/daulat.png";
import sentosa from "../../assets/images/sentosa.png";
import surge from "../../assets/images/surge.png";
import exogear from "../../assets/images/exogear.png";
import { Button } from "../ui/Button/Button";
import { WorkCard } from "../ui/WorkCard/WorkCard";
import { LetsConnect } from "../ui/LetsConnect/LetsConnect";

export const WorkList = () => {
  return (
    <div className="py-5rem relative">
      <img src={upwardParabola} className="w-[114rem] absolute top-5" />
      <div className="absolute left-1/2 top-0">
        <Button className="relative -left-1/2 bg-black rounded-[1.5rem] py-[1rem] px-[1rem]">
          <div className="flex gap-2">
            <span className="text-xl text-white font-akira">OUR WORK</span>
            <img src={arrowDown} />
          </div>
        </Button>
      </div>
      <div className="flex flex-col mt-[10rem] px-[3.75rem] pt-[15rem] pb-[10rem] gap-[3rem]">
        <div className="flex gap-[3.75rem] justify-center">
          <WorkCard
            img={daulat}
            title="Daulat"
            description="Web Development, Design"
          />
          <WorkCard
            img={sentosa}
            title="Sentosa"
            description="Web Development, Design"
            link="/work/sentosa"
          />
        </div>
        <div className="flex gap-[3.75rem] justify-center">
          <WorkCard
            img={surge}
            title="Surge"
            description="Web Development, Design"
          />
          <WorkCard
            img={exogear}
            title="Exogear"
            description="Web Development, Design"
          />
        </div>
      </div>
      <LetsConnect />
      <div className="mt-[5rem]"></div>
    </div>
  );
};
