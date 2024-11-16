'use client';

import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink"; 

const navLinks = [
  { title: "About", path: "/about" },
  { title: "Projects", path: "/project" },
  { title: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href="/" className="text-2xl md:text-5xl text-emerald-200 font-mono">
          My Portfolio
        </Link>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl"
          aria-label="Toggle Menu"
        >
          <span className="block w-6 h-0.5 bg-white mb-2"></span>
          <span className="block w-6 h-0.5 bg-white mb-2"></span>
          <span className="block w-6 h-0.5 bg-white mb-2"></span>
        </button>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } menu md:flex md:w-auto flex-col md:flex-row p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0`}
          id="navbar"
        >
          <ul className="list-none flex flex-col md:flex-row md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
