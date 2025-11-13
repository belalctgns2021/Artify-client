

import React, { useState, useContext } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { motion } from "framer-motion";
const ArtworkDetail = () => {
  const data = useLoaderData();
  const art = data.result;

  const { User } = useContext(AuthContext); // Logged in user
  const [artwork, setArtwork] = useState(art);

const handleLike = async () => {
  if (!User) return alert("You must be logged in to like an artwork");

  try {
    const res = await fetch(`http://localhost:3000/artifys/${artwork._id}/like`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: User.email }),
    });

    const data = await res.json();
    setArtwork(data.artwork); 

 Swal.fire({
      icon: "success",
      title: "Liked!",
      text: "You liked this artwork ",
      timer: 1500,
      showConfirmButton: false,
    });

  } catch (err) {
    console.error("Like failed:", err);
  }
};


const handleFavorite = async () => {
  if (!User) {
    Swal.fire("Login required", "Please log in to add to favorites!", "warning");
    return;
  }

  const res = await fetch("http://localhost:3000/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: User.email,
      artworkId: artwork._id,
      title: artwork.title,
      image: artwork.image,
      artistName: artwork.artistName,
    }),
  });

  const data = await res.json();
  if (data.success) {
    Swal.fire("Added!", "Artwork added to favorites!", "success");
  } else {
    Swal.fire("Already Added", "This artwork is already in favorites!", "info");
  }
};



  const isLiked = User && artwork.likedBy?.includes(User.email);

  return (


<section className="max-w-6xl mx-auto my-16 px-6 md:px-10">
  <div className="grid md:grid-cols-2 gap-10">
    <motion.img
      src={artwork.image}
      alt={artwork.title}
      className="rounded-2xl shadow-2xl w-full h-[420px] object-cover cursor-pointer"
      whileHover={{ scale: 1.05, rotateY: 5, rotateX: 3 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 150, damping: 12 }}
    />

    <motion.div
      className="space-y-4"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <h2 className="text-4xl font-extrabold mb-3 text-indigo-400 drop-shadow-lg">{artwork.title}</h2>
      <p><strong>Artist:</strong> {artwork.artistName}</p>
      <p><strong>Medium:</strong> {artwork.medium}</p>

      <div className="flex gap-14 mt-4">
        <motion.p
          className="bg-gray-100 px-2 py-1 rounded"
          whileHover={{ scale: 1.1 }}
        >
          <strong>Likes:</strong> {artwork.likes || 0}
        </motion.p>
        <motion.p
          className="bg-gray-100 px-2 py-1 rounded"
          whileHover={{ scale: 1.1 }}
        >
          <strong>Total Art:</strong> {artwork.totalArt || 0}
        </motion.p>
      </div>

      <p className="mt-4 text-gray-200">{artwork.description}</p>

      <div className="flex gap-4 mt-6">
        <motion.button
          onClick={handleLike}
          className={`px-5 py-2 rounded-full font-semibold transition ${
            isLiked
              ? "bg-gray-300 text-gray-700"
              : "bg-pink-500 text-white hover:bg-pink-600"
          }`}
          whileHover={{ scale: 1.05, rotateZ: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          {isLiked ? "Liked" : "Like"}
        </motion.button>

        <motion.button
          onClick={handleFavorite}
          className="px-5 py-2 rounded-full font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 text-white"
          whileHover={{ scale: 1.05, rotateZ: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Add to Favorite
        </motion.button>
      </div>
    </motion.div>
  </div>

  <motion.div
    className="mt-12 flex items-center gap-6 border-t pt-6"
    whileHover={{ y: -3 }}
    transition={{ type: "spring", stiffness: 100 }}
  >
    <motion.img
      src={artwork.artistImg}
      alt={artwork.artistName}
      className="w-20 h-20 rounded-full object-cover border shadow-lg"
      whileHover={{ scale: 1.1, rotateY: 10 }}
      transition={{ type: "spring", stiffness: 150 }}
    />
    <div>
      <h4 className="font-bold text-white">{artwork.artistName}</h4>
      <p className="text-gray-300">Total Artworks: {artwork.totalArt}</p>
    </div>
  </motion.div>
</section>

  );
};

export default ArtworkDetail;

