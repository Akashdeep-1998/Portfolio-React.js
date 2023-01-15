import React from "react";
import { FiCornerRightDown } from "react-icons/fi";

import chatApp from "../assets/projects/chat-app.png";
import ticTacToe from "../assets/projects/tic-tac-toe.png";
import newsApp from "../assets/projects/news-app.png";
import textUtils from "../assets/projects/text-utility-app.png";
import foodApp from "../assets/projects/food-app.png";
import pigGame from "../assets/projects/pig-game.png";

const Projects = () => {
  return (
    <div name="project" className="w-full h-screen text-gray-300 bg-[#060f1d]">
      <div className="w-full h-full flex flex-col items-center justify-center mx-auto">
        <div className="mb-6">
          <p className="inline border-b-4 border-[#ebae13] text-4xl font-bold">
            Projects
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span>Check out some of my good work right here</span>
          <span className="text-[#ebae13]">
            <FiCornerRightDown className="mt-2" />
          </span>
        </div>
        <div>
            <div></div>  
        </div>
      </div>
    </div>
  );
};

export default Projects;
