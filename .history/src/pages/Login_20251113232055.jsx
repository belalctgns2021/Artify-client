

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
   write only this code everythig with 3d animetion
  );
};

export default Login;
