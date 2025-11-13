import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    

    <footer className="relative overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white py-12">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-72 h-72 bg-purple-300 rounded-full mix-blend-overlay blur-3xl opacity-20"
          animate={{
            x: [0, 50, -50, 0],
            y: [0, 30, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-pink-300 rounded-full mix-blend-overlay blur-3xl opacity-20 right-0"
          animate={{
            x: [0, -40, 40, 0],
            y: [0, 40, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Left */}
        <motion.div
          whileHover={{ scale: 1.05, rotateY: 5 }}
          className="backdrop-blur-lg bg-white/10 rounded-xl p-6 shadow-lg"
        >
          <h2 className="text-3xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-400">
            Artify 3D
          </h2>
          <p className="text-sm text-gray-100">
            Dive into a 3D world of creativity — showcase, explore, and get inspired by artists from across the globe.
          </p>
        </motion.div>

        {/* Middle */}
        <motion.div
          whileHover={{ scale: 1.05, rotateY: -5 }}
          className="backdrop-blur-lg bg-white/10 rounded-xl p-6 shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-4">Quick Access</h3>
          <ul className="space-y-2 text-gray-100">
            {["Home", "Discover", "Create Art", "My Studio"].map((item, idx) => (
              <motion.li
                key={idx}
                whileHover={{ scale: 1.1, x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="cursor-pointer hover:text-yellow-300"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right */}
        <motion.div
          whileHover={{ scale: 1.05, rotateY: 5 }}
          className="backdrop-blur-lg bg-white/10 rounded-xl p-6 shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <p>Email: hello@artify3d.com</p>
          <p>Phone: +880 987 654 321</p>
          <div className="flex space-x-5 mt-4 text-2xl">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{
                  scale: 1.3,
                  rotate: 10,
                  color: "#FFD700",
                  textShadow: "0 0 8px rgba(255,215,0,0.8)",
                }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="mt-12 text-center text-sm text-gray-200 border-t border-white/20 pt-6"
      >
        © {new Date().getFullYear()} <span className="text-yellow-300 font-semibold">Artify 3D</span>. All Rights Reserved.
      </motion.div>
    </footer>


  );
};

export default Footer;
