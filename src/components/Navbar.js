import React, { useState } from "react";
import logo from "../assets/codingLogo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(true);
  return (
    <div className="flex justify-between items-center w-full fixed bg-[#060f1d] px-4 h-[4.5rem]">
      <div>
        <Link to="home" smooth>
          <img src={logo} alt="avatar" className="h-16 cursor-pointer" />
        </Link>
      </div>
      <ul className=" hidden md:flex gap-6">
        <Link
          to="home"
          activeClass="active"
          spy={true}
          smooth={true}
          className="cursor-pointer capitalize text-md text-gray-200 hover:scale-110 duration-100"
        >
          home
        </Link>
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          className="cursor-pointer capitalize text-md text-gray-200 hover:scale-110 duration-100"
        >
          about
        </Link>
        <Link
          to="experience"
          activeClass="active"
          spy={true}
          smooth={true}
          className="cursor-pointer capitalize text-md text-gray-200 hover:scale-110 duration-100"
        >
          experience
        </Link>
        <Link
          activeClass="active"
          spy={true}
          to="skills"
          smooth={true}
          className="cursor-pointer capitalize text-md text-gray-200 hover:scale-110 duration-100"
        >
          skills
        </Link>
        <Link
          to="projects"
          activeClass="active"
          spy={true}
          smooth={true}
          className="cursor-pointer capitalize text-md text-gray-200 hover:scale-110 duration-100"
        >
          projects
        </Link>
        <Link
          to="contact"
          activeClass={"active"}
          spy={true}
          smooth={true}
          className="cursor-pointer capitalize text-md text-gray-200 hover:scale-110 duration-100"
        >
          contact
        </Link>
      </ul>
      <div
        onClick={() => setHamburger(!hamburger)}
        className="md:hidden text-gray-200 z-10 cursor-pointer"
      >
        {hamburger ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      <ul
        className={
          hamburger
            ? "hidden"
            : "absolute top-0 right-0 w-3/4 h-screen bg-[#ebae13] flex flex-col justify-center items-center gap-10"
        }
      >
        <Link
          to="home"
          smooth={true}
          className="cursor-pointer capitalize text-2xl text-white hover:scale-125 duration-100"
          onClick={() => setHamburger(!hamburger)}
        >
          home
        </Link>
        <Link
          to="about"
          smooth={true}
          className="cursor-pointer capitalize text-2xl text-white hover:scale-125 duration-100"
          onClick={() => setHamburger(!hamburger)}
        >
          about
        </Link>
        <Link
          to="experience"
          smooth={true}
          offset={-20}
          className="cursor-pointer capitalize text-2xl text-white hover:scale-125 duration-100"
          onClick={() => setHamburger(!hamburger)}
        >
          experience
        </Link>
        <Link
          to="skills"
          smooth={true}
          offset={-80}
          className="cursor-pointer capitalize text-2xl text-white hover:scale-125 duration-100"
          onClick={() => setHamburger(!hamburger)}
        >
          skills
        </Link>
        <Link
          to="projects"
          smooth={true}
          offset={-80}
          className="cursor-pointer capitalize text-2xl text-white hover:scale-125 duration-100"
          onClick={() => setHamburger(!hamburger)}
        >
          projects
        </Link>
        <Link
          to="contact"
          offset={200}
          smooth={true}
          className="cursor-pointer capitalize text-2xl text-white hover:scale-125 duration-100"
          onClick={() => setHamburger(!hamburger)}
        >
          contact
        </Link>
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
