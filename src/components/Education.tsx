import React from "react";

interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  grade?: string;
  skills?: string[];
}

const educationData: EducationItem[] = [
  {
    institution: "Vellore Institute of Technology",
    degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
    duration: "Aug 2021 - May 2025",
    grade: "8.34 CGPA",
    skills: [
      "C++",
      "Object-Oriented Programming (OOP)",
      "C (Programming Language)",
      "Data Structures",
      "Software Development",
      "Python (Programming Language)",
      "Database Management Systems (DBMS)",
      "Computer Networks",
      "Operating Systems",
    ],
  },
  {
    institution: "RRS College Mokama,Patna, Bihar",
    degree: "Higher Secondary School, Science",
    duration: "2019 - 2021",
  },
  {
    institution: "GD.DAV Public School,Deoghar, Jharkhand",
    degree: "Secondary School",
    duration: "Apr 2015 - Apr 2019",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16 bg-white text-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-10 text-center text-blue-600">
          Education
        </h2>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md border border-gray-200"
            >
              <h3 className="text-xl font-semibold mb-1">{edu.institution}</h3>
              <p className="text-gray-700 mb-1">{edu.degree}</p>
              <p className="text-gray-500 mb-1">{edu.duration}</p>
              {edu.grade && <p className="text-gray-500 mb-1">Grade: {edu.grade}</p>}
              {edu.skills && (
                <div className="mt-3">
                  <p className="text-sm font-medium text-gray-700 mb-1">Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
