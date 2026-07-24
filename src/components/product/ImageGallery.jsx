import { useState } from 'react';

export default function ImageGallery({ images, name }) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-3">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            className={`w-16 h-16 md:w-20 md:h-20 flex-shrink-0 overflow-hidden border-2 transition-colors ${
              selected === index
                ? 'border-gold'
                : 'border-transparent hover:border-border-light'
            }`}
          >
            <img
              src={img}
              alt={`${name} view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 bg-cream overflow-hidden">
        <img
          src={images[selected]}
          alt={name}
          className="w-full aspect-[3/4] object-cover"
        />
      </div>
    </div>
  );
}