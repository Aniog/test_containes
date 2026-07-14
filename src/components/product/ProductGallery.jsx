import React, { useState } from 'react';

const ProductGallery = ({ product }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Create elegant placeholder images based on product
  const getImageStyle = (index, isMain) => {
    const baseGradients = [
      'linear-gradient(135deg, #F2EDE6 0%, #E8DFD0 40%, #D4C5A8 100%)',
      'linear-gradient(135deg, #E8DFD0 0%, #D4C5A8 50%, #B8976A 100%)',
    ];
    
    return {
      background: baseGradients[index % baseGradients.length],
    };
  };

  const images = product.images || [
    { id: 'main', alt: product.name },
    { id: 'alt', alt: product.name + ' detail' },
  ];

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div 
        className="aspect-[4/3] w-full bg-velmora-bg-alt overflow-hidden"
        style={getImageStyle(selectedIndex, true)}
      >
        <div className="w-full h-full flex items-center justify-center relative">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-velmora-gold to-velmora-gold-dark opacity-70" />
            <div className="text-sm text-velmora-text-muted tracking-[0.08em] uppercase">
              {images[selectedIndex]?.alt || product.name}
            </div>
          </div>
          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10" />
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`gallery-thumb ${selectedIndex === index ? 'active' : ''}`}
              style={getImageStyle(index, false)}
              aria-label={`View ${img.alt}`}
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-velmora-gold/60 to-velmora-gold-dark/60" />
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
