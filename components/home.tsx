"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import Image from 'next/image';
import pic from '../public/side.jpg';

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      className="mb-28 max-w-20 text-center leading-8 sm:mb-40 scroll-mt-28"
      id="Home"
    >
      <div className="w-full backdrop-blur-sm">
        <Image src={pic} alt="profile" style={{
          width: '100%',
          height: 'auto',
        }}/>

      </div>

    </section>
  );
}