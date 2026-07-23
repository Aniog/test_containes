import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductGallery({ images, name }) {
  const [selected, setSelected] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const prev = () => setSelected((s) => (s === 0 ? images.length - 1 : s - 1));
  const next = () => setSelected((s) => (s === images.length - 1 ? 0 : s + 1));

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Thumbnails - desktop */}
      <div className="hidden md:flex flex-col gap-3 order-1">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`w-16 h-20 overflow-hidden border-2 transition-all ${
              selected === i ? 'border-gold' : 'border-transparent hover:border-warm-border'
            }`}
          >
            <img src={img} alt={`${name} view ${i + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 relative order-2 md:order-2">
        <div
          className="aspect-[3/4] bg-warm-muted overflow-hidden cursor-crosshair"
          onMouseEnter={() => setZoomed(true)}
          onMouseLeave={() => setZoomed(false)}
        >
          <img
            src={images[selected]}
            alt={name}
            className={`w-full h-full object-cover transition-transform duration-300 ${
              zoomed ? 'scale-150' : 'scale-100'
            }`}
          />
        </div>

        {/* Mobile arrows */}
        <button
          onClick={prev}
          className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 shadow-sm"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={next}
          className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 shadow-sm"
          aria-label="Next image"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Dots - mobile */}
        <div className="md:hidden flex justify-center gap-1.5 mt-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                selected === i ? 'bg-gold w-4' : 'bg-warm-border'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}