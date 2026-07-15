import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function ProductGallery({ product }) {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [product.image, product.hoverImage];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Main image */}
      <div className="relative aspect-square bg-cream rounded-xl overflow-hidden">
        <img
          src={images[selectedImage]}
          alt={product.name}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex lg:flex-col gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={cn(
              'w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 transition-all duration-200',
              selectedImage === index
                ? 'border-gold'
                : 'border-transparent opacity-70 hover:opacity-100'
            )}
          >
            <img
              src={image}
              alt={`${product.name} view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
