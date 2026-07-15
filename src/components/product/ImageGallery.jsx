import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ImageGallery({ product }) {
  const [selected, setSelected] = useState(0);
  const containerRef = useRef(null);
  const views = [
    { id: `${product.id}-view1`, label: 'Front', query: `[${product.descId}] [${product.titleId}] front view` },
    { id: `${product.id}-view2`, label: 'Detail', query: `[${product.descId}] [${product.titleId}] closeup detail` },
    { id: `${product.id}-view3`, label: 'Worn', query: `[${product.descId}] [${product.titleId}] worn on model` },
    { id: `${product.id}-view4`, label: 'Packaging', query: `[${product.descId}] [${product.titleId}] gift box` },
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product.id]);

  return (
    <div ref={containerRef} className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 md:order-first">
        {views.map((view, i) => (
          <button
            key={view.id}
            onClick={() => setSelected(i)}
            className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border transition-colors ${
              i === selected ? 'border-velvet-accent' : 'border-velvet-border hover:border-velvet-muted'
            }`}
          >
            <img
              data-strk-img-id={`gallery-thumb-${view.id}`}
              data-strk-img={view.query}
              data-strk-img-ratio="1x1"
              data-strk-img-width="200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`${product.name} ${view.label}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[3/4] overflow-hidden bg-velvet-surface">
        <img
          data-strk-img-id={`gallery-main-${views[selected].id}`}
          data-strk-img={views[selected].query}
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={`${product.name} ${views[selected].label}`}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>
    </div>
  );
}
