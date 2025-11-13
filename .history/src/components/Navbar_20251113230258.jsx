import React, { use, useEffect, useState, } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
const Navbar = () => {
  const { User,  signOutUser } = use(AuthContext)

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? 'dark' : 'light');
  };


  const handleSignOut = () => {
    signOutUser()
      .then(()=>{
        Swal.fire({
        icon: "success",
        title: "Logged Out!",
        text: "You have successfully logged out.",
        timer: 1500,
        showConfirmButton: false,
        timerProgressBar: true,
      });
      })
      .then()
  }
  const links = <>

    <NavLink className='mr-3 hover:text-pink-400 ' to='/'><li>Home</li></NavLink>
    <NavLink className='mr-3 hover:text-pink-400' to='/exploreartworks'><li>Explore Artworks</li></NavLink>

    {
      User && <>
        <NavLink className='mr-3   hover:text-pink-400' to='/addart'><li>Add Artwork</li></NavLink>
        <NavLink className='mr-3  hover:text-pink-400' to='/gallery'><li>My Gallery</li></NavLink>
        <NavLink className='mr-3 hover:text-pink-400' to='/favorites'><li>My Favorites</li></NavLink>

      </>
    }

  </>
  return (
    import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";

const Navbar3D = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const handleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const links = ["Home", "Explore", "Create", "Gallery", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 70 }}
      className="relative z-50 backdrop-blur-md bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 shadow-lg border-b border-white/10"
    >
      {/* Floating glow */}
      <motion.div
        className="absolute inset-0 blur-3xl opacity-40"
        animate={{
          background: [
            "radial-gradient(circle at 10% 20%, rgba(255,0,150,0.4), transparent 60%)",
            "radial-gradient(circle at 90% 80%, rgba(0,255,255,0.4), transparent 60%)",
            "radial-gradient(circle at 40% 50%, rgba(255,255,0,0.3), transparent 60%)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 flex justify-between items-center py-4 relative">
        {/* Left side - Logo */}
        <motion.div
          whileHover={{ scale: 1.1, rotateY: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-3xl font-extrabold text-white tracking-wide cursor-pointer drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
        >
          Artify<span className="text-yellow-300">3D</span>
        </motion.div>

        {/* Center Links (Desktop) */}
        <ul className="hidden lg:flex space-x-8 text-lg font-medium">
          {links.map((link, idx) => (
            <motion.li
              key={idx}
              whileHover={{
                scale: 1.2,
                rotateY: 10,
                textShadow: "0px 0px 8px rgba(255,255,255,0.8)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer hover:text-yellow-300"
            >
              {link}
            </motion.li>
          ))}
        </ul>

        {/* Right - Theme Toggle + Profile */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <motion.button
            whileTap={{ scale: 0.9, rotate: 15 }}
            className={`w-14 h-7 rounded-full relative transition-all duration-500 ${
              theme === "dark" ? "bg-gray-900" : "bg-gray-200"
            }`}
            onClick={handleTheme}
          >
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`absolute top-1 left-1 w-5 h-5 rounded-full ${
                theme === "dark"
                  ? "translate-x-7 bg-yellow-400 shadow-[0_0_10px_rgba(255,255,0,0.6)]"
                  : "bg-indigo-600 shadow-[0_0_10px_rgba(99,102,241,0.6)]"
              }`}
            />
          </motion.button>

          {/* Profile Icon */}
          <motion.div
            whileHover={{ scale: 1.3, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="cursor-pointer text-2xl text-white hover:text-yellow-300"
          >
            <FaUserCircle />
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="lg:hidden text-2xl text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden flex flex-col items-center space-y-4 pb-6 bg-indigo-900/70 backdrop-blur-md"
        >
          {links.map((link, idx) => (
            <motion.li
              key={idx}
              whileHover={{
                scale: 1.1,
                rotateY: 15,
                textShadow: "0 0 8px rgba(255,255,255,0.8)",
              }}
              className="text-white font-semibold cursor-pointer hover:text-yellow-300"
            >
              {link}
            </motion.li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  


  {User ? (
    <div className="relative group">

      <img
        src={User.photoURL || "https://i.ibb.co/3rYVZ7H/default-user.png"}
        alt="User"
        className="w-10 h-10 rounded-full cursor-pointer border-2 border-purple-400"
      />

  
      <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
        <p className="font-semibold text-center text-gray-700 mb-2">
          {User.displayName || "Unnamed User"}
        </p>
        <button
          onClick={handleSignOut}
          className="btn btn-sm w-full rounded-2xl text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500"
        >
          Logout
        </button>
      </div>
    </div>
  ) : (
    <>
      <NavLink
        to="/auth/login"
        className="btn rounded-2xl text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500"
      >
        Login
      </NavLink>

      <NavLink
        to="/auth/register"
        className="btn rounded-2xl text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500"
      >
        Register
      </NavLink>
    </>
  )}
</div>



    </div>
  );
};

export default Navbar;