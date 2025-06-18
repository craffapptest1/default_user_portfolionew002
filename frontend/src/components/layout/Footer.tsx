"use client";

import Link from "next/link";
import { FiGithub, FiMail, FiLinkedin, FiDownload, FiMapPin } from "react-icons/fi";
import { FaBehance, FaDribbble } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand & About */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              portfolionew002
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Crafting digital experiences through innovative design and development. 
              Available for freelance projects and full-time opportunities.
            </p>
            <div className="flex items-center text-sm text-gray-400 mb-2">
              <FiMapPin className="h-4 w-4 mr-2" />
              <span>Available for Remote & Local Work</span>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Available for New Projects
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Navigation</h4>
            <nav className="space-y-2">
              <Link
                href="/"
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                About
              </Link>
              <Link
                href="/portfolio"
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                Portfolio
              </Link>
              <Link
                href="/skills"
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                Skills
              </Link>
              <Link
                href="/contact"
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact & Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
            <div className="space-y-2">
              <Link
                href="/resume"
                className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm group"
              >
                <FiDownload className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Link>
              <Link
                href="/blog"
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                Blog
              </Link>
              <Link
                href="/testimonials"
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                Testimonials
              </Link>
              <a
                href="mailto:hello@portfolionew002.com"
                className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm group"
              >
                <FiMail className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Links */}
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform"
                aria-label="GitHub Profile"
              >
                <FiGithub className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 transform"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin className="h-6 w-6" />
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-all duration-300 hover:scale-110 transform"
                aria-label="Behance Portfolio"
              >
                <FaBehance className="h-6 w-6" />
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-all duration-300 hover:scale-110 transform"
                aria-label="Dribbble Profile"
              >
                <FaDribbble className="h-6 w-6" />
              </a>
              <a
                href="mailto:hello@portfolionew002.com"
                className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:scale-110 transform"
                aria-label="Send Email"
              >
                <FiMail className="h-6 w-6" />
              </a>
            </div>

            {/* Copyright & Legal */}
            <div className="flex flex-col md:flex-row items-center text-center md:text-left">
              <p className="text-xs text-gray-400 mb-2 md:mb-0 md:mr-6">
                &copy; {currentYear} portfolionew002. All rights reserved.
              </p>
              <nav className="flex space-x-4 text-xs">
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="mt-8 flex justify-center">
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-50"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;