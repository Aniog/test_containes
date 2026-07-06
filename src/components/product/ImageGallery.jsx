import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ImageGallery({ product }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef(null);

  const images = [
    { id: product.imgId, titleId: product.titleId, descId: product.descId, query: `[${product.descId}] [${product.titleId}]` },
    { id: product.imgId2, titleId: `${product.titleId}-2`, descId: `${product.descId}-2`, query: `[${product.titleId}] gold jewelry worn model close up` },
    { id: `${product.imgId}-3`, titleId: `${product.titleId}-3`, descId: `${product.descId}-3`, query: `[${product.titleId}] gold jewelry detail texture` },
    { id: `${product.imgId}-4`, titleId: `${product.titleId}-4`, descId: `${product.descId}-4`, query: `[${product.titleId}] gold jewelry flat lay editorial` },
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product.id]);

  return (
    <div ref={containerRef} className="flex flex-col-reverse md:flex-row gap-3 md:gap-4">
      {/* Thumbnails */}
      <div className="flex flex-row md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-visible scrollbar-hide">
        {images.map((img, idx) => (
          <button
            key={img.id}
            onClick={() => setActiveIdx(idx)}
            className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${
              activeIdx === idx ? 'border-charcoal' : 'border-transparent hover:border-divider'
            }`}
          >
            <img
              data-strk-img-id={`thumb-${img.id}`}
              data-strk-img={img.query}
              data-strk-img-ratio="1x1"
              data-strk-img-width="160"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`View ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 relative aspect-square md:aspect-[3/4] overflow-hidden bg-sand">
        {images.map((img, idx) => (
          <img
            key={img.id}
            data-strk-img-id={img.id}
            data-strk-img={img.query}
            data-strk-img-ratio="3x4"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${
              activeIdx === idx ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
