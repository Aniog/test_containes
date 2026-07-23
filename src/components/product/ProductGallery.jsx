import { useState } from 'react';

export default function ProductGallery({ product }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Simulate 4 gallery images
  const images = Array.from({ length: 4 }, (_, i) => i);

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 order-2 md:order-1">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setSelectedIndex(i)}
            className={`w-16 h-16 md:w-20 md:h-20 border transition-colors flex-shrink-0 ${
              selectedIndex === i ? 'border-espresso' : 'border-border hover:border-taupe'
            }`}
          >
            <div className="w-full h-full bg-gradient-to-br from-rose to-warm-white flex items-center justify-center">
              <span className="text-[8px] text-taupe/40 uppercase tracking-wider">
                {i + 1}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[4/5] order-1 md:order-2">
        <div className="w-full h-full bg-gradient-to-br from-rose via-warm-white to-rose flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-gold-pale/40 flex items-center justify-center mb-4">
              <span className="text-gold text-2xl">✦</span>
            </div>
            <p className="text-[11px] text-taupe/50 uppercase tracking-[0.15em]">
              {product.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}