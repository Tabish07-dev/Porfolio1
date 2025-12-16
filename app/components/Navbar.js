"use client";

import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

        
          <div className="text-xl font-bold tracking-widest text-gray-900 cursor-pointer">
            Developer Tabish
          </div>

          
          <ul className="hidden md:flex space-x-10 text-sm font-semibold text-gray-600">

            <li onClick={() => window.location.href = "#about"} className="group relative cursor-pointer transition-all duration-300 hover:text-red-500">
              ABOUT ME
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li onClick={() => window.location.href = "#experience"} className="group relative cursor-pointer transition-all duration-300 hover:text-red-500">
              EXPERIENCE
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </li>

           

            <li onClick={() => window.location.href = "#contact"} className="group relative cursor-pointer transition-all duration-300 hover:text-red-500">
              CONTACTS
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </li>

          </ul>

         
          <div className="md:hidden">
            <button className="text-gray-700 text-xl focus:outline-none">
              ☰
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
