"use client";

import Link from "next/link";
import { FiGithub, FiMail, FiLinkedin, FiDownload, FiChevronUp } from "react-icons/fi";
import { FaTwitter, FaDribbble } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">portfolio11011</h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              A creative developer passionate about building exceptional digital experiences. 
              Let's create something amazing together.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <span className="sr-only">GitHub</span>
                <FiGithub className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
              >
                <span className="sr-only">LinkedIn</span>
                <FiLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
              >
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-5 w-5" />
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors duration-300 transform hover:scale-110"
              >
                <span className="sr-only">Dribbble</span>
                <FaDribbble className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-200">Quick Links</h4>
            <nav className="space-y-2">
              <Link
                href="/"
                className="block text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                About
              </Link>
              <Link
                href="/portfolio"
                className="block text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                Portfolio
              </Link>
              <Link
                href="/skills"
                className="block text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                Skills
              </Link>
              <Link
                href="/blog"
                className="block text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                Blog
              </Link>
            </nav>
          </div>

          {/* Contact & Resources */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-200">Get In Touch</h4>
            <div className="space-y-2">
              <a
                href="mailto:hello@portfolio11011.com"
                className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FiMail className="h-4 w-4" />
                <span>hello@portfolio11011.com</span>
              </a>
              <a
                href="/resume.pdf"
                download
                className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FiDownload className="h-4 w-4" />
                <span>Download Resume</span>
              </a>
              <Link
                href="/contact"
                className="block text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                Contact Form
              </Link>
              <Link
                href="/testimonials"
                className="block text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                Testimonials
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} portfolio11011. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 text-sm text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-105"
              aria-label="Back to top"
            >
              <FiChevronUp className="h-4 w-4" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center">
            <h4 className="text-sm font-semibold mb-2 text-gray-200">Stay Updated</h4>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to get notified about new projects and blog posts.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-md sm:rounded-r-none rounded-r-md bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-r-md sm:rounded-l-none rounded-l-md transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;