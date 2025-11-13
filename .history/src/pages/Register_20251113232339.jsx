

import React, { use } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import { updateProfile } from 'firebase/auth';
import swal from 'sweetalert';
import "sweetalert2/dist/sweetalert2.min.css";
import Swal from 'sweetalert2';
const Register = () => {
  const { singInWithGoogle, createUser, setUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const photourl = form.photourl.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (password.length < 6 || !/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
      swal("Password must contain uppercase, lowercase and be at least 6 characters long.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
      navigate('/');
        
        updateProfile(user, {
          displayName: name,
          photoURL: photourl || "https://i.ibb.co/3rYVZ7H/default-user.png",
        })
          .then(() => {
        
            setUser({
              ...user,
              displayName: name,
              photoURL: photourl || "https://i.ibb.co/3rYVZ7H/default-user.png",
            });

          Swal.fire({
              icon: "success",
              title: "Registration Successful 🎉",
              text: "Welcome to Artify!",
              showConfirmButton: false,
              timer: 1800,
              timerProgressBar: true,
            });
            navigate('/'); 
          })
          .catch((error) => {
            console.error("Profile update failed:", error);
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    singInWithGoogle()
      .then((result) => {
        console.log("Google Login Success:", result.user);
        Swal.fire({
          icon: "success",
          title: "Welcome!",
          text: "Signed up with Google successfully ",
          showConfirmButton: false,
          timer: 1800,
          timerProgressBar: true,
        });
        navigate('/');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";

const Register3D = ({ handleRegister, handleGoogleSignIn }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 overflow-hidden relative">
      {/* Glowing animated background lights */}
      <motion.div
        className="absolute inset-0 blur-3xl opacity-40 -z-10"
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(255,0,150,0.4), transparent 60%)",
            "radial-gradient(circle at 80% 70%, rgba(0,255,255,0.4), transparent 60%)",
            "radial-gradient(circle at 50% 50%, rgba(255,255,0,0.3), transparent 60%)",
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 3D Animated Register Card */}
      <motion.div
        className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8 w-full max-w-md text-white"
        initial={{ opacity: 0, y: 50, rotateY: -10 }}
        animate={{ opacity: 1, y: 0, rotateY: 0 }}
        whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        <motion.h1
          className="text-4xl font-extrabold text-center bg-gradient-to-r from-indigo-300 to-pink-400 bg-clip-text text-transparent mb-8 drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Register Now ✨
        </motion.h1>

        <form onSubmit={handleRegister} className="space-y-5">
          {/* Name */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input
              name="name"
              type="text"
              required
              placeholder="Your Name"
              className="input input-bordered w-full bg-white/20 border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </motion.div>

          {/* Photo URL */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <label className="block mb-2 text-sm font-medium">Photo URL</label>
            <input
              name="photourl"
              type="text"
              placeholder="Photo URL"
              className="input input-bordered w-full bg-white/20 border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </motion.div>

          {/* Email */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className="input input-bordered w-full bg-white/20 border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </motion.div>

          {/* Password */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <label className="block mb-2 text-sm font-medium">Password</label>
            <input
              name="password"
              type="password"
              required
              placeholder="Password"
              className="input input-bordered w-full bg-white/20 border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </motion.div>

          {/* Register Button */}
          <motion.button
            type="submit"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#6366f1",
              boxShadow: "0 0 25px rgba(99,102,241,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-indigo-500 rounded-xl font-semibold text-white shadow-lg transition-all"
          >
            Register
          </motion.button>

          <div className="divider text-gray-400">OR</div>

          {/* Google Sign-in */}
          <motion.button
            onClick={handleGoogleSignIn}
            type="button"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(255,255,255,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-outline w-full flex items-center justify-center gap-3 border-white/40 text-white"
          >
            <FcGoogle size={22} /> Sign up with Google
          </motion.button>
        </form>

        <p className="text-sm text-center mt-6 text-gray-200">
          Already have an account?{" "}
          <NavLink to="/auth/login" className="text-pink-300 hover:text-white font-medium">
            Login
          </NavLink>
        </p>
      </motion.div>
    </div>
  );
};

export default Register3D;

  );
};

export default Register;

