"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';


const Header = () => {
  return (
    <header className="z-[999] relative flex justify-center">
        <motion.div className="fixed top-0 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black[0.03] backdrop-blur-0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
          initial={{ y:-100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <nav className="flex justify-center h-full">
            <ul className="flex flex-wrap justify-around items-center gap-3 text-[0.9rem] font-medium text-gray-500 sm:flex-nowrap sm:w-11/12 ">
              {links.map((link, index) => (
                <li key={link.hash}>
                  <Link href={link.hash} className="hover:text-gray-950 transition">
                    {link.name}
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