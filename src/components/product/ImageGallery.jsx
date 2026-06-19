import { useState } from 'react';

export default function ImageGallery({ images, name }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex gap-4">
      {/* Thumbnails */}
      <div className="flex flex-col gap-2 flex-shrink-0">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelectedIndex(i)}
            className={`w-16 h-20 overflow-hidden border-2 transition-colors duration-200 ${
              i === selectedIndex
                ? 'border-gold-500'
                : 'border-transparent hover:border-cream-300'
            }`}
          >
            <img
              src={img}
              alt={`${name} view ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[4/5] overflow-hidden bg-cream-200">
        <img
          src={images[selectedIndex]}
          alt={name}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
      </div>
    </div>
  );
}