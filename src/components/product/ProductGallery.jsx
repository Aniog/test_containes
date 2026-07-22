import { useState } from 'react';

export default function ProductGallery({ images }) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex gap-4">
      {/* Thumbnails */}
      <div className="flex flex-col gap-3">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            className={`w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-all duration-200 ${
              selected === index
                ? 'border-[#C8A45C]'
                : 'border-transparent hover:border-[#E8E2D8]'
            }`}
          >
            <img
              src={img}
              alt={`Product view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-square overflow-hidden bg-[#F5F0EB]">
        <img
          src={images[selected]}
          alt="Product"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}