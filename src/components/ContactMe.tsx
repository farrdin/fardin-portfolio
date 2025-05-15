"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const inputVariants = {
  hover: { scale: 1.05, boxShadow: "0 4px 10px rgba(179, 233, 250, 0.4)" },
  focus: { scale: 1.05, borderColor: "#B3E9FA", transition: { duration: 0.3 } },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    backgroundColor: "#A1D9F3",
    transition: { duration: 0.3 },
  },
};

const contactItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: {
    scale: 1.05,
    color: "#B3E9FA",
    transition: { duration: 0.3 },
  },
};

const ContactMe = () => {
  const { ref, inView } = useInView({
    threshold: 0.3, // 30% of the section should be visible
  });

  return (
    <section id="contactMe" className="w-full py-20 px-6 md:px-16 text-white">
      <motion.div
        ref={ref}
        variants={fadeIn}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 bg-white/5 border border-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-xl"
      >
        {/* Left: Contact Form */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-[#E0F7FA] mb-6">Contact Me</h2>
          <p className="text-white/80 mb-6">
            I’d love to hear from you! Fill out the form and I’ll get back to
            you as soon as possible.
          </p>

          <form className="space-y-4">
            <motion.input
              type="text"
              placeholder="Your Name"
              variants={inputVariants}
              whileHover="hover"
              whileFocus="focus"
              className="w-full p-3 rounded-lg border border-white/10 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-[#B3E9FA] outline-none"
            />
            <motion.input
              type="email"
              placeholder="Your Email"
              variants={inputVariants}
              whileHover="hover"
              whileFocus="focus"
              className="w-full p-3 rounded-lg border border-white/10 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-[#B3E9FA] outline-none"
            />
            <motion.textarea
              rows={4}
              placeholder="Your Message"
              variants={inputVariants}
              whileHover="hover"
              whileFocus="focus"
              className="w-full p-3 rounded-lg border border-white/10 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-[#B3E9FA] outline-none"
            />
            <motion.button
              type="submit"
              variants={buttonVariants}
              whileHover="hover"
              className="bg-[#B3E9FA] text-black px-6 py-3 rounded-lg font-semibold hover:brightness-110 transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </div>

        {/* Right: Why Hire Me / Contact Info */}
        <div className="flex-1 space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-[#E0F7FA] mb-2">
              Why Should You Hire Me?
            </h3>
            <p className="text-white/80 leading-relaxed">
              I’m a passionate MERN stack developer with hands-on experience in
              building full-stack, responsive applications. I focus on clean
              code, performance, and usability. I’m reliable, a fast learner,
              and I solve real-world problems using modern technologies.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xl font-semibold text-[#E0F7FA]">
              Contact Details
            </h4>
            <motion.div
              variants={contactItemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover="hover"
              className="text-white/80 space-y-1"
            >
              <p>📧 Email: Fardinahmed.dev@gmail.com</p>
            </motion.div>
            <motion.div
              variants={contactItemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover="hover"
              className="text-white/80 space-y-1"
            >
              <p>📱 Phone: +880 1938903874</p>
            </motion.div>
            <motion.div
              variants={contactItemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover="hover"
              className="text-white/80 space-y-1"
            >
              <p>📍 Location: Dhaka, Bangladesh</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactMe;
