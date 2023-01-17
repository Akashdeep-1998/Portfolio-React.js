import React from "react";
import { FiCornerRightDown } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";

import chatApp from "../assets/projects/chatApp.png";
import ticTacToe from "../assets/projects/tictactoe.png";
import newsApp from "../assets/projects/newsApp.png";
import textUtils from "../assets/projects/textUtils.png";
import foodApp from "../assets/projects/foodApp.png";
import pigGame from "../assets/projects/pigGame.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      img: chatApp,
      demo: "https://talkr-chat.netlify.app",
      github: "https://github.com/Akashdeep-1998/Talkr-chat-app-Frontend",
    },
    {
      id: 2,
      img: ticTacToe,
      demo: "https://nought-and-cross.netlify.app/",
      github: "https://github.com/Akashdeep-1998/tic-tac-toe",
    },
    {
      id: 3,
      img: newsApp,
      demo: "https://news25.netlify.app/",
      github: "https://github.com/Akashdeep-1998/React-News25",
    },
    {
      id: 4,
      img: textUtils,
      demo: "https://mytextutilityapp.netlify.app/",
      github: "https://github.com/Akashdeep-1998/My-TextUtils-App",
    },
    {
      id: 5,
      img: foodApp,
      demo: "https://akashdeep-1998.github.io/BreadAndButter/",
      github: "https://github.com/Akashdeep-1998/BreadAndButter",
    },
    {
      id: 6,
      img: pigGame,
      demo: "https://akashdeep-1998.github.io/dicegame/",
      github: "https://github.com/Akashdeep-1998/dicegame",
    },
  ];

  return (
    <div name="project" className="w-full  md:h-screen bg-[#060f1d]">
      <div className="max-w-screen-lg w-full h-full flex flex-col justify-center mx-auto">
        <div className="mb-10 px-6">
          <p className="text-gray-300 text-4xl sm:text-6xl font-bold border-b-4 border-[#ebae13] inline">
            Projects
          </p>
        </div>
        <div className="flex gap-4 items-center mb-4 px-6">
          <p className="text-gray-400">Check out some of my work right here</p>
          <p className="text-[#ebae13] animate-bounce mt-4">
            <FiCornerRightDown size={20} />
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-6">
          {projects.map(({ id, img, demo, github }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
            >
              <img
                src={img}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-around text-gray-300">
                <button className="py-6 duration-200 hover:scale-125">
                  <a href={demo} target="_blank" rel="noopener noreferrer">
                    <BsBoxArrowUpRight size={20} />
                  </a>
                </button>
                <button className="py-6 duration-200 hover:scale-125">
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={22} />
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
