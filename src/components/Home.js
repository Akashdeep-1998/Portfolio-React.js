import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#060f1d]">
      <div className="max-w-screen-lg mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#ebae13]">Hi, my name is</p>
        <h1 className="text-5xl sm:text-7xl font-bold text-gray-300">
          Akashdeep Singh
        </h1>
        <h2 className="text-5xl pt-4 sm:text-7xl font-bold text-gray-400">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-gray-400 py-4 max-w-3xl">
          I am a full stack developer who loves to build and design web
          applications using technologies like React js, Node js, Tailwind CSS &
          MongoDB.
        </p>
        <div>
          <Link to="projects" smooth>
            <button
              className="text-white group border-2 rounded-md py-3 px-5 flex items-center hover:bg-[#ebae13] duration-200
           hover:border-[#ebae13]"
            >
              <span>View Project</span>
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={20} className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
