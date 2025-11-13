

import React, { use,} from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
const Login = () => {
  const { singInUser, singInWithGoogle } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    singInUser(email, password)
      .then((result) => {
        console.log("Logged in user:", result.user);
          Swal.fire({
          icon: "success",
          title: "Welcome Back!",
          text: "Login successful ",
          timer: 1500,
          showConfirmButton: false,
          timerProgressBar: true,
        });
        navigate("/"); 
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleGoogleLogin = () => {
    singInWithGoogle()
      .then((result) => {
        console.log("Google login success:", result.user);
          Swal.fire({
          icon: "success",
          title: "Welcome Back!",
          text: "Login successful ",
          timer: 1500,
          showConfirmButton: false,
          timerProgressBar: true,
        });
        navigate("/"); 
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
   import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login3D = ({ handleLogin, handleGoogleLogin }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 overflow-hidden relative">
      {/* Floating animated background lights */}
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

      {/* 3D Animated Login Card */}
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
          Login Now 🚀
        </motion.h1>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email Input */}
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

          {/* Password Input */}
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

          <div className="text-right">
            <a className="link link-hover text-pink-300 text-sm hover:text-white">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <motion.button
            type="submit"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#6366f1",
              boxShadow: "0 0 20px rgba(99,102,241,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-indigo-500 rounded-xl font-semibold text-white shadow-lg transition-all"
          >
            Login
          </motion.button>

          <p className="text-center text-sm text-gray-200 mt-3">
            Don’t have an account?{" "}
            <Link
              to="/auth/register"
              className="text-pink-300 hover:text-white font-medium"
            >
              Register
            </Link>
          </p>

          <div className="divider text-gray-400">OR</div>

          {/* Google Login Button */}
          <motion.button
            onClick={handleGoogleLogin}
            type="button"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(255,255,255,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-outline w-full flex items-center justify-center gap-3 border-white/40 text-white"
          >
            <FcGoogle size={22} /> Login with Google
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};


  );
};

export default Login;
