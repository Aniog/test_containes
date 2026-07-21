import { useState } from 'react';

export default function ImageGallery({ images }) {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="aspect-[3/4] rounded-sm overflow-hidden bg-velvet-800">
        <img
          src={images[active]}
          alt=""
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-16 h-16 md:w-20 md:h-20 rounded-sm overflow-hidden bg-velvet-800 transition-all duration-300 ${
              i === active
                ? 'ring-1 ring-gold-400'
                : 'ring-1 ring-transparent opacity-60 hover:opacity-100'
            }`}
          >
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
