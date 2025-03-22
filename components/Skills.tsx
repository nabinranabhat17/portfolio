"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiDatabase } from "react-icons/fi";
import { FaBrain } from "react-icons/fa"; // Using Font Awesome brain icon instead

const skillCategories = [
  {
    name: "AI/ML",
    icon: <FaBrain size={24} />, // Updated to use FaBrain
    skills: [
      "Machine Learning algorithms",
      "Natural Language Processing (NLP)",
      "BERT and transformer models",
      "Python for Data Science",
      "Jupyter Notebooks",
      "TensorFlow/PyTorch",
    ],
  },
  {
    name: "Web Development",
    icon: <FiCode size={24} />,
    skills: [
      "HTML, CSS, JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Responsive Design",
      "RESTful API design",
    ],
  },
  {
    name: "Backend",
    icon: <FiDatabase size={24} />,
    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "MySQL",
      "API Development",
      "Server Deployment",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="card"
            >
              <div className="flex items-center mb-4 text-primary">
                {category.icon}
                <h3 className="text-xl font-bold ml-2">{category.name}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
