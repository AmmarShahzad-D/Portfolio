// Navbar.jsx
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ColorModeContext } from './Darkmode.jsx'; // Adjust the path as necessary
import Box from '@mui/material/Box';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (

    <Box
      sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
        p: 3,
      }}
    >
      <nav className={`p-4  rounded-3xl  ${theme.palette.mode === 'dark' ? 'bg-zinc-900' : 'bg-white'}`}>
        <div className="container mx-auto flex items-center justify-between">
          <div className={`${theme.palette.mode === 'dark' ? 'text-white' : 'text-black'} text-xl font-bold`}>
            <Link to="/">PortFolio</Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <IconButton onClick={colorMode.toggleColorMode} style={{ color: theme.palette.text.primary }} className="p-0">
              {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            <Link to="/" className={`${theme.palette.mode === 'dark' ? 'text-white' : 'text-black'} hover:text-gray-600`}>
              Home
            </Link>
            <Link to="/about" className={`${theme.palette.mode === 'dark' ? 'text-white' : 'text-black'} hover:text-gray-600`}>
              About
            </Link>
            <Link to="/projects" className={`${theme.palette.mode === 'dark' ? 'text-white' : 'text-black'} hover:text-gray-600`}>
              Projects
            </Link>
            <Link to="/contact" className={`${theme.palette.mode === 'dark' ? 'text-white' : 'text-black'} hover:text-gray-600`}>
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`${theme.palette.mode === 'dark' ? 'text-white' : 'text-black'} focus:outline-none`}
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
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className={`${theme.palette.mode === 'dark' ? 'bg-gray-800' : 'bg-white'} md:hidden`}>
            <Link
              to="/"
              className={`${theme.palette.mode === 'dark' ? 'text-white' : 'text-black'} block py-2 px-4 hover:bg-gray-100`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${theme.palette.mode === 'dark' ? 'text-white' : 'text-black'} block py-2 px-4 hover:bg-gray-100`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/projects"
              className={`${theme.palette.mode === 'dark' ? 'text-white' : 'text-black'} block py-2 px-4 hover:bg-gray-100`}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={`${theme.palette.mode === 'dark' ? 'text-white' : 'text-black'} block py-2 px-4 hover:bg-gray-100`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>


    </Box>





  );
}

export default Navbar;
