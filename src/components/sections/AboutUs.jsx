import React from "react";
import { Button } from "../ui/Button/Button";
import DotGrid from "../../assets/svg/DotGrid.svg";
import arrowDown from "../../assets/svg/arrowDown.svg";
import upwardParabola from "../../assets/svg/upwardParabola.svg";

export const AboutUs = () => {
  return (
    <div className="pt-[17.5rem] relative">
      <img src={upwardParabola} className="w-[114rem] absolute top-5" />
      <div className="absolute left-1/2 top-0">
        <Button className="relative -left-1/2 bg-black">
          <span className="text-white font-poppins">Lets Get Started</span>
        </Button>
      </div>
      <div className="flex">
        <div className="flex flex-col w-1/2 pt-[2rem]">
          <div className="uppercase font-akira text-7xl flex flex-col gap-5 p-10 bg-green-blur ml-16 rounded-2xl w-fit">
            <div className="text-white">About</div>
            <div className="text-brand">Blends</div>
          </div>
          <div className="flex flex-col ml-[13.375rem] mt-32 w-fit items-center">
            <div className="flex px-[4.6875rem] py-[1.125rem] bg-[rgba(45,44,44,0.4)] text-white font-light text-center gap-20 rounded-xl justify-between w-fit">
              <div className="flex flex-col gap-2">
                <div className="text-5xl font-akira flex justify-center gap-1">
                  <div className="animate-slidein [--delay:300ms] opacity-0">
                    4
                  </div>
                  <div className="animate-slidein [--delay:700ms] opacity-0">
                    0
                  </div>
                  <div className="animate-slidein [--delay:1000ms] opacity-0">
                    +
                  </div>
                </div>
                <div className="text-base font-poppins">Projects Delivered</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-5xl font-akira flex justify-center gap-1">
                  <div className="animate-slidein [--delay:300ms] opacity-0">
                    1
                  </div>
                  <div className="animate-slidein [--delay:700ms] opacity-0">
                    5
                  </div>
                  <div className="animate-slidein [--delay:1000ms] opacity-0">
                    +
                  </div>
                </div>
                <div className="text-base font-poppins">Total Client's</div>
              </div>
            </div>
            <Button className="m-auto mt-[4rem]">
              <div className="flex gap-2">
                <span className="text-xl text-white font-akira">
                  Contact Us
                </span>
                <img src={arrowDown} />
              </div>
            </Button>
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <div className="relative">
            <img src={DotGrid} className="absolute z-1 left-[15rem]" />
            <div className="absolute z-2 backdrop-blur-sm w-[32.8125rem] bg-[rgba(45,44,44,0.4)] rounded-xl text-white font-poppins text-base flex flex-col px-[4.125rem] py-[4.25rem] gap-6 top-[4rem] left-[5rem]">
              <div>
                Lorem ipsum dolor sit amet consectetur. Ultrices dictum mauris
                rhoncus sit neque non tincidunt. Blandit sagittis molestie
                interdum eu nisl arcu ac vulputate. Libero commodo.
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur. Ultrices dictum mauris
                rhoncus sit neque non tincidunt. Blandit sagittis molestie
                interdum eu nisl arcu ac vulputate. Libero commodo.
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur. Ultrices dictum mauris
                rhoncus sit neque non tincidunt. Blandit sagittis molestie
                interdum eu nisl arcu ac vulputate. Libero commodo.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
