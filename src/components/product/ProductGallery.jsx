import React, { useState, useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ProductGallery = ({ product }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [product.images.primary, product.images.secondary];
  const galleryRef = useRef(null);

  useEffect(() => {
    if (galleryRef.current) {
      return ImageHelper.loadImages(strkImgConfig, galleryRef.current);
    }
  }, [product.id]);

  return (
    <div ref={galleryRef} className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 md:w-20 flex-shrink-0">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-16 h-16 md:w-20 md:h-20 border-2 overflow-hidden transition-colors ${
              activeIndex === index
                ? 'border-velmora-gold'
                : 'border-transparent hover:border-velmora-border'
            }`}
          >
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`${product.name} view ${index + 1}`}
              className="w-full h-full object-cover"
              data-strk-img-id={`product-${product.id}-thumb-${index}`}
              data-strk-img={`[product-title-${product.id}]`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="200"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 aspect-square md:aspect-[4/5] bg-velmora-muted overflow-hidden">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-opacity duration-300"
          data-strk-img-id={`product-${product.id}-main`}
          data-strk-img={`[product-title-${product.id}]`}
          data-strk-img-ratio="1x1"
          data-strk-img-width="800"
        />
      </div>
    </div>
  );
};

export default ProductGallery;
