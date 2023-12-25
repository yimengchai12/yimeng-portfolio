"use client";

import React from 'react'
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { Badge } from "@/components/ui/skillBadge";
import { experiencesData } from "@/lib/data";
import { skillsData } from "@/lib/data";
import Timeline from './timeline';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.75);

  return (
    <section
      ref={ref}
      className="mb-4 w-full text-center leading-8 sm:mb-32 scroll-mt-28"
      id="experience"
    >
      <h1 className="md:text-6xl text-4xl font-bold mb-10 mt-10">Experience</h1>
      {/* <div className="max-w-[70rem] w-full flex gap-3 mx-auto"> */}
      <VerticalTimeline>
        {experiencesData.map((experience) => (
          <React.Fragment key={experience.title}>
            <VerticalTimelineElement
              visible={true}>
              <h3>{experience.title}</h3>
              <p>{experience.location}</p>
              <p>{experience.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
          ))}
      </VerticalTimeline>
      {/* </div> */}
    </section>
  )
}

export default Experience