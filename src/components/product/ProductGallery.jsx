import { useState } from 'react';

export default function ProductGallery({ images, productName }) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div className="aspect-[4/5] bg-sand-100 rounded-sm overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center transition-all duration-500"
          style={{
            backgroundColor: '#c4a06a',
            backgroundImage: `linear-gradient(135deg, #d4b98e 0%, #8a5c3c 100%)`,
          }}
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`w-16 md:w-20 aspect-square bg-sand-100 rounded-sm overflow-hidden transition-all duration-200 ${
              i === selected
                ? 'ring-1 ring-velvet-500 ring-offset-2'
                : 'hover:ring-1 hover:ring-sand-300'
            }`}
          >
            <div
              className="w-full h-full"
              style={{
                backgroundColor: i === 0 ? '#c4a06a' : i === 1 ? '#8a7c5f' : '#a09070',
                backgroundImage: `linear-gradient(135deg, #d4b98e 0%, #a67445 100%)`,
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
