import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { IMAGE_PLACEHOLDER } from '@/lib/images';

export default function ProductGallery({ product }) {
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);

  const images = [
    { id: `${product.imageId}-main`, query: `[pdp-title-${product.id}]`, ratio: '4x3', width: 900 },
    { id: `${product.imageId}-hover`, query: `[pdp-hover-${product.id}] [pdp-title-${product.id}]`, ratio: '4x3', width: 900 },
    { id: `${product.imageId}-lifestyle`, query: `[pdp-life-${product.id}]`, ratio: '4x3', width: 900 },
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product.id]);

  return (
    <div ref={containerRef} className="flex flex-col-reverse gap-4 md:flex-row md:gap-6">
      <div className="flex gap-3 md:flex-col md:gap-4">
        {images.map((img, idx) => (
          <button
            key={img.id}
            onClick={() => setActive(idx)}
            className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-sm bg-parchment border transition-colors ${
              active === idx ? 'border-gold' : 'border-transparent hover:border-stoneborder'
            }`}
            aria-label={`View image ${idx + 1}`}
          >
            <img
              data-strk-img-id={img.id}
              data-strk-img={img.query}
              data-strk-img-ratio={img.ratio}
              data-strk-img-width={img.width}
              src={IMAGE_PLACEHOLDER}
              alt={`${product.name} view ${idx + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>

      <div className="relative aspect-[4/5] flex-1 overflow-hidden rounded-sm bg-parchment">
        {images.map((img, idx) => (
          <img
            key={img.id}
            data-strk-img-id={`${img.id}-hero`}
            data-strk-img={img.query}
            data-strk-img-ratio={img.ratio}
            data-strk-img-width={1200}
            src={IMAGE_PLACEHOLDER}
            alt={`${product.name} view ${idx + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              active === idx ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <p id={`pdp-title-${product.id}`} className="sr-only">
          {product.imageQuery}
        </p>
        <p id={`pdp-hover-${product.id}`} className="sr-only">
          {product.hoverQuery}
        </p>
        <p id={`pdp-life-${product.id}`} className="sr-only">
          {product.hoverQuery} lifestyle editorial
        </p>
      </div>
    </div>
  );
}