"use client";

import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "#educations" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contactMe" },
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-end">
      <div className="max-w-7xl inline-block px-6 py-4 backdrop-blur-md bg-black/30 rounded shadow-md">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center space-x-10"
        >
          {navLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-white text-sm md:text-base tracking-wide relative group hover:text-[#B3E9FA] transition-all duration-300"
            >
              {link.label}
              {/* Underline hover animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#B3E9FA] transition-all group-hover:w-full duration-300"></span>
            </motion.a>
          ))}
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;
