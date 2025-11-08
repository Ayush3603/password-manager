import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-slate-800 via-gray-800 to-slate-800 text-white shadow-2xl border-b border-gray-700">
      {/* Navigation bar - EDIT: Change bg-gradient-to-r colors to modify navbar background */}
      {/* Navbar container - EDIT: Change px-5 py-5 to adjust padding, h-16 for height */}
      <div className="mycontainer flex justify-between px-8 py-4 h-16 items-center">
        {/* Logo section - EDIT: Change text-2xl to modify logo size */}
        <div className="logo font-bold text-2xl group">
          {/* Logo brackets - EDIT: Change text-blue-400 to modify bracket colors */}
          <span className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">&lt;</span>
          {/* App name - EDIT: Change "Pass" to modify app name */}
          <span className="group-hover:scale-105 transition-transform duration-300 inline-block">Pass</span>
          <span className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">OP/&gt;</span>
        </div>

        {/* Navigation menu - EDIT: Customize navigation links */}
        <ul>
          <li className="flex gap-8">
            {/* Home link - EDIT: Change hover:text-blue-400 to modify hover color */}
            <Link 
              className="hover:text-blue-400 transition-colors duration-300 font-medium px-3 py-2 rounded-lg hover:bg-white/10" 
              to="/"
            >
              🏠 Home
            </Link>
            {/* About link - EDIT: Change hover:text-purple-400 to modify hover color */}
            <Link 
              className="hover:text-purple-400 transition-colors duration-300 font-medium px-3 py-2 rounded-lg hover:bg-white/10" 
              to="/about"
            >
              📖 About
            </Link>
            {/* Contact link - EDIT: Change hover:text-pink-400 to modify hover color */}
            <Link 
              className="hover:text-pink-400 transition-colors duration-300 font-medium px-3 py-2 rounded-lg hover:bg-white/10" 
              to="/contact"
            >
              📧 Contact
            </Link>
            {/* GitHub link - EDIT: Change href to modify GitHub profile link */}
            <a
              className="hover:text-green-400 transition-colors duration-300 font-medium px-3 py-2 rounded-lg hover:bg-white/10 flex items-center gap-2"
              href="https://github.com/shatrughantwt/password-manager"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github Profile"
            >
              <span>⭐ Github</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;