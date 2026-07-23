import { useState } from 'react';

export default function ProductGallery({ product }) {
  const [selected, setSelected] = useState(0);
  const thumbs = Array.from({ length: product.images }, (_, i) => i);

  return (
    <div className="flex gap-4">
      {/* Thumbnails */}
      <div className="hidden md:flex flex-col gap-3">
        {thumbs.map((i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`w-16 h-16 bg-linen flex items-center justify-center border transition-colors ${
              selected === i ? 'border-gold' : 'border-transparent hover:border-linen'
            }`}
          >
            <span className="text-[9px] uppercase tracking-widest text-taupe">{i + 1}</span>
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[3/4] bg-linen relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[10px] uppercase tracking-widest text-taupe">
            Image {selected + 1}
          </span>
        </div>

        {/* Mobile dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 md:hidden">
          {thumbs.map((i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                selected === i ? 'bg-gold' : 'bg-taupe/40'
              }`}
              aria-label={`View image ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
