"use client";

import React from 'react'
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import Link from 'next/link'

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.9);

  return (
    <motion.section
      ref={ref}
      className="mb-8 mt-12 sm:mt-0 w-full text-center leading-8 sm:mb-32 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="contact"
    >
      <h1 className="md:text-6xl text-4xl font-bold mb-10 sm:mt-10 mt-0">Contact</h1>
      <div className="flex justify-center gap-6">
        <a href="https://github.com/yimengchai12">
          <FaSquareGithub size="4em" />
        </a>
        <a href="mailto:yimeng.chai.2021@scis.smu.edu.sg">
          <MdOutlineEmail size="4em" />
        </a>
        <a href="https://www.linkedin.com/in/chai-yi-meng/">
          <IoLogoLinkedin size="4em" />
        </a>
      </div>
    </motion.section>
  )
}

export default Contact