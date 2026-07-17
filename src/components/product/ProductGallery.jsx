import { useState } from 'react';

export default function ProductGallery({ images }) {
  const [active, setActive] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 order-2 md:order-1">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-sm overflow-hidden border-2 transition-colors ${
              i === active ? 'border-accent' : 'border-transparent hover:border-border'
            }`}
          >
            <img
              src={img.src}
              alt={`${img.alt} thumbnail`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 order-1 md:order-2 aspect-[3/4] bg-muted rounded-sm overflow-hidden">
        <img
          src={images[active].src}
          alt={images[active].alt}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>
    </div>
  );
}
