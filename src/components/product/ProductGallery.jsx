import { useState } from 'react';

export function ProductGallery({ images, productName }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-square bg-charcoal/5 rounded-lg overflow-hidden">
        <img
          src={images[selectedIndex]}
          alt={`${productName} - Image ${selectedIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto scrollbar-hide">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`flex-shrink-0 w-20 h-20 rounded overflow-hidden border-2 transition-all ${
                selectedIndex === index
                  ? 'border-gold-500'
                  : 'border-transparent hover:border-charcoal/20'
              }`}
            >
              <img
                src={image}
                alt={`${productName} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
