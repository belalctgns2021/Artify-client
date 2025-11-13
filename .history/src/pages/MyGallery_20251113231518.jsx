

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
     );
};      )}


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

