import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger icons

const Navbar2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", path: "/" },
    { name: "Covenant Tracking", path: "/covenant-tracking" },
    { name: "Charge Summary", path: "/charge-summary" },
    { name: "Request", path: "/request2" },
    { name: "Client Data", path: "/client-data2" },
  ];

  return (
    <nav className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-700 tracking-wide"
        >
          Nextyn
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `text-gray-700 font-medium hover:text-blue-600 transition-all duration-200 ${
                  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 pb-4 space-y-3">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              onClick={() => setMenuOpen(false)} // close menu on click
              className={({ isActive }) =>
                `block text-gray-700 font-medium py-2 hover:text-blue-600 transition-all duration-200 ${
                  isActive ? "text-blue-600 border-l-4 border-blue-600 pl-2" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar2;
