import React, { useState, useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ProductGallery = ({ product }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const images = product.images;

  return (
    <div ref={containerRef} className="flex gap-4">
      {/* Thumbnails */}
      <div className="flex flex-col gap-3 w-16 md:w-20 flex-shrink-0">
        {images.map((img, index) => (
          <button
            key={img.id}
            onClick={() => setSelectedIndex(index)}
            className={`aspect-square bg-velmora-sand overflow-hidden border-2 transition-colors ${
              selectedIndex === index
                ? 'border-velmora-ink'
                : 'border-transparent hover:border-velmora-stone'
            }`}
          >
            <img
              data-strk-img-id={`${img.id}-thumb`}
              data-strk-img={`[product-${product.id}-name]`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`${product.name} view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[4/5] bg-velmora-sand overflow-hidden">
        <img
          data-strk-img-id={images[selectedIndex].id}
          data-strk-img={`[product-${product.id}-name] [product-${product.id}-subtitle]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProductGallery;
