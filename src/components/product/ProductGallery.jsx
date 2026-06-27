import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function ProductGallery({ images, productName }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square bg-[var(--color-surface)] rounded-[var(--radius-lg)] overflow-hidden">
        <img
          src={images[selectedIndex]}
          alt={`${productName} - Image ${selectedIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={cn(
                'flex-shrink-0 w-20 h-20 rounded-[var(--radius-md)] overflow-hidden transition-all duration-200',
                selectedIndex === index
                  ? 'ring-2 ring-[var(--color-accent)] ring-offset-2'
                  : 'opacity-60 hover:opacity-100'
              )}
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
