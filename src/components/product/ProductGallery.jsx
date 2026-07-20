import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductGallery({ product }) {
  const [selectedImg, setSelectedImg] = useState(0);
  const containerRef = useRef(null);

  // Simulate gallery images from the product
  const gallery = [
    { imgId: `${product.id}-gallery-0`, key: 'main' },
    { imgId: `${product.id}-gallery-1`, key: 'angle' },
    { imgId: `${product.id}-gallery-2`, key: 'detail' },
    { imgId: `${product.id}-gallery-3`, key: 'worn' },
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product.id]);

  return (
    <div ref={containerRef}>
      {/* Main image */}
      <div className="aspect-[4/5] bg-velmora-blush mb-4 overflow-hidden">
        <img
          alt={product.name}
          data-strk-img-id={gallery[selectedImg].imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="900"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {gallery.map((img, idx) => (
          <button
            key={img.key}
            onClick={() => setSelectedImg(idx)}
            className={`w-16 h-20 flex-shrink-0 overflow-hidden transition-all duration-200 ${
              idx === selectedImg
                ? 'ring-1 ring-velmora-gold opacity-100'
                : 'opacity-50 hover:opacity-80'
            }`}
          >
            <img
              alt={`${product.name} view ${idx + 1}`}
              data-strk-img-id={img.imgId}
              data-strk-img={`[${product.descId}] [${product.titleId}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
