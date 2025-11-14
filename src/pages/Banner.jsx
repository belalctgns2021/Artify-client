

import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const Banner = () => {
  const images = [
      {
      original: 'https://images.unsplash.com/photo-1532004296989-85c25ce3f6aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      thumbnail: 'https://images.unsplash.com/photo-1532004296989-85c25ce3f6aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    },
    {
      original: 'https://images.unsplash.com/photo-1532062493181-1b3cff68c8fd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      thumbnail: 'https://images.unsplash.com/photo-1532062493181-1b3cff68c8fd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      
    },
    {
      original: 'https://images.unsplash.com/photo-1529335368860-022a22e0a944?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      thumbnail: 'https://images.unsplash.com/photo-1529335368860-022a22e0a944?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      
    },

,

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
