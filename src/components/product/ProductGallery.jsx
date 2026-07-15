import { useState } from 'react';

export default function ProductGallery({ product }) {
  const [active, setActive] = useState(0);
  const thumbs = [0, 1, 2];

  return (
    <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-4">
      <div className="flex md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-visible">
        {thumbs.map((i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-16 h-16 md:w-20 md:h-20 flex-shrink-0 border overflow-hidden transition-colors bg-gradient-to-br from-[#E8DFD4] to-[#D4C8B8] ${
              active === i ? 'border-velmora-charcoal' : 'border-velmora-border'
            }`}
          >
            <img
              data-strk-img-id={`${product.id}-thumb-${i}`}
              data-strk-img={`[${product.id}-name] gold jewelry elegant`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`${product.name} view ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      <div className="flex-1 aspect-[3/4] bg-gradient-to-br from-[#E8DFD4] to-[#D4C8B8] overflow-hidden">
        <img
          data-strk-img-id={`${product.id}-main`}
          data-strk-img={`[${product.id}-name] gold jewelry elegant`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
