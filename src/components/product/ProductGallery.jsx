import { useState } from 'react';

export default function ProductGallery({ images, productName }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible md:w-20">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`flex-shrink-0 w-16 md:w-20 aspect-square overflow-hidden border-2 transition-colors ${
              selectedIndex === index
                ? 'border-[var(--color-gold)]'
                : 'border-transparent hover:border-[var(--color-border-dark)]'
            }`}
          >
            <img
              src={image}
              alt={`${productName} view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-square bg-[var(--color-cream)] overflow-hidden">
        <img
          src={images[selectedIndex]}
          alt={productName}
          className="w-full h-full object-cover transition-all duration-300"
        />
      </div>
    </div>
  );
}
