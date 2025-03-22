"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowDown } from "react-icons/fi";

const TypewriterText = () => {
  const fullText = "Nabin Ranabhat";
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isTyping && !isDeleting) {
        // Typing effect
        setDisplayText(fullText.substring(0, displayText.length + 1));

        // If we've typed the full text
        if (displayText === fullText) {
          setIsDeleting(true);
          // Pause at the end before starting to delete
          setTypingSpeed(1000);
        } else {
          setTypingSpeed(150);
        }
      } else if (isDeleting) {
        // Deleting effect
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(75); // Faster when deleting

        // If we've deleted everything
        if (displayText === "") {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          // Pause before starting to type again
          setTypingSpeed(500);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isTyping, isDeleting, fullText, loopNum, typingSpeed]);

  return (
    <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text h-[4rem] md:h-[5rem]">
      {displayText}
      <span className="opacity-100 animate-pulse">|</span>
    </h1>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <TypewriterText />
        <h2 className="text-xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
          ML Enthusiast & Web Developer
        </h2>
        <p className="subheading">
          3rd year Computer Engineering student at Pulchowk Campus with a
          background in Web Development and a growing focus on Artificial
          Intelligence and Machine Learning.
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
