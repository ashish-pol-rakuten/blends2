import React from 'react';
import { HashLink } from 'react-router-hash-link';
import connect from '../../../assets/svg/connect.svg';
import blackarrowTl from '../../../assets/svg/black-arrow-tl.svg';
import { Button } from '../Button/Button';

export const LetsConnect = ({ className }) => {
  return (
    <div
      className={`${className} w-full lg:w-[82.5rem] h-[16rem] sm:h-[20rem] lg:h-[24rem] m-auto flex flex-col items-center justify-center relative gap-6 sm:gap-8 lg:gap-[4rem] px-4`}
    >
      {/* Background Image */}
      <img
        src={connect}
        className="w-full h-full absolute top-0 left-0 z-0 object-cover"
        alt="Connect Background"
      />

      {/* Title */}
      <div className="text-white relative z-10 uppercase font-akira text-4xl lg:text-6xl text-center">
        Let's <br /> Connect
      </div>

      {/* Button */}
      <HashLink to="/#contactus">
        <Button className="!py-1 lg:!py-3 hover:cursor-pointer rounded-full px-2 lg:!px-4 relative z-10 bg-white hover:border-white">
          <div className="flex items-center justify-center">
            <span className="text-lg lg:text-xl text-black ml-3 font-poppins uppercase tracking-wide">
              Get in touch
            </span>
            <img className="w-8 h-8" src={blackarrowTl} alt="Arrow" />
          </div>
        </Button>
      </HashLink>
    </div>
  );
};
