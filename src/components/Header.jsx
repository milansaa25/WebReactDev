import React, { useState, useEffect } from "react";
import { FaReact } from "react-icons/fa";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isScrolled ? "bg-white shadow-md py-3" : "bg-sky-100 py-3"}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8">
        {/* Logo + Text */}
        <div className="flex items-center gap-2">
          <FaReact className="text-blue-500 text-5xl animate-spin-slow" />
          <div>
            <h1 className="text-xl font-bold">WebProDev</h1>
            <p className="text-base text-gray-500">Hire Developer</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-6 text-gray-700 font-medium">
          <a href="#hire" className="hover:active text-blue-500">Hire Developers</a>
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#blog" className="hover:text-blue-500">Blog</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </nav>

        {/* Button */}
        <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition">
          START 7-DAYS TRIAL
        </button>
      </div>
    </header>
  );
};

export default Header;
