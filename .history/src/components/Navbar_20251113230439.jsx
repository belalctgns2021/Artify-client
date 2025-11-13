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
    <div className="navbar bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-gray-100  shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

            {
              links
            }
          </ul>
        </div>
    
           <a className="btn btn-ghost text-xl font-bold " >Artify</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            links
          }
        </ul>
      </div>




      <div className="navbar-end gap-4">
   
  


<div className="flex items-center gap-2">
  <input
    type="checkbox"
    checked={theme === 'dark'}
    onChange={(e) => handleTheme(e.target.checked)}
    className="toggle"
  />
  <span className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>

  </span>
</div>




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