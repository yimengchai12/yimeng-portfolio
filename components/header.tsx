"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import { useActiveSectionContext } from "@/context/active-section-context";


const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <header className="z-[999] relative flex justify-center">
        <motion.div className="fixed top-0 h-[4.5rem] w-full rounded-none dark:bg-yellow-300 border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black[0.03] backdrop-blur-0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
          initial={{ y:-100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <nav className="flex justify-center h-full">
            <ul className="flex flex-wrap justify-around items-center gap-3 text-[0.9rem] font-medium text-gray-600 dark:text-gray-800 sm:flex-nowrap sm:w-11/12 ">
              {links.map((link, index) => (
                <li key={link.hash}>
                  <Link href={link.hash} onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }} className={`hover:text-gray-950 transition relative py-2 px-3 ${activeSection === link.name ? 'text-gray-950 dark:text-gray-200' : ''}`}>
                    {link.name}

                    {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-900"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>

    </header>
  )
}

export default Header