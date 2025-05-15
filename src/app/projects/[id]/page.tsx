"use client";

import { notFound, useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "GearUp",
    image: "/images/gearup.jpg",
    description:
      "A modern bicycle e-commerce platform featuring intuitive UI, real-time order tracking, and secure payments.",
    features: [
      "User-friendly product catalog with filters",
      "JWT-based authentication and admin dashboard",
      "Real-time order status updates and payment with Stripe",
    ],
    technologies: [
      "React",
      "Redux",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Stripe",
    ],
    role: "Led full-stack development — UI, backend APIs, and deployment.",
    tools: ["VSCode", "Postman", "MongoDB Atlas", "Render", "Vercel"],
    duration: "3 weeks",
    challenges:
      "Achieving real-time tracking updates and integrating Stripe while maintaining seamless UX.",
    githubLink: "https://github.com/farrdin/GearUp",
    liveLink: "https://gearup-client.vercel.app/",
  },
  {
    id: 2,
    title: "Medi-Sphere",
    image: "/images/medisphere.jpg",
    description:
      "A full-fledged medicine e-commerce platform with prescription validation and secure delivery.",
    features: [
      "Prescription uploads",
      "Stripe-based payments",
      "Authentication with JWT",
    ],
    technologies: ["Next.js", "TypeScript", "Redux", "Node.js", "MongoDB"],
    role: "Frontend & API Integration Developer",
    tools: ["Figma", "Postman", "Cloudinary", "Vercel"],
    duration: "2.5 weeks",
    challenges: "Handling secure image upload and protected resource access",
    githubLink: "https://github.com/farrdin/medi-sphere-backend",
    liveLink: "https://medi-sphere-client.vercel.app/",
  },
  {
    id: 3,
    title: "Journey Trails",
    image: "/images/journeytrails.jpg",
    description:
      "Tour booking platform providing user dashboards, admin management, and seamless booking experiences.",
    features: [
      "User account and dashboard",
      "Admin panel for tour management",
      "Booking and payment processing",
    ],
    technologies: ["Next.js", "NextAuth", "Mongoose", "Stripe"],
    role: "Full-stack developer focusing on secure authentication and booking workflows.",
    tools: ["VSCode", "Postman", "MongoDB Atlas", "Vercel"],
    duration: "3 weeks",
    challenges:
      "Implementing secure user authentication and managing booking concurrency.",
    githubLink: "https://github.com/farrdin/journey-trails",
    liveLink: "https://journey-trails.vercel.app/",
  },
  {
    id: 4,
    title: "ParcelPro",
    image: "/images/parcelpro.jpg",
    description:
      "Parcel tracking system with role-based access, express delivery, and detailed shipment statuses.",
    features: [
      "Role-based user access",
      "Real-time parcel tracking",
      "Express delivery options",
    ],
    technologies: ["React", "ShadCN UI", "Express.js", "MongoDB"],
    role: "Backend API and frontend UI developer ensuring smooth tracking and user roles.",
    tools: ["VSCode", "Postman", "MongoDB Atlas", "Firebase"],
    duration: "3 weeks",
    challenges:
      "Designing role-based permissions and integrating real-time parcel status updates.",
    githubLink: "https://github.com/farrdin/Parcel-management-client",
    liveLink: "https://prb9-a12.web.app/",
  },
  {
    id: 5,
    title: "Library Shelf",
    image: "/images/library.jpg",
    description:
      "Library management tool with borrowing, return tracking, and admin management dashboards.",
    features: [
      "Book borrowing and return system",
      "Admin dashboard for inventory management",
      "User activity tracking",
    ],
    technologies: ["React", "Firebase", "Express.js", "MongoDB"],
    role: "Full-stack developer managing frontend UI and backend services.",
    tools: ["VSCode", "Firebase Console", "Postman", "Netlify"],
    duration: "3 weeks",
    challenges:
      "Synchronizing real-time data updates and managing user borrowing history.",
    githubLink: "https://github.com/farrdin/Library-management-client",
    liveLink: "https://knowledgeshelf.netlify.app/",
  },
  {
    id: 6,
    title: "CraftyHub",
    image: "/images/artcraft.jpg",
    description:
      "Craft course and item showcase platform with separate dashboards for users and admins.",
    features: [
      "User and admin dashboards",
      "Course enrollment and progress tracking",
      "Craft item catalog and reviews",
    ],
    technologies: ["React", "Firebase", "Express.js", "MongoDB"],
    role: "Lead developer for UI/UX and backend API development.",
    tools: ["VSCode", "Firebase", "Postman", "Netlify"],
    duration: "4 weeks",
    challenges:
      "Balancing user and admin functionalities and ensuring data consistency.",
    githubLink: "https://github.com/farrdin/Art-craft-management-client",
    liveLink: "https://craftyhub.netlify.app/",
  },
];

export default function ProjectDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const project = projects.find((p) => p.id === parseInt(params.id));
  const router = useRouter();

  if (!project) return notFound();

  return (
    <div
      style={{ background: "var(--gradient-main)" }}
      className="min-h-screen text-white px-6 py-12"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative w-full md:w-1/2 h-64 md:h-auto shadow-2xl rounded-xl overflow-hidden"
        >
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-full md:w-1/2 p-8 rounded-xl bg-white/5 backdrop-blur-md border border-white/10"
        >
          <h1 className="text-4xl font-bold text-[#E0F7FA] mb-4">
            {project.title}
          </h1>

          <p className="text-lg text-gray-200 leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Features */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-[#B3E9FA] mb-2">
              Key Features
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          {/* Technologies */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-[#B3E9FA] mb-2">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#B3E9FA] text-black text-sm px-3 py-1 rounded-full font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </section>

          {/* Role */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-[#B3E9FA] mb-2">
              My Role
            </h2>
            <p className="text-gray-300">{project.role}</p>
          </section>

          {/* Challenges */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-[#B3E9FA] mb-2">
              Challenges & Solutions
            </h2>
            <p className="text-gray-300">{project.challenges}</p>
          </section>

          {/* Tools */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-[#B3E9FA] mb-2">
              Tools & Platforms
            </h2>
            <p className="text-gray-300">{project.tools.join(", ")}</p>
          </section>

          {/* Duration */}
          <div className="text-sm text-gray-400 mb-8">
            <strong>Duration:</strong> {project.duration}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mb-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-black border border-white hover:bg-white hover:text-black transition font-semibold"
            >
              GitHub
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-[#B3E9FA] text-black hover:bg-white transition font-semibold"
            >
              Live Site
            </motion.a>
          </div>

          {/* Back Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/")}
            className="text-sm underline text-[#B3E9FA] hover:text-white transition"
          >
            ← Back to Home
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
