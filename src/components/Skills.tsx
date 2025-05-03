"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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

const Skills = () => {
  const [activeTab, setActiveTab] = useState<"frontend" | "backend" | "others">(
    "frontend"
  );

  const skills: Record<
    typeof activeTab,
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
        colorClass: "bg-orange-500",
        color: "#F97316",
      },
      {
        icon: <FaCss3Alt />,
        name: "CSS3",
        progress: 90,
        colorClass: "bg-blue-500",
        color: "#3B82F6",
      },
      {
        icon: <SiTailwindcss />,
        name: "Tailwind CSS",
        progress: 85,
        colorClass: "bg-cyan-500",
        color: "#06B6D4",
      },
      {
        icon: <FaBootstrap />,
        name: "Bootstrap",
        progress: 80,
        colorClass: "bg-purple-600",
        color: "#9333EA",
      },
      {
        icon: <SiJavascript />,
        name: "JavaScript",
        progress: 90,
        colorClass: "bg-yellow-400",
        color: "#FACC15",
      },
      {
        icon: <SiTypescript />,
        name: "TypeScript",
        progress: 85,
        colorClass: "bg-blue-600",
        color: "#2563EB",
      },
      {
        icon: <FaReact />,
        name: "React.js",
        progress: 90,
        colorClass: "bg-sky-500",
        color: "#0EA5E9",
      },
      {
        icon: <SiNextdotjs />,
        name: "Next.js",
        progress: 80,
        colorClass: "bg-gray-800",
        color: "#1F2937",
      },
      {
        icon: <SiRedux />,
        name: "Redux",
        progress: 80,
        colorClass: "bg-purple-700",
        color: "#7E22CE",
      },
      {
        icon: <SiJavascript />,
        name: "Vanilla JS",
        progress: 85,
        colorClass: "bg-yellow-400",
        color: "#FACC15",
      },
      {
        icon: <SiJavascript />,
        name: "ES6",
        progress: 80,
        colorClass: "bg-green-500",
        color: "#22C55E",
      },
      {
        icon: <FaLaptopCode />,
        name: "DOM",
        progress: 85,
        colorClass: "bg-pink-500",
        color: "#EC4899",
      },
    ],
    backend: [
      {
        icon: <FaNodeJs />,
        name: "Node.js",
        progress: 90,
        colorClass: "bg-green-600",
        color: "#16A34A",
      },
      {
        icon: <SiExpress />,
        name: "Express.js",
        progress: 85,
        colorClass: "bg-gray-700",
        color: "#374151",
      },
      {
        icon: <SiTypescript />,
        name: "TypeScript",
        progress: 80,
        colorClass: "bg-blue-600",
        color: "#2563EB",
      },
      {
        icon: <SiMongodb />,
        name: "MongoDB",
        progress: 85,
        colorClass: "bg-green-700",
        color: "#15803D",
      },
      {
        icon: <FaDatabase />,
        name: "SQL",
        progress: 75,
        colorClass: "bg-red-600",
        color: "#DC2626",
      },
      {
        icon: <SiMongodb />,
        name: "Mongoose",
        progress: 80,
        colorClass: "bg-green-800",
        color: "#166534",
      },
    ],
    others: [
      {
        icon: <SiFirebase />,
        name: "Firebase Auth",
        progress: 80,
        colorClass: "bg-yellow-500",
        color: "#F59E0B",
      },
      {
        icon: <SiNextdns />,
        name: "NextAuth",
        progress: 75,
        colorClass: "bg-blue-500",
        color: "#3B82F6",
      },
      {
        icon: <SiPayoneer />,
        name: "SSLCommerz",
        progress: 80,
        colorClass: "bg-green-500",
        color: "#22C55E",
      },
      {
        icon: <FaCcStripe />,
        name: "Stripe",
        progress: 85,
        colorClass: "bg-indigo-600",
        color: "#4F46E5",
      },
      {
        icon: <SiContactlesspayment />,
        name: "ShurjoPay",
        progress: 80,
        colorClass: "bg-purple-500",
        color: "#A855F7",
      },
      {
        icon: <SiPostman />,
        name: "Postman",
        progress: 85,
        colorClass: "bg-orange-500",
        color: "#F97316",
      },
      {
        icon: <BsGit />,
        name: "Git",
        progress: 90,
        colorClass: "bg-red-500",
        color: "#EF4444",
      },
      {
        icon: <BsGithub />,
        name: "GitHub",
        progress: 90,
        colorClass: "bg-black",
        color: "#000000",
      },
      {
        icon: <TbBrandVscode />,
        name: "VS Code",
        progress: 95,
        colorClass: "bg-blue-500",
        color: "#3B82F6",
      },
      {
        icon: <FaComments />,
        name: "Communication",
        progress: 90,
        colorClass: "bg-lime-600",
        color: "#65A30D",
      },
      {
        icon: <FaLaptopCode />,
        name: "Problem Solving",
        progress: 85,
        colorClass: "bg-emerald-600",
        color: "#059669",
      },
    ],
  };

  return (
    <section className="w-full py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
          My Skills
        </h2>

        {/* Tabs */}
        <div className="flex justify-center space-x-6 mb-10">
          {["frontend", "backend", "others"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as typeof activeTab)}
              className={`text-lg font-semibold transition ${
                activeTab === tab
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {tab === "frontend"
                ? "Frontend"
                : tab === "backend"
                ? "Backend"
                : "Others & Tools"}
            </button>
          ))}
        </div>
        <motion.div
          layout
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
        >
          {skills[activeTab].map((skill, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white shadow-md p-4 rounded-xl text-center transition-transform duration-300 hover:scale-105"
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
                ></div>
              </div>
              <p className="text-sm text-gray-500 mt-1">{skill.progress}%</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
