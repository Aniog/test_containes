import { useState } from 'react';
import { getStrkImage } from '@/lib/utils';

export default function ProductGallery({ product }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = product.images || [];
  const primarySrc = getStrkImage(product.imgId);
  const altSrc = getStrkImage(`${product.imgId}-alt`);

  const mainSrc = selectedIndex === 0 ? primarySrc : (selectedIndex === 1 && altSrc ? altSrc : primarySrc);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto">
        {images.map((_, i) => {
          const thumbSrc = i === 0 ? primarySrc : (i === 1 && altSrc ? altSrc : primarySrc);
          return (
            <button
              key={i}
              onClick={() => setSelectedIndex(i)}
              className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${
                i === selectedIndex ? 'border-gold' : 'border-border hover:border-gold/50'
              }`}
            >
              <img
                alt={`${product.name} view ${i + 1}`}
                src={thumbSrc || undefined}
                className="w-full h-full object-cover"
              />
            </button>
          );
        })}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[4/3] overflow-hidden bg-muted">
        <img
          alt={product.name}
          src={mainSrc || undefined}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
