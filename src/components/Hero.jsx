import React from 'react';
import { FaGoogle, FaStar, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="bg-gray-50 py-20 mt-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section - Hero Content */}
        <div className="space-y-6">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full inline-flex items-center animate-pulse-slow">
            <FaStar className="w-3 h-3 mr-1 text-yellow-400" />
            Top 2% Vetted Laravel Experts.
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Hire Dedicated <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">React JS</span>
            <br />
            Developers Through <br />
            <span className="animate-fade-in-down">WPD</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Transform your web initiatives with elite, security-cleared engineers delivering bulletproof, scalable, and high-performance web solutions tailored to your business needs.
          </p>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 flex items-center">
              START 7-DAYS TRAIL <FaArrowRight className="ml-2" />
            </button>
            <a href="tel:+13152152005" className="text-gray-700 font-semibold flex items-center">
              <span className="text-xl border-2 border-blue-600 border-solid p-2 rounded-md">+1 315 215 2005</span>
            </a>
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <FaGoogle className="text-4xl" />
            <div className="flex text-yellow-400">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className="text-yellow-200" />
            </div>
            <p className="text-gray-600">500+ Google Reviews</p>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
          <h2 className="text-2xl font-bold mb-2">Get a Custom Quote</h2>
          <p className="text-gray-600 mb-6">
            Please complete the requested fields and we'll be in touch within one business day to discuss options and pricing.
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name *</label>
              <input type="text" id="name" placeholder="Enter your full name" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
              <input type="email" id="email" placeholder="Enter your email address" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number *</label>
              <input type="tel" id="phone" placeholder="Enter your phone number" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message *</label>
              <textarea id="message" rows="4" placeholder="Tell us about your project requirements..." className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 flex items-center justify-center">
              Submit Request <FaArrowRight className="ml-2" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;