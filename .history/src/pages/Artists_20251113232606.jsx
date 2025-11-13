import React from "react";
import { motion } from "framer-motion";
import { motion } from "framer-motion";

const Artists = () => {
  const artists = [
    {
      name: "Zainul Abedin",
      image: "https://ecdn.dhakatribune.net/contents/cache/images/640x359x1/uploads/dten/2022/12/29/joynul-abedin-281221-01.jpeg",
       artworks: 80,
      followers: "15K"
    
    },
    {
      name: "Firoz Mahmud",
      image: "https://ik.imagekit.io/theartling/prod/artists/Artist/53c429391cc1480fb941d4214f06eb1a.jpg?tr=w-354%27",
      artworks: 65,
      followers: "12K",
    },
   

     {
      name: "Kanak Chanpa Chakma",
      image: "https://dbfcollection.com/wp-content/uploads/2023/11/21-Kanak-Chanpa-min.jpg",
      artworks: 80,
      followers: "15K",
    },

    {
      name: "Rafiqun Nabi",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR03vOU9J5SPtSfiZc43Y6yDbOYOZ4h67Jqg&s",
      artworks: 70,
      followers: "11K",
    },
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
