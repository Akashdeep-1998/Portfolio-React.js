import React from "react";
import { FiCornerRightDown } from "react-icons/fi";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import java from "../assets/java.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import mongodb from "../assets/mongodb.png";
import mysql from "../assets/mysql.png";
import github from "../assets/github.png";

const skills = [
  {
    id: 1,
    technology: html,
    shadow: "shadow-[#e9461f]",
    skill: "HTML 5",
  },
  {
    id: 2,
    technology: css,
    shadow: "shadow-[#0086fd]",
    skill: "CSS 3",
  },
  {
    id: 3,
    technology: javascript,
    shadow: "shadow-[#fdec00]",
    skill: "Javascript",
  },
  {
    id: 4,
    technology: java,
    shadow: "shadow-[#174cc9]",
    skill: "Java",
  },
  {
    id: 5,
    technology: react,
    shadow: "shadow-[#24a3c1]",
    skill: "React JS",
  },
  {
    id: 6,
    technology: tailwind,
    shadow: "shadow-[#3e8895]",
    skill: "Tailwind CSS",
  },
  {
    id: 7,
    technology: node,
    shadow: "shadow-[#409d35]",
    skill: "Node JS",
  },
  {
    id: 8,
    technology: mongodb,
    shadow: "shadow-[#66ad43]",
    skill: "Mongo DB",
  },
  {
    id: 9,
    technology: mysql,
    shadow: "shadow-[#d3840a]",
    skill: "MySQL",
  },
  {
    id: 10,
    technology: github,
    shadow: "shadow-[#e1dfdf]",
    skill: "Github",
  },
];

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full sm:h-screen bg-[#060f1d] text-gray-300"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl md:text-5xl font-bold inline border-b-4 border-[#ebae13]">
            Skills
          </p>
          <p className="text-gray-400 py-4 flex gap-2 items-center">
            These are the technologies I've worked with
            <FiCornerRightDown
              className="animate-bounce text-[#ebae13]"
              size={20}
            />
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-6">
          {skills.map(({ id, technology, shadow, skill }) => (
            <div
              key={id}
              className={`shadow-md ${shadow} hover:scale-110 duration-500 rounded-md`}
            >
              <img className="w-16 mx-auto" src={technology} alt={skill} />
              <p className="my-4">{skill.toUpperCase()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
