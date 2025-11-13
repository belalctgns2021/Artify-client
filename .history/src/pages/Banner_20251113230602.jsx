

import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const Banner = () => {
  const images = [
      {
    src: "https://images.unsplash.com/photo-1532640331846-d2da5987c3ee?auto=format&fit=crop&q=80&w=1520",
    title: "Ocean Vibes",
  },
  {
    src: "https://images.unsplash.com/photo-1580136579395-4bbb9ffdc4ca?auto=format&fit=crop&q=80&w=1620",
    title: "Abstract Flow",
  },
  {
    src: "https://images.unsplash.com/photo-1698943498560-70ad78c6cfe1?auto=format&fit=crop&q=80&w=1181",
    title: "Neon Dreamscape",
  },
];
  
  return (
    <div className="banner-slider">
      <ImageGallery 
        items={images} 
        showThumbnails={true} 
         showFullscreenButton={false}
        showPlayButton={false}
        slideInterval={4000} 
      />
    </div>
  );
};

export default Banner;
