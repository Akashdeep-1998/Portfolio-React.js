import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen  bg-[#060f1d]">
      <div className="max-w-screen-lg h-full w-full flex flex-col justify-center mx-auto">
        <div className="px-6">
          <div className="mb-10">
            <p className="inline border-b-4 border-[#ebae13] text-gray-300 text-4xl sm:text-6xl font-bold">
              About
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <p className="text-4xl font-bold text-gray-300 ">
              Hi. I'm Akash, nice to meet you. Please take a look around!
            </p>
            <p className="text-gray-400">
              I am passionate about building & designing web applications to
              solve the real world problems. These things always motivate me to
              work and enhance my skills. I also keen to learn and update myself
              with new web technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
