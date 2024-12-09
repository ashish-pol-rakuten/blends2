import React from "react";
import StarLogo from "../../../assets/svg/star.svg";
import DotLogo from "../../../assets/svg/dot.svg";

export const ScrollText = () => {
  return (
    <div className="font-akira text-white text-4xl flex gap-2 overflow-x-hidden relative uppercase">
      <div className="flex gap-2 animate-marquee whitespace-nowrap">
        <img src={StarLogo} />
        <div>Innovate</div>
        <img src={DotLogo} />
        <div>Engage</div>
        <img src={DotLogo} />
        <div>Grow</div>
        <img src={StarLogo} />
        <div>Innovate</div>
        <img src={DotLogo} />
        <div>Engage</div>
        <img src={DotLogo} />
        <div>Grow</div>
      </div>
      <div className="flex gap-2 absolute top-0 animate-marquee2 whitespace-nowrap">
        <img src={StarLogo} />
        <div>Innovate</div>
        <img src={DotLogo} />
        <div>Engage</div>
        <img src={DotLogo} />
        <div>Grow</div>
        <img src={StarLogo} />
        <div>Innovate</div>
        <img src={DotLogo} />
        <div>Engage</div>
        <img src={DotLogo} />
        <div>Grow</div>
      </div>
    </div>
  );
};
