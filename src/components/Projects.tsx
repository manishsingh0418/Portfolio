import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

// const projects = [
//   {
//     id: 1,
//     title: 'Glamora',
//     period: 'Mar 2025 - May 2025',
//     description: [
//       'Focused on female-oriented products, including clothes, garments, cosmetics, and jewellery, delivering a targeted shopping experience.',
//       'Designed and executed features such as a user-friendly interface, secure payment integration, product management, customer reviews, and responsive design for seamless use across devices.',
//       'Enhanced user retention by 30% through seamless navigation and user-friendly features.',
//       'Developed and integrated RESTful APIs, enhancing data exchanges between front-end and back-end systems, which resulted in a 40% improvement in response times for user transactions on the platform.'
//     ],
//     github: 'https://github.com/manishsingh0418/Glamora.git',
//     liveLink: 'https://theglamora.netlify.app/',
//     skills: ['React.js', 'Express.js', 'Node.js', 'MongoDB', 'Tailwind CSS']
//   },
//   {
//     id: 2,
//     title: 'HireHorizon',
//     period: 'Sep 2024 - Oct 2024',
//     description: [
//       'Developed a responsive job portal with filters for role, type, location, and experience.',
//       'Built interactive UI components and managed state using React JS.',
//       'Integrated Firebase for real-time job data management.',
//       'Designed job cards with application links and timing via Day.js.',
//       'Added interactive search with a "Clear Filters" feature.'
//     ],
//     github: 'https://github.com/manishsingh0418/HireHorizon.git',
//     liveLink: 'https://hire-horizon.vercel.app/',
//     skills: ['HTML', 'Cascading Style Sheets (CSS)', 'JavaScript', 'React.js', 'Node', 'Firebase']
//   },
//   {
//     id: 3,
//     title: 'Travel Weather',
//     period: 'Aug 2024 - Aug 2024',
//     description: [
//       'Developed a React and TypeScript weather application for travelers to check destination weather conditions.',
//       'Integrated Open-Meteo API to provide accurate real-time weather data and 7-day forecasts.',
//       'Implemented responsive UI with Tailwind CSS and Lucide React icons for optimal user experience.',
//       'Built with clean architecture featuring reusable components and comprehensive TypeScript type definitions.',
//       'Created an intuitive city search with geolocation support and robust error handling for seamless user interaction.'
//     ],
//     github: 'https://github.com/manishsingh0418/TravelWeather.git',
//     liveLink: 'https://travelweather4.netlify.app/',
//     skills: ['TypeScript', 'React.js', 'Tailwind CSS', 'Node.js', 'REST APIs']
//   },
//   {
//     id: 4,
//     title: 'YesStyle',
//     period: 'Jan 2024 - Jan 2024',
//     description: [
//       'Developed a dynamic and responsive e-commerce platform, enabling users to browse products, add items to their cart, and complete purchases seamlessly.',
//       'Implemented a shopping cart system allowing users to manage selected products before proceeding to checkout.',
//       'Created a secure checkout and payment page, ensuring a smooth transaction process for users.',
//       'Optimized the UI with custom CSS stylesheets for each page, ensuring a visually appealing and user-friendly design.'
//     ],
//     github: 'https://github.com/manishsingh0418/YesStyle.git',
//     liveLink: 'https://manishsingh0418.github.io/YesStyle/',
//     skills: ['HTML', 'CSS', 'Bootstrap (Framework)', 'JavaScript']
//   }
// ];
const projects = [
  // ⭐ LATEST PROJECT - NOW AT THE TOP
  {
    id: 1,
    title: 'Maitree Marathi - Language Learning Platform',
    period: 'October 2025 - December 2025',
    description: [
      'Developed a full-stack Marathi language learning platform with lessons, quizzes, AI chatbot, subscription model, and referral rewards system.',
      'Implemented sequential lesson unlocking, progress tracking, quiz-based assessments, and multi-level course structure.',
      'Integrated Instamojo payment gateway for real payments with subscription validation and fraud prevention.',
      'Built a referral system with wallet earnings and redemption requests managed through an admin dashboard.',
      'Developed complete admin panel for users, lessons, quizzes, subscriptions, and wallet management with CRUD operations.',
      'Deployed the full application on Vercel with serverless backend and optimized performance.'
    ],
    github: 'https://github.com/', // add repo if you want to show it
    liveLink: 'https://maitreemarathi-frontend.vercel.app/',
    skills: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
      'Bootstrap',
      'Groq SDK (AI)',
      'Instamojo API',
      'Vercel'
    ]
  },

  {
    id: 2,
    title: 'Glamora',
    period: 'Mar 2025 - May 2025',
    description: [
      'Focused on female-oriented products, including clothes, garments, cosmetics, and jewellery, delivering a targeted shopping experience.',
      'Designed and executed features such as a user-friendly interface, secure payment integration, product management, customer reviews, and responsive design for seamless use across devices.',
      'Enhanced user retention by 30% through seamless navigation and user-friendly features.',
      'Developed and integrated RESTful APIs, enhancing data exchanges between front-end and back-end systems, which resulted in a 40% improvement in response times for user transactions on the platform.'
    ],
    github: 'https://github.com/manishsingh0418/Glamora.git',
    liveLink: 'https://theglamora.netlify.app/',
    skills: ['React.js', 'Express.js', 'Node.js', 'MongoDB', 'Tailwind CSS']
  },

  {
    id: 3,
    title: 'HireHorizon',
    period: 'Sep 2024 - Oct 2024',
    description: [
      'Developed a responsive job portal with filters for role, type, location, and experience.',
      'Built interactive UI components and managed state using React JS.',
      'Integrated Firebase for real-time job data management.',
      'Designed job cards with application links and timing via Day.js.',
      'Added interactive search with a "Clear Filters" feature.'
    ],
    github: 'https://github.com/manishsingh0418/HireHorizon.git',
    liveLink: 'https://hire-horizon.vercel.app/',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Firebase']
  },

  {
    id: 4,
    title: 'Travel Weather',
    period: 'Aug 2024 - Aug 2024',
    description: [
      'Developed a React and TypeScript weather application for travelers to check destination weather conditions.',
      'Integrated Open-Meteo API to provide accurate real-time weather data and 7-day forecasts.',
      'Implemented responsive UI with Tailwind CSS and Lucide React icons for optimal user experience.',
      'Built with clean architecture featuring reusable components and comprehensive TypeScript type definitions.',
      'Created an intuitive city search with geolocation support and robust error handling for seamless user interaction.'
    ],
    github: 'https://github.com/manishsingh0418/TravelWeather.git',
    liveLink: 'https://travelweather4.netlify.app/',
    skills: ['TypeScript', 'React.js', 'Tailwind CSS', 'REST APIs']
  },

  {
    id: 5,
    title: 'YesStyle',
    period: 'Jan 2024 - Jan 2024',
    description: [
      'Developed a dynamic and responsive e-commerce platform, enabling users to browse products, add items to their cart, and complete purchases seamlessly.',
      'Implemented a shopping cart system allowing users to manage selected products before proceeding to checkout.',
      'Created a secure checkout and payment page, ensuring a smooth transaction process for users.',
      'Optimized the UI with custom CSS stylesheets for each page, ensuring a visually appealing and user-friendly design.'
    ],
    github: 'https://github.com/manishsingh0418/YesStyle.git',
    liveLink: 'https://manishsingh0418.github.io/YesStyle/',
    skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap']
  }
];

const Projects = () => {
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
    <section id="projects" className="py-20 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Projects</h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project) => (
              <motion.div 
                key={project.id}
                className="card"
                variants={itemVariants}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    <span className="text-sm text-gray-500">{project.period}</span>
                  </div>
                  
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    {project.description.map((point, index) => (
                      <li key={index} className="text-sm">{point}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4 mt-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    >
                      <Github size={18} className="mr-1" />
                      <span className="text-sm">GitHub</span>
                    </a>
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    >
                      <ExternalLink size={18} className="mr-1" />
                      <span className="text-sm">Live Demo</span>
                    </a>
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

export default Projects;