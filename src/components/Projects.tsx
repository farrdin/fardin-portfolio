"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "GearUp",
    image: "/images/gearup.jpg",
    description:
      "Bicycle store with product browsing, order tracking, and secure checkout.",
    technologies: ["React", "Express.js", "Redux"],
    githubLink: "https://github.com/farrdin/GearUp",
    liveLink: "https://gearup-client.vercel.app/",
  },
  {
    id: 2,
    title: "Medi-Sphere",
    image: "/images/medisphere.jpg",
    description:
      "Medicine e-commerce site with prescription uploads and payment integration.",
    technologies: ["Next.js", "TypeScript", "Redux"],
    githubLink: "https://github.com/farrdin/medi-sphere-backend",
    liveLink: "https://medi-sphere-client.vercel.app/",
  },
  {
    id: 3,
    title: "Journey Trails",
    image: "/images/journeytrails.jpg",
    description:
      "Tour booking platform with user dashboards and admin management.",
    technologies: ["Next.js", "NextAuth", "Mongoose"],
    githubLink: "https://github.com/farrdin/journey-trails",
    liveLink: "https://journey-trails.vercel.app/",
  },
  {
    id: 4,
    title: "ParcelPro",
    image: "/images/parcelpro.jpg",
    description:
      "Parcel tracking system with role-based access and express delivery.",
    technologies: ["React", "ShadCN", "Express.js"],
    githubLink: "https://github.com/farrdin/Parcel-management-client",
    liveLink: "https://prb9-a12.web.app/",
  },
  {
    id: 5,
    title: "Library Shelf",
    image: "/images/library.jpg",
    description: "Library management tool with borrowing and return tracking.",
    technologies: ["React", "Firebase", "Express.js"],
    githubLink: "https://github.com/farrdin/Library-management-client",
    liveLink: "https://knowledgeshelf.netlify.app/",
  },
  {
    id: 6,
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
    <section id="projects" className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#E0F7FA] mb-20">
          Showcase of My Work
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-white/60 backdrop-blur-md border border-white/30 shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1"
            >
              {/* Image Section with Hover Overlay */}
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover group-hover:blur-sm transition-all duration-500"
                />

                {/* Slide-Up Overlay */}
                <div className="absolute w-full h-full bg-black/60 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <Link href={`/projects/${project.id}`} passHref>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#B3E9FA] text-black px-4 py-1.5 rounded-md font-semibold text-sm shadow-lg"
                    >
                      View Details
                    </motion.button>
                  </Link>
                </div>
              </div>

              {/* Description Section */}
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
                      className="inline-block bg-gradient-to-r from-[#B3E9FA] to-[#4FD1C5] text-black rounded-full px-3 py-1 text-xs mr-2 mb-2 shadow-sm transition-transform duration-300"
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
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    <FaGithub className="text-2xl" />
                  </motion.a>

                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.3, rotate: -10 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    <FaLink className="text-2xl" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
