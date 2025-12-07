import React from "react";
import { Link } from "react-scroll";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import profileImage from "../assets/profile.jpg"; // adjust path if needed

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 z-0"></div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
              Hi, I'm <span className="text-blue-600">Manish Kumar</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
              Fullstack Developer
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              I build responsive web applications with modern technologies.
              Passionate about creating clean, efficient, and user-friendly
              solutions.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="btn-primary cursor-pointer"
              >
                View My Work
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="btn-outline cursor-pointer"
              >
                Contact Me
              </Link>
              <a
                href="/Manish_SDE_V8.pdf"
                download
                className="btn-outline cursor-pointer"
              >
                Download Resume
              </a>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://github.com/manishsingh0418"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/manishsingh0418"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:manishkumar80819@gmail.com"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-75"></div>
              <div className="relative bg-white p-1 rounded-full overflow-hidden">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="rounded-full w-full h-auto object-cover aspect-square transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="text-gray-500 cursor-pointer"
        >
          <ChevronDown size={32} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
