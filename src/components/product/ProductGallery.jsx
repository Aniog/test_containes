import { useState } from 'react';

const images = [
  { id: 'main', label: 'front' },
  { id: 'alt1', label: 'angle' },
  { id: 'alt2', label: 'detail' },
  { id: 'alt3', label: 'worn' },
];

export default function ProductGallery({ product }) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 md:w-20 flex-shrink-0">
        {images.map((img, idx) => (
          <button
            key={img.id}
            onClick={() => setSelected(idx)}
            className={`w-16 h-16 md:w-full md:h-20 bg-velvet-100 flex-shrink-0 transition-all duration-300 ${
              selected === idx
                ? 'ring-1 ring-velvet-900 opacity-100'
                : 'opacity-60 hover:opacity-80'
            }`}
          >
            <img
              alt={`${product.name} ${img.label}`}
              data-strk-img-id={`pdp-thumb-${product.id}-${img.id}`}
              data-strk-img={`gold jewelry ${product.name} ${img.label} editorial`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[3/4] bg-velvet-100 overflow-hidden">
        <img
          alt={`${product.name} main view`}
          data-strk-img-id={`pdp-main-${product.id}-${selected}`}
          data-strk-img={`gold jewelry ${product.name} main view editorial warm neutral`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover transition-opacity duration-500"
        />
      </div>
    </div>
  );
}
