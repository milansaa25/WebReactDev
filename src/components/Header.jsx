import React from 'react';
import { SiReact } from 'react-icons/si';

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and Brand Name */}
        <div className="flex items-center">
          <SiReact className="text-4xl text-blue-500 mr-2 animate-spin-slow" />
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">WebProDev</h1>
            <p className="text-sm text-gray-500">Hire Developer</p>
          </div>
        </div>

        {/* NavBar */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className=" hover:active text-blue-500 transition-colors duration-300 font-semibold">Hire Developers</a>
          <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-300 font-semibold">About</a>
          <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-300 font-semibold">Blog</a>
          <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-300 font-semibold">Contact</a>
          <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
            START 7-DAYS TRAIL
          </button>
        </nav>

        {/* Hamburger Menu for Mobile (optional, but good practice) */}
        {/* You'd typically add a hamburger menu here for smaller screens */}
        <button className="md:hidden text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;