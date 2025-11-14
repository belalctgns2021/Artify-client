import React from "react";
import { motion } from "framer-motion";

const Artists = () => {
  const artists = [
  
  {
    "name": "Firoz Mahmud",
    "image": "https://unsplash.com/photos/a-man-standing-in-front-of-a-tree-O8SuPkzq_8E",  
    "artworks": 65,
    "followers": "12K"
  },
  {
    "name": "Atia Islam Anne",
    "image": "https://unsplash.com/photos/a-man-taking-a-picture-of-himself-with-a-camera-jd4kUo0gHRc",  
    "artworks": 45,
    "followers": "8K"
  },
  {
    "name": "Shahabuddin Ahmed",
    "image": "https://unsplash.com/photos/xP88YhTS1XU",  
    "artworks": 80,
    "followers": "20K"
  },
  {
    "name": "Dilara Begum Jolly",
    "image": "https://unsplash.com/photos/_dH-oQF9w-Y",  
    "artworks": 50,
    "followers": "10K"
  }



  ];

  return (
    

<section className="py-20 bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-600">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-400 mb-12 drop-shadow-lg">
      Top Artists of the Week
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {artists.map((artist, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -10, rotateX: 5, rotateY: 5, scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-5 flex flex-col items-center cursor-pointer hover:shadow-3xl"
        >
          <motion.img
            src={artist.image}
            alt={artist.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
            whileHover={{ scale: 1.1, rotateZ: 3 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
          <h3 className="mt-4 text-xl font-semibold text-white">
            {artist.name}
          </h3>
          <p className="text-gray-300 text-sm mt-1">{artist.artworks} artworks</p>
          <p className="text-gray-200 font-medium mt-1">{artist.followers} followers</p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(255,255,255,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-full transition-all shadow-lg"
          >
            View Profile
          </motion.button>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Artists;
