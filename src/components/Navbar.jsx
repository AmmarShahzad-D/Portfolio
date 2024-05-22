import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4 ">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-black text-xl font-bold">
          <Link to="/">MyLogo</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-black hover:text-gray-600">Home</Link>
          <Link to="/about" className="text-black hover:text-gray-600">About</Link>
          <Link to="/projects" className="text-black hover:text-gray-600">Projects</Link>
          <Link to="/contact" className="text-black hover:text-gray-600">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white">
          <Link to="/" className="block text-black py-2 px-4 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block text-black py-2 px-4 hover:bg-gray-100" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/projects" className="block text-black py-2 px-4 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/contact" className="block text-black py-2 px-4 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
