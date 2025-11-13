import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
  
      <img
        src="https://png.pngtree.com/png-vector/20230420/ourmid/pngtree-illustration-of-an-empty-state-vector-depicting-unstable-internet-connectivity-vector-png-image_51335664.jpg"
        alt="Error Illustration"
        className="w-80  md:w-96 mb-8"
      />


      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4">
        404
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-6 text-center">
        Oops! The page you are looking for does not exist.
      </p>
<Link to="/">

      <button
    
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition" >Go Back</button>

</Link>
    </div>
  );
};

export default ErrorPage;
