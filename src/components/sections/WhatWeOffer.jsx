import React from "react";
import { TextDivider } from "../ui/TextDivider/TextDivider";
import { OfferCard } from "../ui/OfferCard/OfferCard";

export const WhatWeOffer = () => {
  return (
    <div className="mt-[4rem] mb-[8.5rem]">
      <TextDivider>
        <div className="text-white font-akira font-semibold text-6xl uppercase">
          "Igniting Brands that
        </div>
      </TextDivider>
      <TextDivider>
        <div className="text-white font-akira font-semibold text-6xl uppercase flex">
          Drive
          <div className="text-brand">&nbsp;Change"</div>
        </div>
      </TextDivider>

      <div className="text-[#B8B8B8] font-poppins font-light underline mt-[5rem] ml-[12.5rem]">
        What we offer:
      </div>
      <div className="w-full mt-[5rem]">
        <div className="flex flex-col font-poppins gap-[5rem]">
          <div className="flex gap-[10rem] justify-center">
            <OfferCard
              number="01"
              title="Branding"
              description="Lorem ipsum dolor sit amet consectetur. Ultrices dictum mauris
                rhoncus sit neque non tincidunt."
            />
            <OfferCard
              number="02"
              title="Visual Identity"
              description="Lorem ipsum dolor sit amet consectetur. Ultrices dictum mauris
                rhoncus sit neque non tincidunt."
            />
          </div>
          <div className="flex gap-[10rem] justify-center">
            <OfferCard
              number="03"
              title="Social Media Content"
              description="Lorem ipsum dolor sit amet consectetur. Ultrices dictum mauris
                rhoncus sit neque non tincidunt."
            />
            <OfferCard
              number="04"
              title="UI/UX Design"
              description="Lorem ipsum dolor sit amet consectetur. Ultrices dictum mauris
                rhoncus sit neque non tincidunt."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
