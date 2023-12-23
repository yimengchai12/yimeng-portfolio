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
    className="mb-4 max-w-[80rem] w-full text-center leading-8 sm:mb-20  scroll-mt-28"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id="projects"
  >
    <h1 className="md:text-6xl text-4xl font-bold mb-10 mt-10">Projects</h1>
    <div className="grid grid-cols-12 gap-4 w-full">
      <div className="col-span-12 sm:col-span-6">
        <ProjectCard/>
      </div>
      <div className="col-span-12 sm:col-span-6">
        <ProjectCard />
      </div>

    </div>
    
  </motion.section>
  );
} 