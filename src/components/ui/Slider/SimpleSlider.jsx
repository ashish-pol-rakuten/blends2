import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import jessica from "../../../assets/images/jessica.png";
import goldstar from "../../../assets/svg/star2.svg";

const sliderData = [
  {
    name: "Jessica Evans",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan condimentum massa ac malesuada. Sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan condimentum massa ac malesuada. Sed do eiusmod tempor incididunt.",
    image: jessica,
  },
  {
    name: "Jessica Evans",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan condimentum massa ac malesuada. Sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan condimentum massa ac malesuada. Sed do eiusmod tempor incididunt.",
    image: jessica,
  },
  {
    name: "Jessica Evans",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan condimentum massa ac malesuada. Sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan condimentum massa ac malesuada. Sed do eiusmod tempor incididunt.",
    image: jessica,
  },
];

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <Slider {...settings}>
      {sliderData.map((element, index) => (
        <div
          className="bg-white flex rounded-lg py-[4.5rem] px-[3.25rem] font-poppins"
          key={index}
        >
          <div className="flex">
            <div className="flex flex-col items-start flex-grow">
              <div className="flex">
                <img src={goldstar} />
                <img src={goldstar} />
                <img src={goldstar} />
                <img src={goldstar} />
                <img src={goldstar} />
              </div>
              <div className="text-[2.25rem] text-black">{element.name}</div>
              <div className="text-[#575757] text-[1.25rem] font-light mt-[2rem]">
                {element.text}
              </div>
            </div>

            <img src={element.image} className="w-[30rem] h-[30rem]" />
          </div>
        </div>
      ))}
    </Slider>
  );
}
