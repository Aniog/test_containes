import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductGallery({ product, selectedVariant }) {
  const [active, setActive] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  // Generate image IDs based on variant
  const images = product.images.map((_, i) => ({
    imgId: `gallery-${product.id}-${i}-${selectedVariant.toLowerCase()}`,
    query: `[gallery-name-${product.id}] [gallery-desc-${product.id}] ${selectedVariant}`,
  }));

  return (
    <div ref={ref}>
      {/* Main image */}
      <div className="aspect-[3/4] bg-cream overflow-hidden mb-4">
        <img
          alt={`${product.name} - ${selectedVariant}`}
          data-strk-img-id={images[active].imgId}
          data-strk-img={images[active].query}
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          className="w-full h-full object-cover transition-transform duration-500"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {product.images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-16 h-20 bg-cream border-2 transition-colors ${
              i === active ? 'border-gold' : 'border-transparent hover:border-hairline'
            }`}
          >
            <img
              alt={`${product.name} view ${i + 1}`}
              data-strk-img-id={`thumb-${product.id}-${i}-${selectedVariant.toLowerCase()}`}
              data-strk-img={`[gallery-name-${product.id}] ${selectedVariant} jewelry detail`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Hidden for image query */}
      <span id={`gallery-name-${product.id}`} className="hidden">{product.name}</span>
      <span id={`gallery-desc-${product.id}`} className="hidden">{product.description}</span>
    </div>
  );
}
