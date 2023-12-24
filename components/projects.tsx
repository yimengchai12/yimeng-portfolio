"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
// import { projectsData } from "@/lib/data";
// import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import ProjectCard from "./projectCard";

type Theme = "dark" | "light"

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <motion.section
    ref={ref}
    className="mb-4 w-full text-center leading-8 sm:mb-20  scroll-mt-28"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id="projects"
  >
    <h1 className="md:text-6xl text-4xl font-bold mb-10 mt-10">Projects</h1>
    <div className="container mx-auto">
      <div className="lg:flex md:flex sm:flex items-center xl:justify-around flex-wrap md:justify-around sm:justify-around lg:justify-around">
          <ProjectCard/>
          <ProjectCard/>
          {/* <ProjectCard/> */}
          {/* <ProjectCard/> */}
      </div>

    </div>
  </motion.section>
  );
} 