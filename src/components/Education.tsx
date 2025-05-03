"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const EducationExperience = () => {
  const [activeTab, setActiveTab] = useState("education");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section className="w-full py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-gray-800 mb-12"
        >
          Education & Experience
        </motion.h2>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <button
            onClick={() => handleTabChange("education")}
            className={`px-6 py-3 text-lg font-medium rounded-full transition-all duration-300 ${
              activeTab === "education"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-indigo-500 hover:text-white`}
          >
            <FaGraduationCap className="mr-2" />
            Education
          </button>
          <button
            onClick={() => handleTabChange("experience")}
            className={`px-6 py-3 text-lg font-medium rounded-full transition-all duration-300 ${
              activeTab === "experience"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-indigo-500 hover:text-white`}
          >
            <FaBriefcase className="mr-2" />
            Experience
          </button>
        </div>

        {/* Tab Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === "education" ? (
            <div className="max-w-xl mx-auto shadow-xl rounded-xl bg-white p-8">
              <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
                Bachelor of Business Administration (BBA)
              </h3>
              <p className="text-gray-600 mb-2">
                National University, Dhaka, Bangladesh
              </p>
              <p className="text-sm text-gray-500">2016 - 2018</p>
              <p className="text-gray-700 mt-4 text-[15px] leading-relaxed">
                I pursued a degree in Business Administration that helped build
                my analytical and strategic thinking abilities. Meanwhile, my
                strong interest in web development led me to build real-world
                applications using the MERN stack.
              </p>
            </div>
          ) : (
            <div className="max-w-xl mx-auto shadow-xl rounded-xl bg-white p-8">
              <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
                Junior Web Developer (Personal Projects)
              </h3>
              <p className="text-gray-600 mb-2">2019 - Present</p>
              <p className="text-gray-700 mt-4 text-[15px] leading-relaxed">
                Although I don’t have official job experience, I’ve built
                several full-stack applications that simulate real-world
                systems. I focus on React, Node.js, Express, MongoDB, Redux, and
                Tailwind CSS. These include:
              </p>
              <ul className="list-disc ml-5 mt-4 text-gray-600 space-y-1">
                <li>
                  🚚 <strong>ParcelPro</strong> – Parcel Management System
                </li>
                <li>
                  🌍 <strong>Journey Trails</strong> – Tourism Booking Website
                </li>
                <li>
                  💊 <strong>MediSphere</strong> – Medicine E-commerce Platform
                </li>
              </ul>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationExperience;
