import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-gray-300 py-12 px-6 md:px-8">
      <div className="max-w-[1500px] mx-auto grid md:grid-cols-3 gap-10">
        {/* Brand + Message */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3 tracking-wide">
            <span className="text-[#E53935]">Ryan</span> Fitness
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Transform your body. Empower your mind. <br />
            Build a stronger, healthier you.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#home" className="hover:text-red-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-red-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#program" className="hover:text-red-400 transition">
                Program
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-red-400 transition">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-red-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social + Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-red-400 transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-red-400 transition">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="hover:text-red-400 transition">
              <FaTwitter size={20} />
            </a>
          </div>
          <p className="text-sm text-gray-400">Email: hello@arubyfitness.com</p>
          <p className="text-sm text-gray-400">Phone: +234 801 234 5678</p>
        </div>
      </div>

      {/* Divider + Copyright */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Ryan Fitness. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

