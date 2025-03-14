import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 bg-black text-white z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-2">
          <img src="/images/logo.png" alt="Logo" className="w-[300px] h-[100px] mb-4" />
          {/* <span className="font-bold text-lg">Signature Prints</span> */}
        </div>

        {/* Navigation Links (Hidden on small screens) */}
        <div className="hidden md:flex items-center space-x-4">
          <div
            onClick={() => scrollToSection("home")}
            className="hover:underline hover:text-yellow-500 font-bold transition-all duration-200 hover:scale-105 cursor-pointer"
          >
            Home
          </div>
          <div
            onClick={() => scrollToSection("aboutus")}
            className="hover:underline hover:text-yellow-500 font-bold transition-all duration-200 hover:scale-105 cursor-pointer"
          >
            About Us
          </div>
          <div
            onClick={() => scrollToSection("services")}
            className="hover:underline hover:text-yellow-500 font-bold transition-all duration-200 hover:scale-105 cursor-pointer"
          >
            Services and Latest Works
          </div>
          <div
            onClick={() => scrollToSection("contactus")}
            className="hover:underline hover:text-yellow-500 font-bold transition-all duration-200 hover:scale-105 cursor-pointer"
          >
            Contact Us
          </div>
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          <FiMenu size={24} />
        </button>
      </div>

      {/* Side Menu (Mobile) */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-black shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <FiX size={24} />
          </button>
        </div>
        <div className="flex flex-col items-start px-4 space-y-4">
          <div
            onClick={() => scrollToSection("home")}
            className="hover:underline font-bold hover:text-yellow-500 transition-all duration-200 hover:scale-105 cursor-pointer"
          >
            Home
          </div>
          <div
            onClick={() => scrollToSection("aboutus")}
            className="hover:underline font-bold hover:text-yellow-500 transition-all duration-200 hover:scale-105 cursor-pointer"
          >
            About Us
          </div>
          <div
            onClick={() => scrollToSection("services")}
            className="hover:underline font-bold hover:text-yellow-500 transition-all duration-200 hover:scale-105 cursor-pointer"
          >
            Services and Latest Works
          </div>
          <div
            onClick={() => scrollToSection("contactus")}
            className="hover:underline font-bold hover:text-yellow-500 transition-all duration-200 hover:scale-105 cursor-pointer"
          >
            Contact Us
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
