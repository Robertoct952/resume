"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-md w-full fixed top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left Side: Profile Image & Resume Text */}
        <Link
          href="/"
          className="flex items-center space-x-2 hover:text-yellow-500 transition"
        >
          <Image
            src="/images/beto.jpeg"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <span className="text-xl font-semibold">Roberto Torres</span>
        </Link>

        {/* Right Side: Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="#about" className="hover:text-yellow-500 transition">
            About
          </Link>
          <Link href="#projects" className="hover:text-yellow-500 transition">
            Projects
          </Link>

          {/* Contact Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="hover:text-yellow-500 transition flex items-center space-x-1"
            >
              <span>Contact</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-60 bg-black shadow-lg rounded-lg p-2">
                <a
                  href="mailto:Robertoct952@gmail.com"
                  className="block px-4 py-2 hover:bg-yellow-500"
                >
                  Robertoct952@gmail.com
                </a>
                <a
                  href="/New Resume.docx"
                  target="_blank"
                  className="block px-4 py-2 hover:bg-yellow-500"
                >
                  Download Resume
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white w-full shadow-md absolute top-full left-0">
          <Link
            href="#skills"
            className="block px-6 py-3 border-b"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="block px-6 py-3 border-b"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#about"
            className="block px-6 py-3 border-b"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="block w-full text-left px-6 py-3 border-b"
          >
            Contact
          </button>
          {dropdownOpen && (
            <div className="bg-gray-100 p-3">
              <a
                href="mailto:your.email@example.com"
                className="block px-6 py-2 hover:bg-gray-200"
              >
                Email
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                className="block px-6 py-2 hover:bg-gray-200"
              >
                Download Resume
              </a>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
