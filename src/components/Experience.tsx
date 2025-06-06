import React from "react";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Fullstack Developer Intern",
    company: "GenixBit",
    location: "Ahmedabad, Gujarat, India · Remote",
    period: "May 2025 - Present · 2 mos",
    description:
      "Working as a Fullstack Developer Intern at GenixBit, contributing to web application development using modern technologies.",
    skills: [
      "HTML",
      "Cascading Style Sheets (CSS)",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
  {
    id: 2,
    role: "Fullstack Developer Intern",
    company: "Ethnus",
    location: "Remote",
    period: "August 2023 - November 2023 · 4 mos",
    description:
      "Worked on a project that involved developing a web application using React.js and Node.js.",
    skills: [
      "HTML",
      "Cascading Style Sheets (CSS)",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Git",
      "GitHub",
      "REST APIs",
    ],
  },
  {
    id: 3,
    role: "Programming Intern",
    company: "TheCyberDelta",
    location: "Remote",
    period: "May 2022 - Jun 2022 · 2 mos",
    description:
      "Worked on web development projects using HTML, CSS, and other technologies.",
    skills: ["HTML", "Cascading Style Sheets (CSS)", "JavaScript"],
  },
];

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Professional Experience
          </h2>

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                className="bg-white shadow-md rounded-lg p-6"
                variants={itemVariants}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Briefcase className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {exp.role}
                    </h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                    <p className="text-gray-600 mb-2">{exp.location}</p>
                    <p className="text-gray-500 text-sm mb-4">{exp.period}</p>

                    <p className="text-gray-700 mb-3">{exp.description}</p>

                    {exp.skills?.length > 0 && (
                      <div className="mt-4">
                        <p className="text-sm font-medium text-gray-700 mb-2">
                          Skills:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
