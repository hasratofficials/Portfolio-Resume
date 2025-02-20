import React from "react";

const experiences = [
  { year: "2024", role: "Frontend Developer", company: "TechCorp" },
  { year: "2023", role: "Intern", company: "Bandenia Mortgage Brokers LLC" },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-6 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-semibold">Experience</h2>
      <div className="mt-6 space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">{exp.role} - {exp.company}</h3>
            <p className="text-gray-400">{exp.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
