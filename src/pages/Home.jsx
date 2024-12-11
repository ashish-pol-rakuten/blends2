import React from "react";
import { Hero } from "../components/sections/Hero";
import { AboutUs } from "../components/sections/AboutUs";
import { Mission } from "../components/sections/Mission";
import { Projects } from "../components/sections/Projects";
import { ConsultUs } from "../components/sections/ConsultUs";
import { WhatWeOffer } from "../components/sections/WhatWeOffer";

export const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Mission />
      <Projects />
      <WhatWeOffer />
      <ConsultUs />
    </div>
  );
};
