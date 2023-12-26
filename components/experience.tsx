"use client";

import React from 'react'
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { Badge } from "@/components/ui/skillBadge";
import { experiencesData } from "@/lib/data";
import { skillsData } from "@/lib/data";
import { useTheme } from "next-themes";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  var threshold = 0.05;
  if (typeof window !== "undefined"){
    threshold = window.innerWidth >= 1280 ? 0.5 : 0.1;
  }
  const { ref } = useSectionInView("Experience", threshold);
  const { theme, setTheme } = useTheme();

  return (
    <section
      ref={ref}
      className="mb-4 w-full leading-8 sm:mb-32 scroll-mt-28"
      id="experience"
    >
      <h1 className="md:text-6xl text-4xl font-bold mb-10 mt-10 text-center">Experience</h1>
      {/* <div className="max-w-[70rem] w-full flex gap-3 mx-auto"> */}
      <VerticalTimeline lineColor="">
        {experiencesData.map((experience) => (
          <React.Fragment key={experience.title}>
            <VerticalTimelineElement
              visible={true}
              icon={experience.icon}
              date={experience.date}
              contentStyle={{
                background:
                  theme === "light" ? "white" : "white",
                boxShadow: "none",
                border: theme === "light" ? "2px solid black" : "2px solid white",
                textAlign: "left",
                padding: "1.5rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "7px solid black"
                    : "7px solid white",
              }}
              dateClassName="exp:dark:text-white text-gray-950"
              iconStyle={{
                background: theme === "light" ? "white" : "black",
                fontSize: "1.5rem",
                border: "4px solid black",
              }}>
              <h3 className="dark:text-gray-950 leading-[1.45rem] text-lg font-bold">{experience.title}</h3>
              <h3 className="dark:text-gray-950 text-lg mt-2 font-semibold">{experience.company}</h3>
              <h3 className="dark:text-gray-950 text-md leading-6 mt-3">{experience.description}</h3>
            </VerticalTimelineElement>
          </React.Fragment>
          ))}
      </VerticalTimeline>
      {/* </div> */}
    </section>
  )
}

export default Experience