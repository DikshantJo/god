import Link from 'next/link';
import { useState } from 'react';


const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <header className="bg-gray-900 shadow-lg">
      <div className="container mx-auto py-4 px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-white text-2xl font-semibold hover:text-gray-300">
            Your Logo
        </Link>
         {/* Hamburger Menu Icon for Mobile */}
         <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path d="M19 6H5M19 12H5M19 18H5" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Menu */}
        <nav  className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:block md:flex space-x-6 md:space-x-6 mt-4 md:mt-0`}>
          <Link href="/portfolio" className="text-white hover:text-gray-300">
            Portfolio
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu (Hamburger Menu) */}
        <div className="md:hidden">
          {/* Add your mobile menu here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
