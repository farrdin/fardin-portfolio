"use client";

import { motion } from "framer-motion";

const ContactMe = () => {
  return (
    <section className="py-16 px-4 md:px-8 backdrop-blur-md bg-transparent">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section: Contact Form */}
        <div className="space-y-8">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <motion.div
            layout
            transition={{ duration: 0.4 }}
            className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-xl"
          >
            <form>
              {/* Name Field */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-lg font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-lg font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Message Field */}
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-lg font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Write your message"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Right Section: Why Should Hire Me */}
        <div className="space-y-8">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Why Should Hire Me?
          </h2>
          <p className="text-lg text-gray-600">
            I am a passionate and results-driven Junior Web Developer with
            hands-on experience in creating responsive web applications using
            modern technologies such as React.js, Node.js, and MongoDB. I enjoy
            solving problems and building scalable solutions that provide
            excellent user experiences.
          </p>
          <p className="text-lg text-gray-600">
            Im a fast learner who adapts quickly to new technologies and
            methodologies. Whether its front-end development or back-end
            engineering, I am committed to writing clean, maintainable code that
            contributes to the overall success of a team.
          </p>
          <p className="text-lg text-gray-600">
            Let’s work together to build something amazing!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
