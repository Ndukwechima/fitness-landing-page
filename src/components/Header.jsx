import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#E53935] cursor-pointer">
          Ryan<span className="text-gray-800">Fitness</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="text-[#E53935]  hover:text-gray-700 font-medium transition"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-[#E53935] font-medium transition"
          >
            About
          </a>
          <a
            href="#program"
            className="text-gray-700 hover:text-[#E53935] font-medium transition"
          >
            Program
          </a>
          <a
            href="#testimonials"
            className="text-gray-700 hover:text-[#E53935] font-medium transition"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-[#E53935] font-medium transition"
          >
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/2348106706460?text=Hi%20Coach!%20I%27m%20interested%20in%20booking%20a%20free%20fitness%20session."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E53935] hover:bg-red-700 text-white px-5 py-2 rounded-full font-semibold transition"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-2xl text-gray-800 cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-4 px-6 py-4">
            <a href="#home" className="text-[#E53935] font-medium transition">
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-[#E53935] font-medium transition"
            >
              About
            </a>
            <a
              href="#program"
              className="text-gray-700 hover:text-[#E53935] font-medium transition"
            >
              Program
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-[#E53935] font-medium transition"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-[#E53935] font-medium transition"
            >
              Contact
            </a>
            <a
              href="https://wa.me/2348106706460?text=Hi%20Coach!%20I%27m%20interested%20in%20booking%20a%20free%20fitness%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E53935] hover:bg-red-700 text-white text-center py-2
               rounded-full font-semibold transition duration-300 ease-in-out"
            >
              Book a Call
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
