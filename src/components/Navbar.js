import React, { useState } from "react";
import logo from "../assets/codingLogo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(true);

  return (
    <div className="flex justify-between items-center w-full fixed bg-[#060f1d] px-4 h-[4.5rem]">
      <div>
        <img src={logo} alt="avatar" className="h-16" />
      </div>
      <ul className=" hidden sm:flex gap-6">
        <li className="cursor-pointer capitalize text-md text-gray-200 hover:scale-125 duration-100">
          home
        </li>
        <li className="cursor-pointer capitalize text-md text-gray-200 hover:scale-125 duration-100">
          about
        </li>
        <li className="cursor-pointer capitalize text-md text-gray-200 hover:scale-125 duration-100">
          experience
        </li>
        <li className="cursor-pointer capitalize text-md text-gray-200 hover:scale-125 duration-100">
          projects
        </li>
        <li className="cursor-pointer capitalize text-md text-gray-200 hover:scale-125 duration-100">
          contact
        </li>
      </ul>
      <div
        onClick={() => setHamburger(!hamburger)}
        className="sm:hidden text-gray-200 z-10 cursor-pointer"
      >
        {hamburger ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>
      <ul
        className={
          hamburger
            ? "hidden"
            : "absolute top-0 right-0 w-3/5 h-screen bg-[#ebae13] flex flex-col justify-center items-center gap-10"
        }
      >
        <li
          className="cursor-pointer capitalize text-2xl text-white hover:scale-125 duration-100"
          onClick={() => setHamburger(!hamburger)}
        >
          home
        </li>
        <li
          className="cursor-pointer capitalize text-2xl text-white hover:scale-125 duration-100"
          onClick={() => setHamburger(!hamburger)}
        >
          about
        </li>
        <li
          className="cursor-pointer capitalize text-2xl text-white hover:scale-125 duration-100"
          onClick={() => setHamburger(!hamburger)}
        >
          experience
        </li>
        <li
          className="cursor-pointer capitalize text-2xl text-white hover:scale-125 duration-100"
          onClick={() => setHamburger(!hamburger)}
        >
          projects
        </li>
        <li
          className="cursor-pointer capitalize text-2xl text-white hover:scale-125 duration-100"
          onClick={() => setHamburger(!hamburger)}
        >
          contact
        </li>
      </ul>
      <div className="hidden text-gray-200 fixed lg:flex flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#0A66C2]">
            <a href="/" className="w-full flex justify-around items-center">
              Linkedin
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#171515]">
            <a href="/" className="w-full flex justify-around items-center">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#EA4335]">
            <a href="/" className="w-full flex justify-around items-center">
              E - mail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#5A8F7B]">
            <a href="/" className="w-full flex justify-around items-center">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
