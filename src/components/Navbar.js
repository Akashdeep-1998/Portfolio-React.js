import React, { useState } from "react";
import logo from "../assets/codingLogo.png";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(true);
  return (
    <div className="shadow-md shadow-[#000000d3] md:shadow-[#080d16d3] flex justify-between items-center w-full fixed bg-[#06101f] md:bg-[#091426] px-4 h-[4.5rem]">
      <div>
        <Link to="home" smooth>
          <img src={logo} alt="avatar" className="h-14 cursor-pointer" />
        </Link>
      </div>
      <ul className=" hidden md:flex gap-6">
        <Link
          to="home"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={2000}
          className="cursor-pointer capitalize text-lg text-gray-200 hover:scale-110 duration-100"
        >
          home
        </Link>
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={2000}
          className="cursor-pointer capitalize text-lg text-gray-200 hover:scale-110 duration-100"
        >
          about
        </Link>
        <Link
          to="experience"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={2000}
          className="cursor-pointer capitalize text-lg text-gray-200 hover:scale-110 duration-100"
        >
          experience
        </Link>
        <Link
          activeClass="active"
          spy={true}
          to="skills"
          smooth={true}
          duration={2000}
          className="cursor-pointer capitalize text-lg text-gray-200 hover:scale-110 duration-100"
        >
          skills
        </Link>
        <Link
          to="projects"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={2000}
          className="cursor-pointer capitalize text-lg text-gray-200 hover:scale-110 duration-100"
        >
          projects
        </Link>
        <Link
          to="contact"
          activeClass={"active"}
          spy={true}
          smooth={true}
          duration={2000}
          className="cursor-pointer capitalize text-lg text-gray-200 hover:scale-110 duration-100"
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
            : "absolute top-0 right-0 w-3/4 h-screen text-xl bg-[#0c1a30] flex flex-col justify-center items-center gap-6"
        }
      >
        <Link
          to="home"
          smooth={true}
          duration={2000}
          className="cursor-pointer capitalize text-white hover:scale-125 duration-100"
          onClick={() => setHamburger(!hamburger)}
        >
          home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={2000}
          className="cursor-pointer capitalize text-white hover:scale-125 duration-100"
          onClick={() => setHamburger(!hamburger)}
        >
          about
        </Link>
        <Link
          to="experience"
          smooth={true}
          offset={-20}
          duration={2000}
          className="cursor-pointer capitalize text-white hover:scale-125 duration-100"
          onClick={() => setHamburger(!hamburger)}
        >
          experience
        </Link>
        <Link
          to="skills"
          smooth={true}
          offset={-80}
          duration={2000}
          className="cursor-pointer capitalize text-white hover:scale-125 duration-100"
          onClick={() => setHamburger(!hamburger)}
        >
          skills
        </Link>
        <Link
          to="projects"
          smooth={true}
          offset={-80}
          duration={2000}
          className="cursor-pointer capitalize text-white hover:scale-125 duration-100"
          onClick={() => setHamburger(!hamburger)}
        >
          projects
        </Link>
        <Link
          to="contact"
          offset={200}
          smooth={true}
          duration={2000}
          className="abcd cursor-pointer capitalize text-white hover:scale-125 duration-100"
          onClick={() => setHamburger(!hamburger)}
        >
          contact
        </Link>
        <a
          href="https://www.linkedin.com/in/akashdeep-1998/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer capitalize text-white hover:scale-125 duration-100"
          onClick={() => setHamburger(!hamburger)}
        >
          <span className="flex gap-2 justify-center items-center">
            Linkedin <FaLinkedin size={22} />
          </span>
        </a>

        <a
          href="https://github.com/Akashdeep-1998"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer capitalize text-white hover:scale-125 duration-100"
          onClick={() => setHamburger(!hamburger)}
        >
          <span className="flex gap-4 justify-center items-center">
            Github <FaGithub size={22} />
          </span>
        </a>

        <a
          href="https://drive.google.com/file/d/1KvcZe13UXLR48FAduu5wshIJfrkLSqob/view?usp=share_link"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer capitalize text-white hover:scale-125 duration-100"
          onClick={() => setHamburger(!hamburger)}
        >
          <span className="flex gap-2 font-bold justify-center items-center">
            Resume <FaDownload size={20} className="animate-bounce" />
          </span>
        </a>
      </ul>
      <div className="hidden text-gray-200 fixed lg:flex flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#0A66C2]">
            <a
              href="https://www.linkedin.com/in/akashdeep-1998/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex justify-around items-center"
            >
              Linkedin
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#171515]">
            <a
              href="https://github.com/Akashdeep-1998"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex justify-around items-center"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#EA4335] cursor-pointer">
            <Link
              to="contact"
              smooth={true}
              className="w-full flex justify-around items-center"
            >
              E - mail <HiOutlineMail size={30} />
            </Link>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#5A8F7B]">
            <a
              href="https://drive.google.com/file/d/1KvcZe13UXLR48FAduu5wshIJfrkLSqob/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex justify-around items-center"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
