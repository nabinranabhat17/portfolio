"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import Image from "next/image";
import { FaDesktop } from "react-icons/fa";

// import image from desktop
import photo from "../public/photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative flex justify-end pr-2" // Changed to justify-end with padding-right
          >
            {/* Larger vertical rectangle with rounded borders */}
            <div className="w-72 h-[450px] bg-gray-200 dark:bg-gray-700 overflow-hidden relative rounded-2xl">
              {/* Container with border */}
              <div className="absolute inset-0 overflow-hidden border-4 border-blue-500 rounded-2xl">
                <Image
                  src={photo}
                  alt="Nabin Ranabhat"
                  layout="fill"
                  objectFit="cover"
                  className="object-center"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="pl-2" // Added padding-left
          >
            <h3 className="text-2xl font-bold mb-4">Nabin Ranabhat</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm a 3rd year Computer Engineering student at Pulchowk Campus
              passionate about applying technology to solve real-world problems.
              While my background is in web development and backend systems,
              I've recently shifted my focus to Artificial Intelligence and
              Machine Learning.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I enjoy working on projects that challenge me to expand my skills
              and knowledge in cutting-edge fields. My recent work with BERT
              models for NER tasks has reinforced my interest in applying ML
              techniques to practical applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Contact Me
              </a>
              <a
                href="/resume.pdf" // Link to the resume file in the public directory
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
                download // Adds the download attribute to prompt download
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
