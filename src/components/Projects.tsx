"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa";

const projects = [
  {
    title: "GearUp",
    image: "/images/gearup.jpg",
    description:
      "Bicycle store with product browsing, order tracking, and secure checkout.",
    technologies: ["React", "Express.js", "Redux"],
    githubLink: "https://github.com/farrdin/GearUp",
    liveLink: "https://gearup-client.vercel.app/",
  },
  {
    title: "Medi-Sphere",
    image: "/images/medisphere.jpg",
    description:
      "Medicine e-commerce site with prescription uploads and payment integration.",
    technologies: ["Next.js", "TypeScript", "Redux"],
    githubLink: "https://github.com/farrdin/medi-sphere-backend",
    liveLink: "https://medi-sphere-client.vercel.app/",
  },
  {
    title: "Journey Trails",
    image: "/images/journeytrails.jpg",
    description:
      "Tour booking platform with user dashboards and admin management.",
    technologies: ["Next.js", "NextAuth", "Mongoose"],
    githubLink: "https://github.com/farrdin/journey-trails",
    liveLink: "https://journey-trails.vercel.app/",
  },
  {
    title: "ParcelPro",
    image: "/images/parcelpro.jpg",
    description:
      "Parcel tracking system with role-based access and express delivery.",
    technologies: ["React", "ShadCN", "Express.js"],
    githubLink: "https://github.com/farrdin/Parcel-management-client",
    liveLink: "https://prb9-a12.web.app/",
  },
  {
    title: "Library Shelf",
    image: "/images/library.jpg",
    description: "Library management tool with borrowing and return tracking.",
    technologies: ["React", "Firebase", "Express.js"],
    githubLink: "https://github.com/farrdin/Library-management-client",
    liveLink: "https://knowledgeshelf.netlify.app/",
  },
  {
    title: "CraftyHub",
    image: "/images/artcraft.jpg",
    description: "Craft course and item showcase with user/admin dashboards.",
    technologies: ["React", "Firebase", "Express.js"],
    githubLink: "https://github.com/farrdin/Art-craft-management-client",
    liveLink: "https://craftyhub.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
          My Best Projects
        </h2>

        <motion.div
          layout
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 1, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/60 backdrop-blur-md border border-white/30 shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">{project.description}</p>

                <div className="mt-3 flex flex-wrap">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full px-3 py-1 text-xs mr-2 mb-2 shadow-sm transition-transform duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.3, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    <FaGithub className="text-2xl" />
                  </motion.a>

                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.3, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    <FaLink className="text-2xl" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
