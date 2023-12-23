"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import Image from 'next/image';
import pic from '../public/paint_me.png';

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
      <div className="flex w-full items-center justify-center">
        <div>
          <Image src={pic} alt="pic" className="h-auto" width={800} />
        </div>
        <div className="inline-block capitalize lg:text-6xl lg:leading-[4rem] font-bold ml-3 pr-6 text-xl">
          <p>HELLO!!</p>
          <p>
          MY NAME IS YI MENG.
          </p>
          <p className="lg:text-2xl text-md mt-2">I am an Aspiring Software Engineer</p>
        </div>
      </div>
    </motion.section>
  );
}