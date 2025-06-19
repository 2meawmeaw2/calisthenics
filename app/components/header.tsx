// components/header.jsx
"use client";
import Image from "next/image";
import { motion, backOut } from "framer-motion";

export default function Header() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: 110 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: backOut, duration: 2, delay: 1 }}
      className="h-[5rem] w-full  sticky top-0 z-[100] flex justify-between items-center px-[5%] md:px-[10%] backdrop-blur-md border-b border-gray-800"
    >
      <div className="relative h-[3.5rem] w-[4rem] md:h-[4.5rem] md:w-[4.8rem]">
        <Image src="/dark-nb.svg" alt="Logo" fill className="object-contain" />
      </div>
      <div className="flex gap-4">
        <button className="px-4 py-2 rounded-lg bg-white text-black font-black hover:bg-gray-700 transition-colors">
          Home
        </button>
        <button className="px-4 py-2 rounded-lg bg-white text-black font-black hover:bg-gray-700 transition-colors">
          Workouts
        </button>
        <button className="px-4 py-2 rounded-lg bg-white text-black font-black hover:bg-gray-700 transition-colors">
          About
        </button>
      </div>
    </motion.nav>
  );
}
