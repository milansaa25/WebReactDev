import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => (
  <footer className="bg-sky-100 border-t border-gray-200 px-4 py-8 text-sm">
    <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-8">
      {/* Company Info */}
      <div className="flex flex-col max-w-xs">
        <h4 className="font-semibold mb-4">We were founded in 2013</h4>
        <p className="text-gray-600 mb-2">
          Our mission is to deliver exceptional value to our esteemed clients
          stretched across the length and breadth of the digital world. Equipped
          with industry-leading technologies, we strive to help companies
          realize their full potential with an exceptional range of value-driven
          web and mobile solutions.
        </p>
        <div className="flex items-center mt-8">
          <img
            src="/reactIcon.svg"
            alt="React Logo"
            className="h-10 w-10 mr-3"
          />
          <div>
            <span className="font-semibold">Hire React JS</span>
            <br />
            <span className="text-gray-600">Developer</span>
          </div>
        </div>
      </div>

      {/* Office */}
      <div>
        <h4 className="font-semibold mb-4">Office</h4>
        <p className="mb-4 text-gray-600">
          <div className="flex items-center gap-2">
         <div className="text-blue-500 text-lg"><CiLocationOn /></div> 
          Masbar-7, Pokhara, Nepal
          </div>
        </p>
        <p className="text-gray-600 flex items-center gap-2">
          <div className="text-blue-500 text-xl">< CiLocationOn /></div>
          23 3rd Floor, Block-D, DLF IT Park,
          <br />
          Phase 1, Sector 13, Chandigarh, India
        </p>
      </div>

      {/* Pages */}
      <div>
        <h4 className="font-semibold mb-4 text-1xl">Pages</h4>
        <ul className="flex flex-col gap-4 text-gray-600">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">Hire Developers</li>
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Blog</li>
          <li className="hover:underline cursor-pointer">Contact</li>
        </ul>
      </div>

      {/* Newsletter & Support */}
      <div>
        <h4 className="font-semibold mb-4">Subscribe To Newsletter</h4>
        <form className="flex mb-8 text-base">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-l px-3 py-1 outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-3 rounded-r"
          >
            <FaArrowRightLong />
          </button>
        </form>
        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <p className="text-gray-600 mb-3 flex items-center gap-2">
           <div className="text-xl text-blue-600"><IoCallOutline /></div> 
            <span className="text-base">+1 315 215 2005, +91 0172-4666470</span>
          </p>
          <p className="text-gray-600 flex items-center gap-2">
            <div className="text-2xl text-blue-600"><CgMail /></div>
            <span className="text-base">info.fora.limited@gmail.com</span>
          </p>
        </div>
      </div>
    </div>

    <div className="max-w-6xl mx-auto mt-8 border-t border-gray-200 pt-4 text-center">
      <div className="flex flex-wrap gap-7 justify-center mb-2 text-gray-500">
        <span>Google partner</span>
        <span>designrush</span>
        <span>paypal</span>
        <span>verified</span>
        <span>aws</span>
        <span>partner</span>
        <span>clutchreviews</span>
        <span>seedlog</span>
        <span>best search</span>
        <span>top</span>
        <span>top mobile app</span>
        <span>top design</span>
        <span>tech</span>
        <span>top rated</span>
      </div>

      <span className="text-gray-500 block font-bold text-xs mt-7 border-t pt-4">
        Copyright © 2025 <span className="text-blue-600">FORA</span>. All Rights
        Reserved. Privacy Policy | Sitemap |{" "}
        <span className="text-red-400"> M K S</span>
      </span>
    </div>
  </footer>
);

export default Footer;
