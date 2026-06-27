import { useState } from 'react';
import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductGallery({ product }) {
  const [selectedImage, setSelectedImage] = useState('main');
  const containerRef = useRef(null);

  const images = [
    { id: 'main', key: product.images.main, label: 'Main view' },
    { id: 'hover', key: product.images.hover, label: 'Alternate view' },
    { id: 'thumb1', key: product.images.thumb1, label: 'Detail 1' },
    { id: 'thumb2', key: product.images.thumb2, label: 'Detail 2' },
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product.id]);

  const currentImage = images.find((img) => img.id === selectedImage) || images[0];

  return (
    <div ref={containerRef} className="space-y-4">
      {/* Main image */}
      <div className="aspect-[3/4] bg-[#F5F3F0] overflow-hidden">
        <img
          data-strk-img-id={`product-${product.id}-${currentImage.id}`}
          data-strk-img={`[${currentImage.key}] [${product.name}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-3">
        {images.map((img) => (
          <button
            key={img.id}
            onClick={() => setSelectedImage(img.id)}
            className={`aspect-square bg-[#F5F3F0] overflow-hidden border-2 transition-all duration-300 ${
              selectedImage === img.id
                ? 'border-[#B8860B]'
                : 'border-transparent hover:border-[#E8E4DF]'
            }`}
            aria-label={img.label}
          >
            <img
              data-strk-img-id={`product-${product.id}-thumb-${img.id}`}
              data-strk-img={`[${img.key}] [${product.name}]`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={img.label}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
