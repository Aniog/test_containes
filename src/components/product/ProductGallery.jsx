import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductGallery({ product }) {
  const [selected, setSelected] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const images = product.images || [product.imageQuery, product.imageQuery, product.imageQuery];

  return (
    <div ref={containerRef} className="flex flex-col-reverse lg:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex lg:flex-col gap-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(idx)}
            className={`w-16 h-16 lg:w-20 lg:h-20 flex-shrink-0 border bg-velmora-sand overflow-hidden transition-all duration-200 ${
              selected === idx ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-sand'
            }`}
          >
            <img
              data-strk-img-id={`product-gallery-thumb-${product.id}-${idx}`}
              data-strk-img={`[product-gallery-${product.id}-name] jewelry detail`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="150"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`${product.name} view ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[3/4] bg-velmora-sand overflow-hidden">
        <img
          data-strk-img-id={`product-gallery-main-${product.id}-${selected}`}
          data-strk-img={`[product-gallery-${product.id}-name] gold jewelry editorial`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>

      {/* Hidden text for image query */}
      <span id={`product-gallery-${product.id}-name`} className="hidden">{product.name}</span>
    </div>
  );
}