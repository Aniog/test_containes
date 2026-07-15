import React, { useState } from 'react';

const ImageGallery = ({ images, productName }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const displayImages = images && images.length > 0 ? images : ['https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80'];

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="gallery-main">
        <img 
          src={displayImages[selectedIndex]} 
          alt={`${productName} - view ${selectedIndex + 1}`}
        />
      </div>

      {/* Thumbnails */}
      {displayImages.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {displayImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`gallery-thumb flex-shrink-0 ${selectedIndex === index ? 'active' : ''}`}
              aria-label={`View image ${index + 1}`}
            >
              <img src={image} alt={`${productName} thumbnail ${index + 1}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
