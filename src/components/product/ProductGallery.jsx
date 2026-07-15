import { useState } from 'react';
import { cn } from '../../lib/utils';

const ProductGallery = ({ images, productName }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const mainImage = images[selectedIndex];

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-square bg-cream-200 rounded-sm overflow-hidden">
        <img
          src={mainImage}
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
              className={cn(
                'flex-shrink-0 w-20 h-20 rounded-sm overflow-hidden border-2 transition-all duration-200',
                selectedIndex === index
                  ? 'border-gold'
                  : 'border-transparent hover:border-linen'
              )}
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
};

export default ProductGallery;
