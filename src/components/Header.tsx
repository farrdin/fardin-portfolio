"use client";

import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contactMe" },
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-end">
      <div className="max-w-7xl inline-block px-6 py-4 backdrop-blur-md bg-black/30 rounded">
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
              transition={{ type: "spring", stiffness: 300 }}
              className="text-white text-sm md:text-base tracking-wide hover:text-yellow-400 transition-colors duration-300"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;
