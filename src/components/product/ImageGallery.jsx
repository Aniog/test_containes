import React, { useState } from 'react';

const ImageGallery = ({ images, productName }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const displayImages = images.length > 0 ? images : ['https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80'];

  return (
    <div className="flex flex-col gap-3">
      {/* Main Image */}
      <div className="aspect-[4/3.5] bg-[#F2EDE6] overflow-hidden">
        <img 
          src={displayImages[selectedIndex]} 
          alt={productName}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      {displayImages.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {displayImages.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`gallery-thumb aspect-square ${selectedIndex === index ? 'active' : ''}`}
            >
              <img src={img} alt={`${productName} view ${index + 1}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;