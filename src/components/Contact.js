import React from "react";
import { FiCornerRightDown } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-[#060f1d] text-gray-300">
      <div className="max-w-screen-lg h-full flex flex-col justify-center mx-auto p-4">
        <div className="py-4">
          <p className="inline font-bold text-4xl md:text-5xl border-b-4 border-[#ebae13]">
            Contact
          </p>
          <p className="pt-6 pb-4 flex gap-2 items-center text-gray-400">
            You can reach out to me via
            <FiCornerRightDown
              className="text-[#ebae13] mt-2 animate-bounce"
              size={20}
            />
          </p>
        </div>
        <form
          action="https://getform.io/f/366a3ce8-29c3-4b14-aa96-75ab6a540ab8"
          method="post"
          className="flex flex-col gap-4 max-w-xl"
        >
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="pl-3 py-[6px] rounded-sm bg-[#0e1e36]"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="pl-3 py-[6px] rounded-sm bg-[#0e1e36]"
          />
          <textarea
            name="message"
            rows="9"
            placeholder="Message..."
            className="pl-3 py-[6px] rounded-sm bg-[#0e1e36]"
          ></textarea>
          <button className="border-2 py-[10px] font-bold border-gray-300 w-1/2 md:w-2/5 self-center rounded-md hover:bg-gray-300 duration-150 hover:text-[#060f1d]">
            Let's Collaborate
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
