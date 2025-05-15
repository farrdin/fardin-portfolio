"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaBootstrap,
  FaDatabase,
  FaLaptopCode,
  FaComments,
  FaCcStripe,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiFirebase,
  SiPostman,
  SiContactlesspayment,
  SiPayoneer,
  SiNextdns,
} from "react-icons/si";
import { BsGit, BsGithub } from "react-icons/bs";
import { TbBrandVscode } from "react-icons/tb";

const TABS = ["frontend", "backend", "others"] as const;
type Tab = (typeof TABS)[number];

const Skills = () => {
  const [activeTab, setActiveTab] = useState<Tab>("frontend");

  const skills: Record<
    Tab,
    {
      icon: React.ReactNode;
      name: string;
      progress: number;
      colorClass: string;
      color: string;
    }[]
  > = {
    frontend: [
      {
        icon: <FaHtml5 />,
        name: "HTML5",
        progress: 95,
        colorClass: "bg-[#F97316]",
        color: "#F97316",
      },
      {
        icon: <FaCss3Alt />,
        name: "CSS3",
        progress: 90,
        colorClass: "bg-[#3B82F6]",
        color: "#3B82F6",
      },
      {
        icon: <SiTailwindcss />,
        name: "Tailwind CSS",
        progress: 85,
        colorClass: "bg-[#06B6D4]",
        color: "#06B6D4",
      },
      {
        icon: <FaBootstrap />,
        name: "Bootstrap",
        progress: 80,
        colorClass: "bg-[#9333EA]",
        color: "#9333EA",
      },
      {
        icon: <SiJavascript />,
        name: "JavaScript",
        progress: 90,
        colorClass: "bg-[#FACC15]",
        color: "#FACC15",
      },
      {
        icon: <SiTypescript />,
        name: "TypeScript",
        progress: 85,
        colorClass: "bg-[#2563EB]",
        color: "#2563EB",
      },
      {
        icon: <FaReact />,
        name: "React.js",
        progress: 90,
        colorClass: "bg-[#0EA5E9]",
        color: "#0EA5E9",
      },
      {
        icon: <SiNextdotjs />,
        name: "Next.js",
        progress: 80,
        colorClass: "bg-[#1F2937]",
        color: "#1F2937",
      },
      {
        icon: <SiRedux />,
        name: "Redux",
        progress: 80,
        colorClass: "bg-[#7E22CE]",
        color: "#7E22CE",
      },
    ],
    backend: [
      {
        icon: <FaNodeJs />,
        name: "Node.js",
        progress: 90,
        colorClass: "bg-[#16A34A]",
        color: "#16A34A",
      },
      {
        icon: <SiExpress />,
        name: "Express.js",
        progress: 85,
        colorClass: "bg-[#374151]",
        color: "#374151",
      },
      {
        icon: <SiTypescript />,
        name: "TypeScript",
        progress: 80,
        colorClass: "bg-[#2563EB]",
        color: "#2563EB",
      },
      {
        icon: <SiMongodb />,
        name: "MongoDB",
        progress: 85,
        colorClass: "bg-[#15803D]",
        color: "#15803D",
      },
      {
        icon: <FaDatabase />,
        name: "SQL",
        progress: 75,
        colorClass: "bg-[#DC2626]",
        color: "#DC2626",
      },
    ],
    others: [
      {
        icon: <SiFirebase />,
        name: "Firebase Auth",
        progress: 80,
        colorClass: "bg-[#F59E0B]",
        color: "#F59E0B",
      },
      {
        icon: <SiNextdns />,
        name: "NextAuth",
        progress: 75,
        colorClass: "bg-[#3B82F6]",
        color: "#3B82F6",
      },
      {
        icon: <SiPayoneer />,
        name: "SSLCommerz",
        progress: 80,
        colorClass: "bg-[#22C55E]",
        color: "#22C55E",
      },
      {
        icon: <FaCcStripe />,
        name: "Stripe",
        progress: 85,
        colorClass: "bg-[#4F46E5]",
        color: "#4F46E5",
      },
      {
        icon: <SiContactlesspayment />,
        name: "ShurjoPay",
        progress: 80,
        colorClass: "bg-[#A855F7]",
        color: "#A855F7",
      },
      {
        icon: <SiPostman />,
        name: "Postman",
        progress: 85,
        colorClass: "bg-[#F97316]",
        color: "#F97316",
      },
      {
        icon: <BsGit />,
        name: "Git",
        progress: 90,
        colorClass: "bg-[#EF4444]",
        color: "#EF4444",
      },
      {
        icon: <BsGithub />,
        name: "GitHub",
        progress: 90,
        colorClass: "bg-[#000000]",
        color: "#000000",
      },
      {
        icon: <TbBrandVscode />,
        name: "VS Code",
        progress: 95,
        colorClass: "bg-[#3B82F6]",
        color: "#3B82F6",
      },
      {
        icon: <FaComments />,
        name: "Communication",
        progress: 90,
        colorClass: "bg-[#65A30D]",
        color: "#65A30D",
      },
      {
        icon: <FaLaptopCode />,
        name: "Problem Solving",
        progress: 85,
        colorClass: "bg-[#059669]",
        color: "#059669",
      },
    ],
  };

  return (
    <section id="skills" className="w-full py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-extrabold text-[#E0F7FA] mb-12"
        >
          My Skills
        </motion.h2>

        {/* Tabs with animated underline */}
        <div className="relative flex justify-center space-x-8 mb-10">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative text-lg font-medium pb-2 transition ${
                activeTab === tab
                  ? "text-[#B3E9FA]"
                  : "text-gray-500 hover:text-[#B3E9FA]"
              }`}
            >
              {tab === "frontend"
                ? "Frontend"
                : tab === "backend"
                ? "Backend"
                : "Others & Tools"}
              {activeTab === tab && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B3E9FA]"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Skill Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
          >
            {skills[activeTab].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white shadow-md p-4 rounded-xl text-center transition-transform duration-300"
              >
                <div className="text-5xl mb-3" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {skill.name}
                </h3>
                <div className="w-full bg-gray-200 rounded-full mt-2 h-2">
                  <div
                    className={`${skill.colorClass} h-2 rounded-full transition-all duration-700`}
                    style={{ width: `${skill.progress}%` }}
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1">{skill.progress}%</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
