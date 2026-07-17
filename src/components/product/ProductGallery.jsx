import { useState } from 'react';

export default function ProductGallery({ product }) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div className="aspect-[4/5] bg-gradient-to-br from-espresso-100 via-espresso-200 to-gold-600 flex items-center justify-center">
        <div className="text-center opacity-25">
          <span className="text-cream/50 text-8xl font-serif">✦</span>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {product.images.map((img, i) => (
          <button
            key={img}
            onClick={() => setSelected(i)}
            className={`w-16 h-16 flex-shrink-0 transition-all duration-300 ${
              selected === i
                ? 'ring-1 ring-gold opacity-100'
                : 'opacity-50 hover:opacity-80'
            }`}
          >
            <div className="w-full h-full bg-gradient-to-br from-espresso-100 to-espresso-200 flex items-center justify-center">
              <span className="text-cream/30 text-xs">{i + 1}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
