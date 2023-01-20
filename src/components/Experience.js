import React from "react";
import { MdOutlineWork } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    role: "Data Analyst",
    company: "eClerx",
    duration: "Aug'21 - Current",
    work: "Ensuring user satisfaction and retention by providing responsive tech support, working on the database stuff like writing queries, writing and managing stored procedures.",
  },
  {
    id: 2,
    role: "Software Services Intern",
    company: "eClerx",
    duration: "Apr'21 - Aug'21",
    work: "Getting training from seniors and learning tech stacks like MS-SQL, tableau & Ms-excel and for performing various tasks, completing and making progress report and deliver to manager.",
  },
  {
    id: 3,
    role: "Bachelor of Technology - CSE",
    company: "Lovely Professional University",
    duration: "Aug'17 - Aug'21",
    work: "Completed graduation in Computer Science and learnt tech stacks like Programming languages, Data Structures & Algorithms, DBMS, Operating System, Computer Networks, Web Development etc.",
  },
];

const Experience = () => {
  return (
    <div name="experience" className="w-full h-screen bg-[#060f1d]">
      <div className="max-w-[1000px] flex flex-col h-full w-full justify-center mx-auto p-4">
        <div className="mb-10">
          <p className="inline text-4xl md:text-5xl font-bold text-gray-300 border-b-4 border-[#ebae13]">
            Experience
          </p>
        </div>
        <div className="flex flex-col gap-8">
          {experiences.map(({ id, role, company, duration, work }) => (
            <div
              key={id}
              className="flex flex-col sm:flex-row sm:justify-between"
            >
              <div className="flex gap-4">
                <p className="text-[#ebae13]">
                  {id === 3 ? (
                    <FaUserGraduate size={23} />
                  ) : (
                    <MdOutlineWork size={25} />
                  )}
                </p>
                <div>
                  <p className="text-2xl font-bold text-gray-300">{role}</p>
                  <p className="text-gray-400 text-sm mb-3 sm:pl-0">
                    <b>{company}&nbsp;&mdash;&nbsp;</b>
                    {duration}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-400 pl-10 max-w-sm sm:pl-0">
                {work}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
