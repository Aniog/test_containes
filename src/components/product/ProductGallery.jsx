import { useState } from 'react';

export default function ProductGallery({ product }) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 md:w-20 flex-shrink-0">
        {product.images.map((img, i) => (
          <button
            key={img.id}
            onClick={() => setSelected(i)}
            className={`w-16 h-16 md:w-20 md:h-20 bg-elevated overflow-hidden flex-shrink-0 border transition-colors duration-300 ${
              selected === i ? 'border-gold' : 'border-transparent hover:border-white/20'
            }`}
            aria-label={`View image ${i + 1}`}
          >
            <img
              data-strk-img-id={`${product.id}-thumb-${i}`}
              data-strk-img={`[product-${product.id}-name] gold jewelry detail`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={img.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-square md:aspect-[4/5] bg-elevated overflow-hidden">
        <img
          data-strk-img-id={`${product.id}-main-gallery`}
          data-strk-img={`[product-${product.id}-name] gold jewelry`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.images[selected]?.alt || product.name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
