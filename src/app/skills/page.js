import SectionTitle from "@/components/SectionTitle";
import React from "react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiFirebase, SiMongodb, SiTailwindcss } from "react-icons/si";

const SkillsPage = () => {
  return (
    <div>
      <SectionTitle
        heading={"My SKills"}
        subheading={
          "We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers."
        }
      />

      <div className="flex gap-4 mt-12 justify-between text-[#8750F5]">

        <div className="bg-base-200 p-6 rounded-lg max-w-fit space-y-6 text-center">
          <FaReact className="text-8xl mx-auto" />
          <p className="text-2xl font-bold ">React</p>
        </div>

        <div className="bg-base-200 p-6 rounded-lg max-w-fit space-y-6 text-center">
          <IoLogoJavascript className="text-8xl mx-auto" />
          <p className="text-2xl font-bold">JavaScript</p>
        </div>

        <div className="bg-base-200 p-6 rounded-lg max-w-fit space-y-6 text-center">
          <SiMongodb className="text-8xl mx-auto" />
          <p className="text-2xl font-bold">MongoDB</p>
        </div>

        <div className="bg-base-200 p-6 rounded-lg max-w-fit space-y-6 text-center">
          <FaNodeJs className="text-8xl mx-auto" />
          <p className="text-2xl font-bold">Node JS</p>
        </div>
        <div className="bg-base-200 p-6 rounded-lg max-w-fit space-y-6 text-center">
          <SiExpress className="text-8xl mx-auto" />
          <p className="text-2xl font-bold">Express</p>
        </div>
        <div className="bg-base-200 p-6 rounded-lg max-w-fit space-y-6 text-center">
          <SiFirebase className="text-8xl mx-auto" />
          <p className="text-2xl font-bold">Firebase</p>
        </div>
        <div className="bg-base-200 p-6 rounded-lg max-w-fit space-y-6 text-center">
          <SiTailwindcss className="text-8xl mx-auto" />
          <p className="text-2xl font-bold">Tailwind</p>
        </div>




      </div>
    </div>
  );
};

export default SkillsPage;
