import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductGallery({ product }) {
  const [selected, setSelected] = useState(0);
  const containerRef = useRef(null);

  const images = [
    { imgId: `${product.imgId}-1`, label: 'Front view' },
    { imgId: `${product.imgId}-2`, label: 'Detail view' },
    { imgId: `${product.imgId}-3`, label: 'On model' },
    { imgId: `${product.imgId}-4`, label: 'Styled' },
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 order-2 md:order-1">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`w-16 h-16 md:w-20 md:h-20 flex-shrink-0 bg-velmora-sand overflow-hidden transition-all duration-300 ${
              i === selected ? 'ring-1 ring-velmora-gold' : 'ring-0 opacity-60 hover:opacity-100'
            }`}
          >
            <img
              data-strk-img-id={img.imgId}
              data-strk-img={`[${product.descId}] [${product.titleId}]`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="160"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`${product.name} - ${img.label}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[3/4] bg-velmora-sand overflow-hidden order-1 md:order-2">
        <img
          data-strk-img-id={images[selected].imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="900"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} - ${images[selected].label}`}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
      </div>
    </div>
  );
}