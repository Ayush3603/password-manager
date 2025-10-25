import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <div className="mycontainer flex justify-between px-5 py-5 h-14 items-center">
        <div className="logo font-bold text-2xl">
          <span className="text-green-500">&lt;</span>
          <span>Pass</span>
          <span className="text-green-500">OP/&gt;</span>
        </div>
        <ul>
          <li className="flex gap-5">
            <Link className="hover:text-green-500" to="/">Home</Link>
            <Link className="hover:text-green-500" to="/about">About</Link>
            <Link className="hover:text-green-500" to="/contact">Contact</Link>
            <a
              className="hover:text-green-500"
              href="https://github.com/shatrughantwt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github Profile"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
