import React from 'react';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Manish Kumar</h3>
            <p className="text-gray-400 mb-4">
              Fullstack Developer specializing in creating responsive and user-friendly web applications.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/manishsingh0418" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/manishsingh0418" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:manishkumar80819@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="hero"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  About
                </Link>
              </li>
               <li>
                <Link
                  to="education"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Project Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://theglamora.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Glamora
                </a>
              </li>
              <li>
                <a 
                  href="https://hire-horizon.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  HireHorizon
                </a>
              </li>
              <li>
                <a 
                  href="https://travelweather4.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Travel Weather
                </a>
              </li>
              <li>
                <a 
                  href="https://manishsingh0418.github.io/YesStyle/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  YesStyle
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Manish Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;