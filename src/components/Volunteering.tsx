import React from 'react';
import { Award } from 'lucide-react';
import { motion } from 'framer-motion';

const volunteering = [
  {
    id: 1,
    role: 'Core Member in PR Department',
    organization: 'Insights Club',
    period: 'Jun 2023 - Jun 2024 · 1 yr 1 mo',
    category: 'Social Services'
  },
  {
    id: 2,
    role: 'Core Member of PR & Outreach Team',
    organization: 'Mozilla Firefox Club VIT Bhopal',
    period: 'Dec 2021 - Dec 2022 · 1 yr 1 mo',
    category: 'Science and Technology'
  },
  {
    id: 3,
    role: 'Campus Leader',
    organization: 'TechLearn.live',
    period: 'Mar 2022 - Apr 2022 · 2 mos',
    category: 'Education'
  },
  {
    id: 4,
    role: 'Internshala Student Partner',
    organization: 'Internshala',
    period: 'Sep 2021 - Oct 2021 · 2 mos',
    category: 'Education'
  }
];

const Volunteering = () => {
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
    <section id="volunteering" className="py-20 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Volunteering Experience</h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {volunteering.map((item) => (
              <motion.div 
                key={item.id}
                className="card p-5"
                variants={itemVariants}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Award className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.role}</h3>
                    <p className="text-blue-600 font-medium">{item.organization}</p>
                    <p className="text-gray-500 text-sm mb-2">{item.period}</p>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {item.category}
                    </span>
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

export default Volunteering;