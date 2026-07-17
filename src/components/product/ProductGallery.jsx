import { useState } from 'react';

export default function ProductGallery({ images }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 border transition-colors ${
              i === active ? 'border-velmora-gold' : 'border-velmora-stone hover:border-velmora-taupe'
            }`}
          >
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[3/4] bg-velmora-sand">
        <img
          src={images[active].src}
          alt={images[active].alt}
          className="w-full h-full object-cover animate-fade-in"
        />
      </div>
    </div>
  );
}