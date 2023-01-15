import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="text-gray-300 w-full h-screen bg-[#060f1d] m-auto"
    >
      <div className="max-w-[1000px] w-full h-full flex flex-col items-center justify-center mx-auto">
        <div className="mb-10">
          <p className="inline border-b-4 border-[#ebae13] text-4xl font-bold">
            About
          </p>
        </div>
        <div className="flex flex-col px-6 gap-5 sm:flex-row">
          <p className="text-4xl font-bold ">
            Hi. I'm Akash, nice to meet you. Please take a look around!
          </p>
          <p className="text-lg">
            I am passionate about building & designing web applications to solve
            the real world problems. These things always motivate me to work and
            enhance my skills. I also keen to learn and update myself with new
            web technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
