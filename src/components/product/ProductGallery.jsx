import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductGallery({ product }) {
  const [selected, setSelected] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [selected]);

  // Simulated gallery images
  const images = [
    { id: 'img1', q: `${product.name} fine gold jewelry editorial warm lighting` },
    { id: 'img2', q: `${product.name} closeup detail texture` },
    { id: 'img3', q: `${product.name} worn model lifestyle` },
    { id: 'img4', q: `${product.name} packaging box flatlay` },
  ];

  return (
    <div ref={containerRef}>
      <div className="aspect-[3/4] bg-cream-100 rounded-sm overflow-hidden mb-4">
        <img
          data-strk-img-id={`pdp-gallery-${selected}`}
          data-strk-img={`[pdp-name-ref] ${images[selected].q}`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="700"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>

      <div className="grid grid-cols-4 gap-3">
        {images.map((img, i) => (
          <button
            key={img.id}
            onClick={() => setSelected(i)}
            className={`aspect-square bg-cream-100 rounded-sm overflow-hidden border-2 transition-all duration-200 ${
              selected === i ? 'border-gold-500' : 'border-transparent hover:border-deep-300'
            }`}
          >
            <img
              data-strk-img-id={`pdp-thumb-${i}-${product.id}`}
              data-strk-img={`${img.q}`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="160"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt=""
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
