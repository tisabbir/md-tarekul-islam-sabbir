'use client'
import SectionTitle from "@/components/SectionTitle";
import React from "react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiFirebase, SiMongodb, SiTailwindcss } from "react-icons/si";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const SkillsPage = () => {

  useEffect(()=> {
    Aos.init(    { duration: 1000,} )
  },[])
  return (
    <div className="mb-4">
      <SectionTitle
        heading={"My SKills"}
        subheading={
          "We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers."
        }
      />

      <div data-aos='fade-down' className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mt-12 justify-between text-[#8750F5]">

        <div className="bg-base-200 p-6 rounded-lg max-w-fit space-y-6 text-center mx-auto">
          <FaReact className="text-8xl mx-auto" />
          <p className="text-2xl font-bold ">React</p>
        </div>

        <div className="bg-base-200 py-6 px-3 rounded-lg max-w-fit space-y-6 text-center mx-auto">
          <IoLogoJavascript className="text-8xl mx-auto" />
          <p className="text-2xl font-bold">JavaScript</p>
        </div>

        <div className="bg-base-200 p-6 rounded-lg max-w-fit space-y-6 text-center mx-auto">
          <SiMongodb className="text-8xl mx-auto" />
          <p className="text-2xl font-bold">MongoDB</p>
        </div>

        <div className="bg-base-200 p-6 rounded-lg max-w-fit space-y-6 text-center mx-auto">
          <FaNodeJs className="text-8xl mx-auto" />
          <p className="text-2xl font-bold">Node JS</p>
        </div>
        <div className="bg-base-200 p-6 rounded-lg max-w-fit space-y-6 text-center mx-auto">
          <SiExpress className="text-8xl mx-auto" />
          <p className="text-2xl font-bold">Express</p>
        </div>
        <div className="bg-base-200 p-6 rounded-lg max-w-fit space-y-6 text-center mx-auto">
          <SiFirebase className="text-8xl mx-auto" />
          <p className="text-2xl font-bold">Firebase</p>
        </div>
        <div className="bg-base-200 p-6 rounded-lg max-w-fit space-y-6 text-center mx-auto">
          <SiTailwindcss className="text-8xl mx-auto" />
          <p className="text-2xl font-bold">Tailwind</p>
        </div>




      </div>
    </div>
  );
};

export default SkillsPage;
