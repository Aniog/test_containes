import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ProductGallery = ({ product }) => {
  const [selected, setSelected] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const images = product.images || [product.name];

  return (
    <div ref={containerRef} className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 md:w-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(idx)}
            className={`w-16 h-16 md:w-20 md:h-20 bg-charcoal-100 overflow-hidden border-2 transition-colors ${
              selected === idx ? 'border-gold-500' : 'border-transparent hover:border-charcoal-300'
            }`}
          >
            <img
              data-strk-img-id={`gallery-${product.id}-thumb-${idx}`}
              data-strk-img={`[gallery-prod-name-${product.id}] gold jewelry`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="160"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt=""
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[3/4] bg-charcoal-100 overflow-hidden">
        <img
          data-strk-img-id={`gallery-${product.id}-main`}
          data-strk-img={`[gallery-prod-name-${product.id}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>

      {/* Hidden text for image queries */}
      <span className="hidden" id={`gallery-prod-name-${product.id}`}>{product.name}</span>
    </div>
  );
};

export default ProductGallery;