import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    id: 1,
    name: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Tailwind CSS', 'Bootstrap']
  },
  {
    id: 2,
    name: 'Backend',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Firebase','AWS Cloud']
  },
  {
    id: 3,
    name: 'Tools & Others',
    skills: ['Git', 'GitHub', 'VS Code', 'Responsive Design', 'Figma', 'Netlify', 'Vercel']
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Skills</h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skillCategories.map((category) => (
              <motion.div 
                key={category.id}
                className="card p-6"
                variants={itemVariants}
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-white border border-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;