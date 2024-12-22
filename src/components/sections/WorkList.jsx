import React from 'react';
import upwardParabola from '../../assets/svg/upwardParabola.svg';
import arrowDown from '../../assets/svg/arrowDown.svg';
import sentosa from '../../assets/images/sentosa/sentosa.png';
import liveplay from '../../assets/images/liveplay/liveplay.png';
import daulat from '../../assets/images/daulat/daulat.png';
import bharattransit from '../../assets/images/bharattransit/bharattransit.png';
import surge from '../../assets/images/surge/surge.png';
import exogear from '../../assets/images/exogear/exogear.png';
import cute from '../../assets/images/cute/cute.png';
import matrix from '../../assets/images/matrix/matrix.png';
import aasan from '../../assets/images/aasan/aasan.png';
import tshirt from '../../assets/images/tshirt/tshirt.png';
import { Button } from '../ui/Button/Button';
import { WorkCard } from '../ui/WorkCard/WorkCard';
import { LetsConnect } from '../ui/LetsConnect/LetsConnect';
import { HashLink } from 'react-router-hash-link';

export const WorkList = () => {
  const workCardlist = [
    {
      id: 1,
      title: 'Sentosa Realty',
      description: 'Branding',
      link: '/work/sentosa',
      image: sentosa,
    },
    {
      id: 2,
      title: "Liveplay.in",
      description: "Branding",
      link: "/work/liveplay",
      image: liveplay,
    },
    {
      id: 3,
      title: 'Daulat',
      description: 'Branding and Content Creation',
      link: '/work/daulat',
      image: daulat,
    },
    {
      id: 4,
      title: "Exogear",
      description: "Branding",
      link: "/work/exogear",
      image:exogear,
    },
    {
      id: 5,
      title: "Bharat Transit",
      description: "Branding",
      link: "/work/bharattransit",
      image: bharattransit,
    },
    {
      id: 6,
      title: "Surge",
      description: "Branding",
      link: "/work/surge",
      image: surge,
    },
    {
      id: 7,
      title: "Cuteiclesandlyor",
      description: "Content Creation and Social Media Management",
      link: "/work/cuteiclesandlyor",
      image: cute,
    },
    {
      id: 8,
      title: "Matrixs Bar and Kitchen",
      description: "Content Creation and Social Media Management",
      link: "/work/matrix",
      image: matrix,
    },
    {
      id: 9,
      title: "Aasaan",
      description: "Content Creation and Social Media Management",
      link: "/work/aasan",
      image: aasan,
    },
    {
      id: 10,
      title: "The T-Shirt Store",
      description: "Product Design",
      link: "/work/tshirt",
      image: tshirt,
    }

  ];
  return (
    <div className="py-10 relative" id="work">
      <img src={upwardParabola} className="w-full mx-auto absolute top-40" alt="Decorative" />
      <div className="absolute left-1/2 top-56 transform -translate-x-1/2">
        <HashLink smooth to="/work/#work">
          <Button className="relative bg-black rounded-[1.5rem] py-3 px-4">
            <div className="flex gap-2  items-center">
              <span className="text-base sm:text-lg text-white font-akira">OUR WORK</span>
              <img src={arrowDown} alt="Arrow Down" />
            </div>
          </Button>
        </HashLink>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full lg:w-3/5 mx-auto gap-5 justify-items-center items-center mt-80 lg:mt-96 py-20">
        {workCardlist.map((item) => {
          return (
            <WorkCard
              key={item.id}
              img={item.image}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          );
        })}
      </div>

      <LetsConnect />
    </div>
  );
};
