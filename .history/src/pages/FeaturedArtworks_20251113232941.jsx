import React, { use } from 'react';
import { Link } from 'react-router';
import { motion } from "framer-motion";


const FeaturedArtworks = ({FeaturedArtpromise}) => {
    const FeaturedArt=use(FeaturedArtpromise);

    return (
        
<section className="py-16">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-indigo-400 drop-shadow-lg">
      Featured Artworks
    </h2>  
  </div>

  <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {FeaturedArt.map((art) => (
      <motion.div
        key={art._id}
        className="bg-white rounded-3xl overflow-hidden shadow-xl cursor-pointer"
        whileHover={{ scale: 1.07, rotateY: 5, rotateX: 3, y: -5 }}
        transition={{ type: "spring", stiffness: 150, damping: 12 }}
      >
        <motion.img
          src={art.image}
          alt={art.title}
          className="w-full h-64 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 150 }}
        />

        <motion.div
          className="p-6 text-left"
          whileHover={{ y: -3 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <h3 className="text-xl font-bold text-gray-800 mb-1">{art.title}</h3>
          <p className="text-gray-500 text-sm mb-2">By {art.artistName}</p>
          <span className="inline-block bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full mb-4 font-medium">
            {art.category}
          </span>
          <motion.div whileHover={{ scale: 1.05, rotateZ: 2 }} whileTap={{ scale: 0.95 }}>
            <Link
              to={`/artDetail/${art._id}`}
              className="md:ml-[70px] bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 inline-block text-center"
            >
              View Details
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    ))}
  </div>
</section>
    
    );
};

export default FeaturedArtworks;