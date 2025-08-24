import React from "react";
import { FaPhoneAlt, FaLongArrowAltRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-4">
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
            Top 3% Vetted Laravel Experts
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hire Dedicated{" "}
            <span className="text-blue-600">React JS Developers</span> Through
            WPD
          </h1>

          <p className="text-gray-600">
            Transform your web initiatives with elite, security-cleared
            engineers delivering bulletproof, scalable, and high-performance web
            solutions tailored to your business needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition">
              START 7-DAYS TRIAL
            </button>
            <div className="flex items-center gap-1 text-gray-700 px-1 py-1 border-1 border-solid rounded-lg outline outline-offset-1">
              <FaPhoneAlt className="text-blue-600" />
              <span className="font-semibold">+1 315 215 2005</span>
            </div>
          </div>

          {/* Reviews */}
          <div className="flex items-center gap-3 text-gray-600 mb-4">
            <img
              src="src/assets/image/google-2.svg"
              alt="Google"
              className="h-6"
            />
            <span className="text-black font-semibold py-3">4.8</span>
            <span className="font-semibold text-yellow-500"> ★★★★★</span>
            <span className="font-semibold">500+ Google Reviews</span>
          </div>
        </div>

        {/* Form  */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-md text-center max-w-md mx-auto">
          <h3 className="text-xl font-semibold mb-2">Get a Custom Quote</h3>
          <p className="text-gray-600 mb-3 text-sm">
            Please complete the requested fields and we'll be in touch within
            one business day.
          </p>

          <form className="space-y-6 text-left text-sm">
            {/* Name */}
            <div>
              <h1 className="text-sm font-semibold mb-1">Name</h1>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <h1 className="text-sm font-semibold mb-1">Email</h1>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone */}
            <div>
              <h1 className="text-sm font-semibold mb-1">Phone Number</h1>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <h1 className="text-sm font-semibold mb-1">Message</h1>
              <textarea
                placeholder="Tell us about your project requirements..."
                className="w-full border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
              />
            </div>

            {/* Button */}
            <button className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold shadow hover:bg-blue-700 transition flex items-center justify-center gap-2 text-sm">
              Submit Request <FaLongArrowAltRight />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
