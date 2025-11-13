
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-white py-10 bg-indigo-400">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        
  
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Artify</h2>
          <p className="">
            A creative platform to showcase and explore amazing artworks from talented artists worldwide.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul>
            <li className="my-1 hover:text-white cursor-pointer">Home</li>
            <li className="my-1 hover:text-white cursor-pointer">Explore Artworks</li>
            <li className="my-1 hover:text-white cursor-pointer">Add Artwork</li>
            <li className="my-1 hover:text-white cursor-pointer">My Gallery</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
          <p className="">Email: support@artify.com</p>
          <p className="">Phone: +880 123 456 789</p>
          <div className="flex mt-3 space-x-4">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-5 text-center  text-sm">
        &copy; 2025 Artify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
