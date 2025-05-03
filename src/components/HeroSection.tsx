"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-8 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12"
      >
        {/* Left: Profile Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ring-4 ring-[oklch(0.25_0.14_310)] shadow-xl"
          >
            <Image
              src="/images/profile.png"
              alt="Fardin Ahmed Alif"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>

        {/* Right: Name, Description, and Resume CTA */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <motion.h1
            className="text-4xl sm:text-5xl font-semibold leading-tight bg-gradient-to-r from-[#b3e9fa] via-[#f472b6] to-[#b7ffff] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi I’m Fardin Ahmed Alif
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-[oklch(0.75_0.06_330)] mt-4 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Full-Stack Web Developer | MERN Stack Expert | Passionate About
            Clean Code
          </motion.p>

          <motion.p
            className="text-base sm:text-lg text-[oklch(0.68_0.05_20)] mt-4 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            I specialize in building sleek, full-stack web applications with
            modern technologies like React, Node.js, and MongoDB. Let’s create
            something impactful!
          </motion.p>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <a
              href="https://drive.google.com/file/d/1LhVn3L6df1Ikau6eYYdaF7G8nmVn0g3-/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-full bg-[oklch(0.85_0.18_50)] text-black font-semibold text-lg shadow-md hover:scale-105 transition-all duration-300"
            >
              View Resume
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
