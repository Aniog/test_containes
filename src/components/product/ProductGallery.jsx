import { useState } from 'react';

export default function ProductGallery({ images, name }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 overflow-x-auto scrollbar-hide md:overflow-visible">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden ${
              i === active ? 'ring-1 ring-velmora-gold' : 'ring-0'
            }`}
          >
            <img src={src} alt={`${name} view ${i + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[3/4] overflow-hidden bg-velmora-sand">
        <img
          src={images[active]}
          alt={name}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>
    </div>
  );
}
