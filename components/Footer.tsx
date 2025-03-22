import React from "react";
import Link from "next/link";
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="#home" className="text-2xl font-bold text-primary">
              Portfolio.
            </Link>
            <p className="mt-2 text-gray-400">
              Creating digital experiences that matter.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/nabinranabhat17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            {/* <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <FiTwitter size={20} />
            </a> */}
            <a
              href="https://www.linkedin.com/in/nabin-ranabhat-871397157/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="mailto:nranabhat17@gmail.com"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} - All Rights Reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-primary mr-4">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
