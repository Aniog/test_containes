import React, { useState } from 'react';

const ProductGallery = ({ images, productName }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const currentImage = images[selectedIndex] || images[0];

  return (
    <>
      <div className="space-y-3">
        {/* Main Image */}
        <div 
          className="aspect-square bg-[#F0EBE3] overflow-hidden cursor-zoom-in"
          onClick={() => setIsLightboxOpen(true)}
        >
          <img
            src={currentImage}
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
                className={`w-20 h-20 bg-[#F0EBE3] overflow-hidden border-2 transition-all ${
                  selectedIndex === index ? 'border-[#8C6F52]' : 'border-transparent'
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

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="modal" onClick={() => setIsLightboxOpen(false)}>
          <div className="modal-overlay" />
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="modal-close"
              aria-label="Close"
            >
              ×
            </button>
            <img
              src={currentImage}
              alt={productName}
              className="max-h-[85vh] max-w-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductGallery;
