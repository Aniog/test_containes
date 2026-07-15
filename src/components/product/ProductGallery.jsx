import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductGallery({ product }) {
  const [selected, setSelected] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const images = [
    { key: 'main', label: `${product.name} main` },
    { key: 'detail', label: `${product.name} detail` },
    { key: 'lifestyle', label: `${product.name} lifestyle` },
    { key: 'packaging', label: `${product.name} packaging` },
  ];

  return (
    <div ref={containerRef}>
      {/* Main image */}
      <div className="aspect-[3/4] bg-sand/20 mb-4 overflow-hidden relative group">
        <img
          data-strk-img-id={`gallery-${product.imgId}-${images[selected].key}`}
          data-strk-img={`[gallery-product-name] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={images[selected].label}
          className="w-full h-full object-cover transition-all duration-700"
        />
        <p id="gallery-product-name" className="hidden">{product.name}</p>

        {/* Arrows */}
        <button
          onClick={() => setSelected(prev => prev > 0 ? prev - 1 : images.length - 1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-cream/80 text-deepbrown opacity-0 group-hover:opacity-100 transition-opacity hover:bg-cream"
          aria-label="Previous"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => setSelected(prev => (prev + 1) % images.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-cream/80 text-deepbrown opacity-0 group-hover:opacity-100 transition-opacity hover:bg-cream"
          aria-label="Next"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((img, i) => (
          <button
            key={img.key}
            onClick={() => setSelected(i)}
            className={`aspect-square bg-sand/20 overflow-hidden border transition-colors ${
              selected === i ? 'border-gold' : 'border-transparent hover:border-deepbrown/20'
            }`}
          >
            <img
              data-strk-img-id={`thumb-${product.imgId}-${img.key}`}
              data-strk-img={`[gallery-product-name] gold jewelry`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="160"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={img.label}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
