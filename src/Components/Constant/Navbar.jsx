import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev); // {{ edit_1 }} - Use functional update
  };

  return (
    <>
      <nav className="bg-green-600 bg-opacity-90 p-9 fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center md:px-16">
          {/* Logo */}
          <div className="text-white text-3xl font-bold">
            Eco<span className="text-blue-500">Cycle</span>
          </div>

          {/* Hamburger for mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleDropdown}
              aria-expanded={isOpen} // {{ edit_2 }} - Add aria-expanded
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Links */}
          <ul className={`md:flex space-x-6 hidden md:block`}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-2 py-1 text-2xl border  ${
                    isActive
                      ? "text-blue-600 border-blue-600"
                      : "text-white border-transparent hover:text-blue-600"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/OurServices"
                className={({ isActive }) =>
                  `px-2 py-1 text-2xl border ${
                    isActive
                      ? "text-blue-600 border-blue-600"
                      : "text-white border-transparent hover:text-blue-600"
                  }`
                }
              >
                Our Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ContactUs"
                className={({ isActive }) =>
                  `px-2 py-1 text-2xl border ${
                    isActive
                      ? "text-blue-600 border-blue-600"
                      : "text-white border-transparent hover:text-blue-600"
                  }`
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>

          {/* Dropdown Menu for mobile */}
          {isOpen && (
            <ul className="md:hidden flex flex-col space-y-4 mt-4">
              <NavLinkItem to="/" onClick={toggleDropdown}>Home</NavLinkItem>
              <NavLinkItem to="/OurServices" onClick={toggleDropdown}>Our Services</NavLinkItem>
              <NavLinkItem to="/ContactUs" onClick={toggleDropdown}>Contact Us</NavLinkItem>
            </ul>
          )}
        </div>
      </nav>
      <div className="mt-24">
        {" "}
        {/* Adjust margin as needed */}
        {/* Content below the navbar */}
      </div>
    </>
  );
};

// New component for NavLink
const NavLinkItem = ({ to, onClick, children }) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-2 py-1 text-lg border ${
          isActive
            ? "text-blue-600 border-blue-600"
            : "text-white border-transparent hover:text-blue-600"
        }`
      }
      onClick={onClick}
    >
      {children}
    </NavLink>
  </li>
);

export default Navbar;
