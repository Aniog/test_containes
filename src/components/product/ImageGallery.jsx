import React, { useState } from 'react';

const ImageGallery = ({ images, productName }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="aspect-square bg-vel-bg-alt flex items-center justify-center">
        <span className="text-vel-muted">No image available</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {/* Main Image */}
      <div className="aspect-[4/3.5] bg-vel-bg-alt overflow-hidden">
        <img
          src={images[selectedIndex]}
          alt={productName}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`w-20 h-20 bg-vel-bg-alt overflow-hidden border-2 transition-all ${
                selectedIndex === index ? 'border-vel-gold' : 'border-transparent'
              }`}
              aria-label={`View image ${index + 1}`}
            >
              <img
                src={img}
                alt={`${productName} view ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
