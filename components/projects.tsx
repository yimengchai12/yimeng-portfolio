"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import ProjectCard from "./projectCard";

const Projects = () => {

  const threshold = window.innerWidth >= 1280 ? 0.2 : 0.05;
  const { ref } = useSectionInView("Projects", threshold);
  
  return (
    <motion.section
    ref={ref}
    className="mb-4 w-full text-center leading-8 sm:mb-10 scroll-mt-28"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id="projects"
  >
    <h1 className="md:text-6xl text-4xl font-bold mb-10 mt-10">Projects</h1>
    <div className="container mx-auto mt-28 sm:mt-12">
      <div className="lg:flex md:flex sm:flex xl:justify-around flex-wrap items-center md:justify-around sm:justify-around lg:justify-around">
          {projectsData.map((project)=>(
            <React.Fragment key={project.title}>
              <ProjectCard {...project} />
            </React.Fragment>
          ))}
      </div>
    </div>
  </motion.section>
  );
} 

export default Projects;