

import React, { useState, useContext } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
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
        <img
          src={artwork.image}
          alt={artwork.title}
          className="rounded-2xl shadow-md w-full h-[420px] object-cover"
        />

        <div>
          <h2 className="text-4xl font-extrabold mb-3">{artwork.title}</h2>
          <p><strong>Artist:</strong> {artwork.artistName}</p>
          <p><strong>Medium:</strong> {artwork.medium}</p>

          <div className="flex gap-14 mt-4">
            <p className="bg-gray-100 px-2 py-1 rounded">
              <strong>Likes:</strong> {artwork.likes || 0}
            </p>
            <p className="bg-gray-100 px-2 py-1 rounded">
              <strong>Total Art:</strong> {artwork.totalArt || 0}
            </p>
          </div>

          <p className="mt-4">{artwork.description}</p>

          <div className="flex gap-4 mt-6">
            <button
              onClick={handleLike}
              className={`px-5 py-2 rounded-full font-semibold transition ${
                isLiked ? "bg-gray-300 text-gray-700" : "bg-pink-500 text-white hover:bg-pink-600"
              }`}
            >
              {isLiked ? "Liked" : "Like"}
            </button>
              <button
              onClick={handleFavorite}
              className="px-5 py-2 rounded-full font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 text-white hover:bg-blue-600"
            >
              Add to Favorite
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 flex items-center gap-6 border-t pt-6">
        <img
          src={artwork.artistImg}
          alt={artwork.artistName}
          className="w-20 h-20 rounded-full object-cover border"
        />
        <div>
          <h4 className="font-bold">{artwork.artistName}</h4>
          <p>Total Artworks: {artwork.totalArt}</p>
        </div>
      </div>
    </section>
  );
};

export default ArtworkDetail;

