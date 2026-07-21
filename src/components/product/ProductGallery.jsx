import { useState } from 'react';

export default function ProductGallery({ images, productName }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-square bg-cream-100 rounded-lg overflow-hidden">
        <img
          src={images[selectedIndex]}
          alt={`${productName} - View ${selectedIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`w-20 h-20 rounded overflow-hidden border-2 transition-all ${
                selectedIndex === index
                  ? 'border-gold-500'
                  : 'border-transparent hover:border-charcoal-300'
              }`}
              aria-label={`View image ${index + 1}`}
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
