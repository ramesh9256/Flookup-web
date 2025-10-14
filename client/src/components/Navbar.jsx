import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ import Link
import { color } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // ✅ menu items with route paths
  const menuItems = [
    { name: "About", path: "/" },
    { name: "Cap Table", path: "/captables" },
    { name: "Valuation", path: "/valuation" },
    { name: "Portfolio Summary", path: "/portfoliosummary" },
    { name: "Financials", path: "/financials" },
    { name: "Competitor Analysis", path: "/competitoranalysis" },
    { name: "Compliance", path: "/compliance" },
    { name: "Request", path: "/request" },
    {name : "Client-Data" , path : "/client-data"}
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-red-600 cursor-pointer" style={{ fontFamily: 'cursive' }}>
          Neha Ventures
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="hover:text-blue-600 hover:scale-105 transition-all duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden cursor-pointer text-gray-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu (Animated) */}
      <div
        className={`md:hidden bg-white shadow-md transition-all duration-500 ease-in-out overflow-hidden ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                onClick={() => setOpen(false)} // close menu after click
                className="hover:text-blue-600 transition-all duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
