"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section
      ref={ref}
      className="mb-4 max-w-[60rem] text-center leading-8 sm:mb-20  scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <h1 className="md:text-6xl text-4xl font-bold">About me</h1>
      <p className="mt-8 text-xl leading-[2.5rem] text-center">
        I am a year 3 student studying <span className="font-bold">Information Systems</span> at <span className="font-bold">Singapore Management University</span>, taking a dual track in <span className="font-bold">Digital & Cloud Solutions </span> and <span className="font-bold">Business Analytics</span>.
        I have a strong interest in <span className="font-bold">software engineering</span> and I am also exploring <span className="font-bold">artificial intelligence</span>.
        As someone who has always been deeply fascinated by the ever-evolving world of technology, I am always looking for opportunities to learn and grow as a developer. The excitement of facing new challenges and overcoming them is what keeps me motivated and engaged. I am greatly captivated by the dynamic nature of this field. The constant evolution ensures there is always a new language to learn, a novel framework to master, or a fresh approach to adopt. It is this ever-evolving journey that keeps my curiosity alive and fuels my quest for knowledge.
      </p>

    </motion.section>
  );
}