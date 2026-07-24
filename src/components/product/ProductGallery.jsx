import { useState } from 'react';
import { cn } from '@/lib/utils';

const ProductGallery = ({ images, productName }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square bg-cream-100 overflow-hidden">
        <img
          src={images[activeIndex]}
          alt={`${productName} - Image ${activeIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                'flex-shrink-0 w-20 h-20 md:w-24 md:h-24 overflow-hidden transition-all duration-200',
                activeIndex === index 
                  ? 'ring-2 ring-charcoal-900 ring-offset-2' 
                  : 'opacity-70 hover:opacity-100'
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
