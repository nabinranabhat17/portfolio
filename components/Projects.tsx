"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiExternalLink, FiGithub, FiCode } from "react-icons/fi";
import { FaBrain } from "react-icons/fa"; // Using Font Awesome brain icon instead

// Sample project data
const projectsData = [
  {
    id: 1,
    title: "Instagram Clone",
    category: "Web Development",
    description:
      "A full-featured Instagram clone with user authentication, image uploads, likes, comments, and user profiles.",
    image: "/project1.jpg",
    tags: ["Next.js", "Node.js", "MongoDB", "JWT", "Mongoose"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/",
  },
  {
    id: 2,
    title: "Task Management App",
    category: "Web App",
    description:
      "A task management application with drag-and-drop functionality and team collaboration features.",
    image: "/project2.jpg",
    tags: ["React", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/",
  },
  {
    id: 3,
    title: "Personal Finance Dashboard",
    category: "Web App",
    description:
      "A dashboard for tracking personal finances with visualizations and budget planning features.",
    image: "/project3.jpg",
    tags: ["Next.js", "Chart.js", "Supabase"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/",
  },
  {
    id: 4,
    title: "Restaurant Website",
    category: "Web Design",
    description:
      "A modern website for a restaurant featuring online reservations and menu management.",
    image: "/project4.jpg",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/",
  },
  {
    id: 5,
    title: "Weather Application",
    category: "Web App",
    description:
      "A weather application that provides current and forecast weather data for locations worldwide.",
    image: "/project5.jpg",
    tags: ["React", "Weather API", "Geolocation"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/",
  },
  {
    id: 6,
    title: "Fitness Tracker",
    category: "Mobile App",
    description:
      "A mobile application for tracking workouts, nutrition, and fitness progress.",
    image: "/project6.jpg",
    tags: ["React Native", "Redux", "Firebase"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/",
  },
];

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

// Filter categories
const categories = [
  "All",
  "Web Development",
  "Web App",
  "Web Design",
  "Mobile App",
];

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="card overflow-hidden group"
    >
      <div className="relative overflow-hidden rounded-lg h-48 mb-4">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-dark p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
              aria-label="View Github Repository"
            >
              <FiGithub />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-dark p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
              aria-label="View Live Site"
            >
              <FiExternalLink />
            </a>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const projectVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const Projects = () => {
  const aiProjects = [
    {
      title: "BERT-NER Document Extraction System",
      description:
        "Developed a system using BERT for Named Entity Recognition to automatically extract information from citizenship documents and auto-fill forms, streamlining document processing workflows as part of Minor Project in sixth semester.",
      tech: ["BERT", "NLP", "Python", "TensorFlow"],
      link: "#",
      github: "https://github.com/oceangiri23/Smart_form_filler", // Added GitHub link
    },
    {
      title: "Machine Learning Implementations",
      description:
        'Implemented various machine learning algorithms from the "Hands-On Machine Learning" book using Jupyter Notebooks, covering regression, classification, clustering, and more.',
      tech: ["Scikit-Learn", "Jupyter", "NumPy", "Pandas"],
      link: "#",
      github: "https://github.com/nabinranabhat17/Hands_on_ML_Notebooks", // Added GitHub link
    },
  ];

  const webProjects = [
    {
      title: "Instagram Clone",
      description:
        "A full-featured Instagram clone built with Next.js and Node.js backend, featuring user authentication with JWT, image uploads, likes, comments, and user profiles.",
      tech: ["Next.js", "Node.js", "MongoDB", "JWT", "Mongoose"],
      link: "#",
      github: "https://github.com/nabinranabhat17/Insta-Clone", // Added GitHub link
    },
    {
      title: "Modern Portfolio Website",
      description:
        "A responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion, featuring dark mode and smooth animations.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      link: "#",
      github: "https://github.com/", // Added GitHub link
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Projects
        </h2>

        {/* AI/ML Projects */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <FaBrain size={24} className="mr-2 text-primary" />
            <h3 className="text-2xl font-bold">AI/ML Projects</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiProjects.map((project, i) => (
              <motion.div
                key={project.title}
                custom={i}
                variants={projectVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="card"
              >
                <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  {/* <a
                    href={project.link}
                    className="text-primary hover:underline flex items-center"
                  >
                    <FiExternalLink className="mr-1" /> View Project
                  </a> */}
                  <a
                    href={project.github}
                    className="text-primary hover:underline flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub className="mr-1" /> GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Web Development Projects */}
        <div>
          <div className="flex items-center mb-8">
            <FiCode size={24} className="mr-2 text-primary" />
            <h3 className="text-2xl font-bold">Web Development Projects</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webProjects.map((project, i) => (
              <motion.div
                key={project.title}
                custom={i}
                variants={projectVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="card"
              >
                <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  {/* <a
                    href={project.link}
                    className="text-primary hover:underline flex items-center"
                  >
                    <FiExternalLink className="mr-1" /> View Project
                  </a> */}
                  <a
                    href={project.github}
                    className="text-primary hover:underline flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub className="mr-1" /> GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
