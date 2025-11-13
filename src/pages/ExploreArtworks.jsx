


import React, { useState } from 'react';
import { NavLink, useLoaderData } from 'react-router';

const ExploreArtworks = () => {
  const data = useLoaderData();
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');

  const categories = [
    'All',
    'Abstract',
    'Digital',
    'Watercolor',
    'Illustration',
    'Oil Painting',
    'Sketch',
  ];


  const filteredArtworks = data.filter((art) => {
    const matchesSearch =
      art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      art.artistName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'All' || art.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-indigo-400">Explore Artworks</h2>

        <input
          type="text"
          placeholder="Search by title or artist..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mt-4 w-80 max-w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                category === cat
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md scale-105'
                  : 'bg-white text-gray-700 hover:bg-indigo-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredArtworks.length > 0 ? (
          filteredArtworks.map((art) => (
            <div
              key={art._id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-105 duration-300"
            >
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{art.title}</h3>
                <p className="text-gray-500 text-sm mb-2">By {art.artistName}</p>

                <span className="inline-block bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full mb-4 font-medium">
                  {art.category}
                </span>

                <NavLink to={`/artDetail/${art._id}`}>
                  <button className="md:ml-[70px] bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                    View Details
                  </button>
                </NavLink>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No artworks found.
          </p>
        )}
      </div>
    </section>
  );
};

export default ExploreArtworks;
