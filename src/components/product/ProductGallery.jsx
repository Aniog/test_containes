import { useState } from 'react';

export default function ProductGallery({ images, productName }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
        {images.map((img, i) => (
          <button
            key={img.id}
            onClick={() => setActiveIndex(i)}
            className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 border transition-colors ${
              i === activeIndex
                ? 'border-velmora-gold'
                : 'border-transparent hover:border-velmora-sand'
            }`}
          >
            <div className="w-full h-full bg-velmora-sand/30 flex items-center justify-center">
              <span className="text-velmora-stone/40 text-[9px] tracking-wider">
                {i + 1}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-square bg-velmora-sand/20 flex items-center justify-center">
        <div className="text-center">
          <span className="text-velmora-stone/30 text-xs tracking-wider block">
            {productName}
          </span>
          <span className="text-velmora-stone/20 text-[10px] mt-1 block">
            View {activeIndex + 1} of {images.length}
          </span>
        </div>
      </div>
    </div>
  );
}