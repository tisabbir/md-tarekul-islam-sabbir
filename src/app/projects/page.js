"use client";
import SectionTitle from "@/components/SectionTitle";
import React from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import GiveLife from "@/components/GiveLife";
import ImpactVolens from "@/components/ImpactVolens";
import CaravanTales from "@/components/CaravanTales";

const ProjectsPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });

    //data-aos='fade-down'
  }, []);
  return (
    <div>
      <SectionTitle
        heading={"My Projects"}
        subheading={
          "We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers."
        }
      />

      <div data-aos="fade-up"><GiveLife  /></div>
      <div data-aos="fade-up"><ImpactVolens /></div>
      <div data-aos="fade-up"><CaravanTales /></div>

      
      
      
    </div>
  );
};

export default ProjectsPage;
