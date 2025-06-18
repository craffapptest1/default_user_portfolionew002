"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="text-2xl text-yellow-600 transition-all duration-300"
            >
              portfolionew002
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/portfolio"
              className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group"
            >
              Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/skills"
              className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group"
            >
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            {/* CTA Button */}
            <Link
              href="/resume"
              className="flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <FiDownload className="mr-2" />
              Resume
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-purple-600 p-2 rounded-md transition-colors duration-300"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-96 opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        } overflow-hidden bg-white border-t border-gray-200`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          <Link
            href="/"
            onClick={closeMenu}
            className="block text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={closeMenu}
            className="block text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
          >
            About
          </Link>
          <Link
            href="/portfolio"
            onClick={closeMenu}
            className="block text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
          >
            Portfolio
          </Link>
          <Link
            href="/skills"
            onClick={closeMenu}
            className="block text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
          >
            Skills
          </Link>
          <Link
            href="/contact"
            onClick={closeMenu}
            className="block text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
          >
            Contact
          </Link>
          <Link
            href="/resume"
            onClick={closeMenu}
            className="flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 px-4 py-2 rounded-full text-base font-medium transition-all duration-300 mt-4 w-fit"
          >
            <FiDownload className="mr-2" />
            Resume
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
