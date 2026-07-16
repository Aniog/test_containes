import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ProductGallery = ({ product }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const images = [
    { id: `pdp-main-${product.id}-a1`, query: `[${product.descId}] [${product.titleId}]` },
    { id: `pdp-alt1-${product.id}-b2`, query: `[${product.titleId}] gold jewelry detail close up` },
    { id: `pdp-alt2-${product.id}-c3`, query: `[${product.titleId}] jewelry worn on model` },
    { id: `pdp-alt3-${product.id}-d4`, query: `[${product.titleId}] jewelry packaging gift box` },
  ];

  return (
    <div ref={containerRef} className="grid grid-cols-4 gap-3">
      {/* Main image */}
      <div className="col-span-4 aspect-[3/4] bg-warm/20 overflow-hidden">
        <img
          data-strk-img-id={images[0].id}
          data-strk-img={images[0].query}
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      {images.slice(1).map((img) => (
        <div key={img.id} className="aspect-square bg-warm/20 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
          <img
            data-strk-img-id={img.id}
            data-strk-img={img.query}
            data-strk-img-ratio="1x1"
            data-strk-img-width="200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ProductGallery;
