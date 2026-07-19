import React, { useState } from 'react';

const ImageGallery = ({ images, productName }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="aspect-square bg-[#F8F5F1] flex items-center justify-center">
        <span className="text-[#6B665F]">No image available</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="aspect-square bg-[#F8F5F1] overflow-hidden border border-[#E8E4DE]">
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
              className={`w-20 h-20 overflow-hidden border transition-all ${
                selectedIndex === index 
                  ? 'border-[#C5A46E]' 
                  : 'border-[#E8E4DE] hover:border-[#C4B5A5]'
              }`}
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
