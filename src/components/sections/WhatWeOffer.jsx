import React from "react";
import { TextDivider } from "../ui/TextDivider/TextDivider";
import { OfferCard } from "../ui/OfferCard/OfferCard";

export const WhatWeOffer = () => {
  const offerList = [
    {
      number: "01",
      title: "Branding",
      description: "Create a distinctive and memorable brand identity that aligns with your vision. Our expert design services ensure your brand stands out in a competitive market."
    },
    {
      number: "02",
      title: "Graphic Design Services",
      description: "Design visually stunning graphics that elevate your brand’s narrative. Our graphic design services focus on creating compelling visuals for your marketing materials."
    },
    {
      number: "03",
      title: "Digital Marketing Solutions",
      description: "Drive growth and engagement with innovative digital marketing strategies. We specialize in delivering SEO-driven campaigns that enhance your online presence."
    },
    {
      number: "04",
      title: "Social Media Content",
      description: "Amplify your brand’s reach with impactful social media marketing strategies. We create tailored campaigns that increase engagement and drive traffic to your business."
    },
    {
      number: "05",
      title: "UI/UX Design",
      description: "Improve customer satisfaction with intuitive user experience design. We focus on creating seamless, user-centric digital experiences that enhance engagement and conversion rates."
    },
    {
      number: "06",
      title: "Content Creation",
      description: "Craft high-quality, engaging content that resonates with your target audience and drives brand awareness. Our expert content creation services focus on developing SEO-optimized blogs, articles, social media posts, and multimedia content tailored to your brand’s voice and objectives."
    },
  ];
  return (
    <div
      className="mt-8 md:mt-[4rem] mb-16 md:mb-[8.5rem] px-4 md:px-0"
      id="whatweoffer"
    >
      <TextDivider>
        <div className="text-white font-akira font-semibold text-3xl sm:text-4xl md:text-6xl lg:text-7xl uppercase text-center md:text-left">
          "Igniting Brands that
        </div>
      </TextDivider>
      <TextDivider>
        <div className="text-white font-akira font-semibold text-3xl sm:text-4xl md:text-6xl lg:text-7xl uppercase flex justify-center md:justify-start">
          Drive
          <div className="text-brand">&nbsp;Change"</div>
        </div>
      </TextDivider>
      <div className="text-[#B8B8B8] font-akira text-2xl md:text-[3rem] font-light underline mt-8 md:mt-[5rem] ml-0 md:ml-[2rem] text-center md:text-left">
        What we offer:
      </div>
      <div className="w-full mt-8 mx-0 lg:mx-8">
        <div className="grid grid-cols-1 md:grid-cols-3 font-poppins">
          {offerList.map((item) => {
            return(
              <OfferCard 
                key={item.number}
                number={item.number}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>

      </div>
    </div>
  );
};