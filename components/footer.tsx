import React from "react";
import { FaLinkedinIn, FaFacebookF, FaWhatsapp, FaTiktok } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white px-8 py-12 lg:px-32">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Logo Column */}
        <div>
          <img
            src="images/logo.png"
            alt="Signature Prints Logo"
            className="w-[350px] h-[150px] mb-4"
          />
        </div>

        {/* Products Column */}
        <div>
          <h3 className="font-bold text-lg mb-4">Products</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#cloth-branding"
                className="text-white hover:text-yellow-500 transition"
              >
                Cloth Branding
              </a>
            </li>
            <li>
              <a
                href="#product-branding"
                className="text-white hover:text-yellow-500 transition"
              >
                Product Branding
              </a>
            </li>
            <li>
              <a
                href="#graphics-design"
                className="text-white hover:text-yellow-500 transition"
              >
                Graphics Designs
              </a>
            </li>
            <li>
              <a
                href="#cloth-supply"
                className="text-white hover:text-yellow-500 transition"
              >
                Cloth Delivery
              </a>
            </li>
          </ul>
        </div>

        {/* Socials Column */}
        <div>
          <h3 className="font-bold text-lg mb-4">Socials</h3>
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-500 transform transition duration-300 hover:scale-105"
            >
              <FaLinkedinIn className="text-2xl" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-500 transform transition duration-300 hover:scale-105"
            >
              <FaFacebookF className="text-2xl" />
            </a>
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-500 transform transition duration-300 hover:scale-105"
            >
              <FaWhatsapp className="text-2xl" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-500 transform transition duration-300 hover:scale-105"
            >
              <FaTiktok className="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t border-gray-700 pt-4">
        <p className="text-center text-gray-400">All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
