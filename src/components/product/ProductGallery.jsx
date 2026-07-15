import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductGallery({ product }) {
  const [selected, setSelected] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col-reverse md:flex-row gap-3 md:gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-visible">
        {product.images.map((img, i) => (
          <button
            key={img.id}
            onClick={() => setSelected(i)}
            className={`flex-shrink-0 w-16 md:w-20 aspect-[3/4] bg-velmora-sand overflow-hidden transition-all duration-300 ${
              i === selected ? 'ring-1 ring-velmora-gold opacity-100' : 'opacity-60 hover:opacity-100'
            }`}
          >
            <img
              alt={`${product.name} view ${i + 1}`}
              data-strk-img-id={`${img.id}-thumb`}
              data-strk-img={`[product-gallery-name-${product.id}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[3/4] bg-velmora-sand overflow-hidden">
        <img
          alt={product.name}
          data-strk-img-id={`${product.images[selected]?.id}-main`}
          data-strk-img={`[product-gallery-name-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>

      <span id={`product-gallery-name-${product.id}`} className="hidden">{product.name}</span>
    </div>
  );
}
