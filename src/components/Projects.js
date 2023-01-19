import React from "react";
import { FiCornerRightDown } from "react-icons/fi";
import chatApp from "../assets/projects/chatApp.png";
import ticTacToe from "../assets/projects/tictactoe.png";
import newsApp from "../assets/projects/newsApp.png";
import textUtils from "../assets/projects/textUtils.png";
import foodApp from "../assets/projects/foodApp.png";
import pigGame from "../assets/projects/pigGame.png";

const projects = [
  {
    id: 1,
    img: chatApp,
    demo: "https://talkr-chat.netlify.app",
    app: "Chat Application",
    techUsed: "React, Node.js, Socket.io, CSS",
    github: "https://github.com/Akashdeep-1998/Talkr-chat-app-Frontend",
  },
  {
    id: 2,
    img: ticTacToe,
    demo: "https://nought-and-cross.netlify.app/",
    app: "Tic Tac Toe Game",
    techUsed: "React, CSS",
    github: "https://github.com/Akashdeep-1998/tic-tac-toe",
  },
  {
    id: 3,
    img: newsApp,
    demo: "https://news25.netlify.app/",
    app: "News Application",
    techUsed: "React, News API, CSS",
    github: "https://github.com/Akashdeep-1998/React-News25",
  },
  {
    id: 4,
    img: textUtils,
    demo: "https://mytextutilityapp.netlify.app/",
    app: "Text Utility Application",
    techUsed: "React, CSS",
    github: "https://github.com/Akashdeep-1998/My-TextUtils-App",
  },
  {
    id: 5,
    img: foodApp,
    demo: "https://akashdeep-1998.github.io/BreadAndButter/",
    app: "Food Ordering Website",
    techUsed: "HTML, CSS, Javascript",
    github: "https://github.com/Akashdeep-1998/BreadAndButter",
  },
  {
    id: 6,
    img: pigGame,
    demo: "https://akashdeep-1998.github.io/dicegame/",
    app: "Pig Game",
    techUsed: "HTML, CSS, Javascript",
    github: "https://github.com/Akashdeep-1998/dicegame",
  },
];

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen bg-[#060f1d] text-gray-300"
    >
      <div className="max-w-screen-lg h-full mx-auto flex flex-col justify-center p-4">
        <div>
          <p className="inline text-4xl sm:text-6xl font-bold border-b-4 border-[#ebae13]">
            Projects
          </p>
          <p className="py-6 flex gap-2 items-center text-gray-400">
            Check out some of my work right here
            <FiCornerRightDown
              className="text-[#ebae13] mt-2 animate-bounce"
              size={20}
            />
          </p>
        </div>
        <div className=" text-white w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
          {projects.map(({ id, img, demo, app, techUsed, github }) => (
            <div
              key={id}
              style={{ backgroundImage: `url(${img})` }}
              className="h-[240px] rounded-md overflow-hidden content-div group shadow-md shadow-[#020202]"
            >
              <div className="h-full flex flex-col items-center justify-evenly opacity-0 group-hover:opacity-100 bg-[#ebae13] md:duration-200">
                <span className="flex flex-col items-center">
                  <p className="text-xl font-bold">{app}</p>
                  <small className="text-xs">
                    <b>Tech&nbsp;&mdash;&nbsp;</b>({techUsed})
                  </small>
                </span>
                <span className="text-sm sm:text-base flex flex-row justify-evenly gap-10 text-[#ebae13] font-bold">
                  <a href={demo} target="_blank" rel="noopener noreferrer">
                    <button className="text-xl py-1 px-2 md:py-2 md:px-4 bg-white rounded-md">
                      Demo
                    </button>
                  </a>
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    <button className="text-xl py-1 px-2 md:py-2 md:px-4 bg-white rounded-md">
                      Code
                    </button>
                  </a>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
