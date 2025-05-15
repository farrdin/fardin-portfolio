"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

// Container animation (stagger children)
const container = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

// Each item animation
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Icon animation with fun entrance + hover
const iconVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -45 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
  hover: {
    scale: 1.25,
    rotate: 10,
    transition: { type: "spring", stiffness: 300 },
  },
};

const Footer = () => {
  return (
    <motion.footer
      className="pt-14 pb-8 px-6 text-white"
      style={{ background: "var(--gradient-main)" }}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-white/20 pb-10">
        {/* Text Left */}
        <motion.div variants={fadeUp}>
          <h2 className="text-2xl font-extrabold mb-4">Fardin Ahmed Alif</h2>
          <p className="text-sm leading-relaxed">
            I’m a Full-Stack Developer crafting responsive, fast, and scalable
            web applications using the MERN stack and modern UI tools.
          </p>
        </motion.div>

        {/* Right: Contact */}
        <motion.div
          variants={fadeUp}
          className="md:items-end md:text-right space-y-4"
        >
          <h3 className="text-lg font-semibold">Connect with Me</h3>
          <div className="flex md:justify-end space-x-6 text-2xl">
            {/* Animated Icons */}
            <motion.a
              href="https://github.com/farrdin"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              className="text-white"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/farrdin"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              className="text-white"
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              href="mailto:fardinahmed.dev@gmail.com"
              variants={iconVariants}
              whileHover="hover"
              className="text-white"
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Bottom copyright */}
      <motion.div
        variants={fadeUp}
        className="mt-6 text-center text-sm text-white/70"
      >
        &copy; {new Date().getFullYear()} Fardin Ahmed Alif. All rights
        reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
