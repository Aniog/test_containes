import React, { useState } from 'react';

const ProductGallery = ({ images, productName }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  if (!images || images.length === 0) {
    return (
      <div className="aspect-square bg-[#F5F2ED] flex items-center justify-center">
        <span className="text-[#9A9288]">No image available</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div 
        className="relative aspect-square bg-[#F5F2ED] overflow-hidden cursor-zoom-in"
        onClick={() => setIsZoomed(!isZoomed)}
      >
        <img 
          src={images[selectedIndex]} 
          alt={productName}
          className={`w-full h-full object-cover transition-transform duration-500 ${isZoomed ? 'scale-150' : 'scale-100'}`}
        />
        <div className="absolute bottom-4 right-4 text-[10px] tracking-[0.1em] bg-white/90 px-2 py-1 text-[#5C5752]">
          CLICK TO {isZoomed ? 'CLOSE' : 'ZOOM'}
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedIndex(index);
                setIsZoomed(false);
              }}
              className={`flex-shrink-0 w-20 h-20 overflow-hidden border-2 transition-all ${
                selectedIndex === index 
                  ? 'border-[#B8976A]' 
                  : 'border-transparent hover:border-[#E5DFD6]'
              }`}
              aria-label={`View image ${index + 1}`}
            >
              <img 
                src={image} 
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

export default ProductGallery;
