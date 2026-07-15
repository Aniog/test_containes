import React, { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ProductGallery = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [selectedImage]);

  const galleryImages = [
    { id: `${product.imgId}-main`, query: `[${product.descId}] [${product.titleId}] product detail`, ratio: '3x4', width: 800 },
    { id: `${product.imgId}-alt1`, query: `[${product.descId}] [${product.titleId}] worn model`, ratio: '3x4', width: 800 },
    { id: `${product.imgId}-alt2`, query: `[${product.descId}] [${product.titleId}] closeup detail`, ratio: '3x4', width: 800 },
    { id: `${product.imgId}-alt3`, query: `[${product.descId}] [${product.titleId}] lifestyle`, ratio: '3x4', width: 800 },
  ];

  return (
    <div ref={containerRef} className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto hide-scrollbar">
        {galleryImages.map((img, i) => (
          <button
            key={img.id}
            onClick={() => setSelectedImage(i)}
            className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 border-2 transition-colors ${
              selectedImage === i ? 'border-brand-gold' : 'border-brand-border'
            }`}
          >
            <img
              data-strk-img-id={`${img.id}-thumb`}
              data-strk-img={img.query}
              data-strk-img-ratio="3x4"
              data-strk-img-width="160"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
              alt=""
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[3x4] bg-brand-warm overflow-hidden">
        <img
          data-strk-img-id={galleryImages[selectedImage].id}
          data-strk-img={galleryImages[selectedImage].query}
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProductGallery;
