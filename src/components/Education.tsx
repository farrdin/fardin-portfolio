"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaServer,
  FaTools,
} from "react-icons/fa";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
};

const EducationExperience = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section id="educations" className="w-full py-20 px-4 md:px-8">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariant}
        className="text-4xl font-extrabold mb-16 text-center text-[#E0F7FA]"
      >
        My Journey & Services
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column: Education/Experience */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
        >
          {/* Tabs */}
          <div className="flex space-x-4 mb-8">
            {["education", "experience"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 border ${
                  activeTab === tab
                    ? "bg-[#b3e9fa] text-black"
                    : "border-gray-600 text-gray-300 hover:bg-[#b3e9fa33] hover:text-white"
                }`}
              >
                <div className="flex items-center gap-2">
                  {tab === "education" ? <FaGraduationCap /> : <FaBriefcase />}
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </div>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === "education" ? (
              <motion.div
                key="education"
                variants={fadeUpVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <h3 className="text-2xl font-semibold mb-2 text-[#b3e9fa]">
                  Bachelor of Business Administration (BBA)
                </h3>
                <p className="text-gray-300">
                  National University, Dhaka, Bangladesh
                </p>
                <p className="text-sm text-gray-400">2016 - 2018</p>
                <p className="text-gray-400 mt-4 text-[15px] leading-relaxed">
                  I pursued a degree in Business Administration that helped
                  build my analytical and strategic thinking abilities.
                  Meanwhile, my strong interest in web development led me to
                  build real-world applications using the MERN stack.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="experience"
                variants={fadeUpVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <h3 className="text-2xl font-semibold mb-2 text-[#b3e9fa]">
                  Full-Stack Web Developer (Self-Taught)
                </h3>
                <p className="text-gray-300">2019 - Present</p>
                <p className="text-gray-400 mt-4 text-[15px] leading-relaxed">
                  I’ve built numerous full-stack applications that simulate
                  real-world systems. I focus on React, Node.js, Express,
                  MongoDB, Redux, and Tailwind CSS. Projects include:
                </p>
                <ul className="list-disc ml-5 mt-4 space-y-1 text-gray-400">
                  <li>
                    🚚 <strong>ParcelPro</strong> – Parcel Management System
                  </li>
                  <li>
                    🌍 <strong>Journey Trails</strong> – Tourism Booking
                    Platform
                  </li>
                  <li>
                    💊 <strong>MediSphere</strong> – Medicine E-commerce App
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Right Column: Services */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
        >
          <div className="space-y-6">
            {[
              {
                icon: <FaCode className="text-[#f472b6] text-2xl mt-1" />,
                title: "Frontend Development",
                desc: "Responsive UI development with React, Next.js, and TailwindCSS.",
              },
              {
                icon: <FaServer className="text-[#b3e9fa] text-2xl mt-1" />,
                title: "Backend & API",
                desc: "RESTful APIs and scalable backend using Node.js, Express, and MongoDB.",
              },
              {
                icon: <FaTools className="text-yellow-400 text-2xl mt-1" />,
                title: "Full-Stack Projects",
                desc: "Complete web applications with authentication, authorization, dashboards, and payment integrations.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                {service.icon}
                <div>
                  <h4 className="text-xl font-semibold text-white">
                    {service.title}
                  </h4>
                  <p className="text-gray-400">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationExperience;
