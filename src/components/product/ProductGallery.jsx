import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function ProductGallery({ images, productName }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-square bg-[var(--color-ivory)] rounded overflow-hidden">
        <img
          src={images[selectedIndex]?.src}
          alt={images[selectedIndex]?.alt || productName}
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
                'flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded overflow-hidden',
                'transition-all duration-200',
                selectedIndex === index 
                  ? 'ring-2 ring-[var(--color-gold)] ring-offset-2' 
                  : 'opacity-60 hover:opacity-100'
              )}
            >
              <img
                src={image.src}
                alt={image.alt || `${productName} view ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
