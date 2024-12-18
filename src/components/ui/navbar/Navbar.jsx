import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BlendsIcon } from "../BlendsIcon/BlendsIcon";
import { Button } from "../Button/Button";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-sm h-[100px] flex items-center z-50 pl-[6rem]">
      <ul className="flex items-center w-full justify-center gap-[8rem]">
        <li>
          <Link className=" text-white font-akira text-lg">ABOUT US</Link>
        </li>
        <li className="">
          <NavLink to="/work" className="text-white font-akira text-lg">
            OUR WORK
          </NavLink>
        </li>
        <li className="">
          <Link to="/">
            <BlendsIcon />
          </Link>
        </li>
        <li>
          <Link className="text-white font-akira text-lg">OUR SERVICES</Link>
        </li>
        <li className="">
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
