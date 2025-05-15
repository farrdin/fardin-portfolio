"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const typewriterVariants = {
  hidden: { opacity: 0, width: 0 },
  visible: {
    opacity: 1,
    width: "100%",
    transition: {
      duration: 3,
      ease: "easeInOut",
      delay: 0.5,
    },
  },
};

// Smooth, subtle bounce for the full image container
const bounceVariants = {
  animate: {
    y: ["0%", "-1.5%", "0.5%", "-1%", "0%"],
    transition: {
      duration: 3.2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-8 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between"
      >
        {/* Left: Bouncing Image Container */}
        <div className="w-full p-0 md:w-1/2 flex justify-center md:justify-start md:pl-10">
          <motion.div
            variants={bounceVariants}
            animate="animate"
            className="relative w-64 h-64 md:w-80 md:h-[400px] rounded-t-full overflow-hidden ring-4 ring-[#B3E9FA] shadow-2xl"
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/profile.png"
                alt="Fardin Ahmed Alif"
                layout="fill"
                objectFit="cover"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Right: Name, Description, and Resume CTA */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          {/* Animated Name with Typewriter Effect */}
          <motion.h1
            className="text-4xl sm:text-5xl font-semibold leading-tight bg-gradient-to-r from-[#b3e9fa] via-[#f472b6] to-[#b7ffff] bg-clip-text text-transparent"
            variants={typewriterVariants}
            initial="hidden"
            animate="visible"
            style={{ whiteSpace: "nowrap" }}
          >
            Hi I’m Fardin Ahmed Alif
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg sm:text-xl text-[oklch(0.82_0.14_320)] mt-4 font-medium"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Full-Stack Web Developer | MERN Stack | Passionate About Clean Code
          </motion.p>

          <motion.p
            className="text-base sm:text-lg text-[oklch(0.75_0.06_50)] mt-4 max-w-xl"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            I specialize in building sleek, full-stack web applications with
            modern technologies like React, Node.js, and MongoDB. Let’s create
            something impactful!
          </motion.p>

          {/* Animated Resume Button */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <motion.a
              href="https://drive.google.com/file/d/1LhVn3L6df1Ikau6eYYdaF7G8nmVn0g3-/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-black rounded-full bg-gradient-to-r from-[#E0F7FA] via-[#B3E9FA] to-[#A7F3D0] shadow-xl transition-all duration-300"
            >
              <span className="absolute inset-0 rounded-full bg-primary opacity-10 blur-md animate-pulse"></span>
              <span className="relative z-10 flex items-center gap-2">
                <svg
                  className="w-5 h-5 animate-bounce-slow text-black"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                </svg>
                View Resume
              </span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
