

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const MyGallery = () => {
  const { User } = useContext(AuthContext);
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedArt, setSelectedArt] = useState(null);

  useEffect(() => {
    if (User) {
      fetch(`http://localhost:3000/my-artworks?email=${User.email}`)
        .then((res) => res.json())
        .then((data) => {
          setModels(data);
          setLoading(false);
        })
        .catch((err) => console.error(err));
    }
  }, [User]);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(`http://localhost:3000/artifys/${id}`, {
          method: "DELETE",
        });
        const data = await res.json();

        if (data.deletedCount > 0) {
          setModels(models.filter((art) => art._id !== id));
          Swal.fire("Deleted!", "Your artwork has been deleted.", "success");
        }
      } catch (err) {
        console.error(err);
        Swal.fire("Error!", "Failed to delete artwork.", "error");
      }
    }
  };

  
  const openModal = (art) => {
    setSelectedArt(art);
    document.getElementById("update_modal").showModal();
  };

  if (loading) {
    return <div className="text-center my-20"><span className="loading loading-spinner text-success"></span></div>;
  }

  return (
    <div className="max-w-7xl mx-auto my-16 px-6 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 blur-3xl opacity-40 -z-10"
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(255,0,150,0.4), transparent 60%)",
            "radial-gradient(circle at 80% 70%, rgba(0,255,255,0.4), transparent 60%)",
            "radial-gradient(circle at 50% 50%, rgba(255,255,0,0.3), transparent 60%)",
          ],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80 }}
        className="text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
      >
        My Gallery ✨
      </motion.h1>

      {models.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-300 text-lg"
        >
          You have no artworks yet. 🌙
        </motion.p>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {models.map((art, index) => (
            <motion.div
              key={art._id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                rotateX: 5,
                boxShadow: "0px 10px 30px rgba(255,255,255,0.2)",
              }}
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden transform-gpu"
            >
              {/* Image Section */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden h-56"
              >
                <motion.img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover rounded-t-2xl"
                  whileHover={{
                    scale: 1.1,
                    rotateZ: 2,
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                />

                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-lg font-semibold"
                >
                  {art.title}
                </motion.div>
              </motion.div>

              {/* Details */}
              <div className="p-5 text-left">
                <h2 className="text-2xl font-semibold text-white mb-1 tracking-wide">
                  {art.title}
                </h2>
                <p className="text-gray-300 mb-4 text-sm">{art.medium}</p>

                <div className="flex justify-between mt-4">
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#3b82f6",
                      boxShadow: "0 0 15px rgba(59,130,246,0.6)",
                    }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => openModal(art)}
                    className="px-5 py-2 bg-blue-500 text-white rounded-lg font-medium transition-all"
                  >
                    Update
                  </motion.button>

                  <motion.button
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#ef4444",
                      boxShadow: "0 0 15px rgba(239,68,68,0.6)",
                    }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleDelete(art._id)}
                    className="px-5 py-2 bg-red-500 text-white rounded-lg font-medium transition-all"
                  >
                    Delete
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
    
          


      <dialog id="update_modal" className="modal modal-bottom sm:modal-middle">
        <form
          method="dialog"
          className="modal-box"
          onSubmit={async (e) => {
            e.preventDefault();
            const title = e.target.title.value;
            const medium = e.target.medium.value;
            const image = e.target.image.value;

            try {
              const res = await fetch(
                `http://localhost:3000/artifys/${selectedArt._id}`,
                {
                  method: "PUT",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ title, medium, image }),
                }
              );
              const data = await res.json();

              if (data.modifiedCount > 0) {
                setModels(
                  models.map((a) =>
                    a._id === selectedArt._id ? { ...a, title, medium, image } : a
                  )
                );
                Swal.fire("Updated!", "Your artwork has been updated.", "success");
              }
            } catch (err) {
              console.error(err);
              Swal.fire("Error!", "Failed to update artwork.", "error");
            }

            e.target.closest("dialog").close(); 
          }}
        >
          <h3 className="font-bold text-lg mb-4">Update Artwork</h3>

          <input
            type="text"
            name="title"
            defaultValue={selectedArt?.title}
            placeholder="Title"
            className="input input-bordered w-full mb-3"
            required
          />
          <input
            type="text"
            name="medium"
            defaultValue={selectedArt?.medium}
            placeholder="Medium"
            className="input input-bordered w-full mb-3"
            required
          />
          <input
            type="text"
            name="image"
            defaultValue={selectedArt?.image}
            placeholder="Image URL"
            className="input input-bordered w-full mb-3"
            required
          />

          <div className="modal-action">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => document.getElementById("update_modal").close()}
            >
              Cancel
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default MyGallery;

