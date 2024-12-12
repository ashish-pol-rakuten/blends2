import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import jessica from "../../../assets/images/jessica.png";
import goldstar from "../../../assets/svg/star2.svg";

const sliderData = [
  {
    name: "Jessica Evans",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan condimentum massa ac malesuada. Sed do eiusmod tempor incididunt.",
    image: jessica,
  },
  {
    name: "Jessica Evans",
    text: "Suspendisse potenti. In hac habitasse platea dictumst. Integer tempor fringilla augue, non posuere lacus varius vel.",
    image: jessica,
  },
  {
    name: "Jessica Evans",
    text: "Quisque nec ultrices libero, eget pulvinar lectus. Vestibulum et nisi vitae est aliquet feugiat. Proin vel nunc quis purus tincidunt fermentum.",
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
    autoplaySpeed: 2000,
  };
  return (
    <Slider {...settings}>
      {sliderData.map((element, index) => (
        <div className="bg-white flex rounded-lg">
          <div className="flex flex-col items-start">
            <div className="flex">
              <img src={goldstar} />
              <img src={goldstar} />
              <img src={goldstar} />
              <img src={goldstar} />
              <img src={goldstar} />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
