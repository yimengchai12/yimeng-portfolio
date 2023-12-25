"use client";

import React from 'react'
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { Badge } from "@/components/ui/skillBadge";
import { skillsData } from "@/lib/data";

const Skills = () => {
  const { ref } = useSectionInView("Skills", 0.75);

  return (
    <motion.section
      ref={ref}
      className="mb-8 w-full text-center leading-8 sm:mb-32 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="skills"
    >
      <h1 className="md:text-6xl text-4xl font-bold mb-10 sm:mt-10 mt-0">Skills</h1>
      <div className="max-w-[70rem] w-full flex gap-3 mx-auto">
        <div className="flex justify-center flex-wrap gap-3">
          {
            skillsData.map((skill) => (
              <div key={skill}>
                <Badge variant="default">{skill}</Badge>
              </div>
            ))
          }
        </div>
      </div>
    </motion.section>
  )
}

export default Skills