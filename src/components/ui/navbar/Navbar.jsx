import React from "react";
import { Link } from "react-router-dom";
import { BlendsIcon } from "../blendsIcon/blendsIcon";
import { Button } from "../Button/Button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-sm h-[100px] flex items-center px-24 z-50">
      <ul className="flex justify-between items-center flex-grow">
        <li>
          <Link className="text-white font-akira text-lg">ABOUT US</Link>
        </li>
        <li>
          <Link to="/work" className="text-white font-akira text-lg">
            OUR WORK
          </Link>
        </li>
        <li>
          <Link to="/">
            <BlendsIcon />
          </Link>
        </li>
        <li>
          <Link className="text-white font-akira text-lg">OUR SERVICES</Link>
        </li>
        <li>
          <Link>
            <Button>
              <span className="text-white font-akira text-lg">CONTACT US</span>
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
