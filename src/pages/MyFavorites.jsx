import React, { useEffect, useState, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";

const MyFavorites = () => {
  const { User } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (!User) return;
    fetch(`http://localhost:3000/favorites?email=${User.email}`)
      .then((res) => res.json())
      .then((data) => {
        setFavorites(data);
        setLoading(false);
      });
  }, [User]);


  const handleRemove = (id) => {
    Swal.fire({
      title: "Remove Favorite?",
      text: "Are you sure you want to unfavorite this artwork?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/favorites/${id}`, 
          { method: "DELETE" })
          .then((res) => res.json())
          .then(() => {
            setFavorites(favorites.filter((fav) => fav._id !== id));
            Swal.fire("Removed!", "This artwork has been removed.", "success");
          });
      }
    });
  };

  if (loading) return <p className="text-center mt-20"><span className="loading loading-spinner text-success"></span></p>;

  return (
    <div className="max-w-6xl mx-auto mt-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-indigo-400 text-center"> My Favorites</h2>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">No favorites </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {favorites.map((fav) => (
            <div key={fav._id} className="card bg-base-100 shadow-xl">
              <figure>
                <img src={fav.image} alt={fav.title} className="h-48 w-full object-cover" />
              </figure>
              <div className="card-body">
                <h3 className="font-bold text-lg">{fav.title}</h3>
                <p className="text-gray-600">Artist: {fav.artistName}</p>
                <button
                  onClick={() => handleRemove(fav._id)}
                  className="btn btn-sm mt-2 text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500"
                >
               Unfavorite
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyFavorites;
