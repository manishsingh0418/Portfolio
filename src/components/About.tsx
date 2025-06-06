import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">About Me</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                I'm a passionate Fullstack Developer with experience in building
                responsive and user-friendly web applications. Currently working
                as a Fullstack Developer Intern at GenixBit, I specialize in
                creating efficient and scalable solutions.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                My journey in web development started with a strong foundation
                in HTML, CSS, and JavaScript, and has evolved to include modern
                frameworks and technologies like React, Node.js, and MongoDB.
              </p>
              <p className="text-lg text-gray-700">
                I'm constantly learning and exploring new technologies to
                enhance my skills and deliver better solutions. I believe in
                writing clean, maintainable code and creating intuitive user
                experiences.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  Education
                </h3>
                <div>
                  <h4 className="font-medium">Bachelor of Technology</h4>
                  <p className="text-gray-600">Computer Science Engineering</p>
                  <p className="text-gray-600">
                    Vellore Institute of Technology, 2021-2025
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  Interests
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Web Development</li>
                  <li>UI/UX Design</li>
                  <li>Open Source Contribution</li>
                  <li>Problem Solving</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
