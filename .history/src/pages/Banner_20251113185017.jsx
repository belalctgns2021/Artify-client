

import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const Banner = () => {
  const images = [
    {
      original: 'https://images.unsplash.com/photo-1532640331846-d2da5987c3ee?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1520',
      thumbnail: 'https://images.unsplash.com/photo-1532640331846-d2da5987c3ee?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1520',

    },
    {
      original: 'https://images.unsplash.com/photo-1580136579395-4bbb9ffdc4ca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1620',
      thumbnail: 'https://images.unsplash.com/photo-1580136579395-4bbb9ffdc4ca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1620',
      
    },
    {
      original: 'https://images.unsplash.com/photo-1698943498560-70ad78c6cfe1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1181',
      thumbnail: 'https://images.unsplash.com/photo-1698943498560-70ad78c6cfe1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1181',
      
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
