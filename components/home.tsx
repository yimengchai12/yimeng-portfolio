"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import Image from 'next/image';
import me from '../public/me.jpg';

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <motion.section
      ref={ref}
      className="mb-4 flex flex-col items-center w-full md:w-9/12 sm:mb-20 scroll-mt-28"
      initial={{ opacity: 0, x:-100}}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.175 }}
      id="home"
    >
      <div className="flex w-full items-center justify-center flex-wrap mt-7">
        <div className="md:h-[30rem] md:w-[30rem] h-[15rem] w-[15rem]">
          <Image src={me} alt="pic" className="rounded-full object-cover h-full w-full shadow-md border-4 border-solid dark:border-white" width={400} />
        </div>
        <div className="inline-block capitalize sm:text-6xl lg:leading-[4rem] font-bold text-center text-3xl my-10 xl:text-start xl:ml-10">
          <p>HELLO!!</p>
          <p>
          MY NAME IS YI MENG.
          </p>
          <p className="lg:text-2xl text-lg mt-2">I am an Aspiring Software Engineer</p>
        </div>
      </div>
    </motion.section>
  );
}