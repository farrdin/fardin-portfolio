"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 1, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="pt-14 pb-8 px-6 text-white"
      style={{
        background: "var(--gradient-main)",
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-white/20 pb-10">
        <div>
          <h2 className="text-2xl font-extrabold mb-4">Fardin Ahmed Alif</h2>
          <p className="text-sm leading-relaxed">
            I’m a Full-Stack Developer crafting responsive, fast, and scalable
            web applications using the MERN stack and modern UI tools.
          </p>
        </div>
        <div className="md:items-end md:text-right space-y-4">
          <h3 className="text-lg font-semibold">Connect with Me</h3>
          <div className="flex md:justify-end space-x-5 text-2xl">
            <a
              href="https://github.com/farrdin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-all duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/farrdin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-all duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:fardinahmed.dev@gmail.com"
              className="hover:text-red-400 transition-all duration-300"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center text-sm">
        &copy; {new Date().getFullYear()} Fardin Ahmed Alif. All rights
        reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
