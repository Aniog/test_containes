import React, { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
// @ts-ignore
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const Gallery = ({ productName, productId }) => {
  const [activeImg, setActiveImg] = useState(0);
  
  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, document.body);
    });
    return () => cancelAnimationFrame(frameId);
  }, [activeImg]);

  // Generating 3 unique images for each product using IDs
  const images = [
    { id: 1, query: "jewelry focus" },
    { id: 2, query: "jewelry detail" },
    { id: 3, query: "jewelry lifestyle" }
  ];

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Hidden context for images */}
      {images.map(img => (
        <span key={img.id} id={`prod-${productId}-query-${img.id}`} className="hidden">{img.query}</span>
      ))}

      {/* Thumbnails */}
      <div className="flex flex-row md:flex-col gap-4 overflow-x-auto md:overflow-y-auto no-scrollbar md:w-24">
        {images.map((img, i) => (
          <button 
            key={img.id}
            onClick={() => setActiveImg(i)}
            className={cn(
              "flex-shrink-0 w-20 aspect-square overflow-hidden bg-brand-beige border transition-all",
              activeImg === i ? "border-accent" : "border-transparent"
            )}
          >
          <img
            data-strk-img-id={`prod-${productId}-thumb-${img.id}`}
            data-strk-img={`[prod-title-${productId}] [prod-${productId}-query-${img.id}]`}
            data-strk-img-ratio="1x1"
            data-strk-img-width="200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
            alt={`${productName} view ${img.id}`}
            className="w-full h-full object-cover"
          />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-grow aspect-[4/5] bg-brand-beige overflow-hidden">
        <img
          data-strk-img-id={`prod-${productId}-main-large`}
          data-strk-img={`[prod-title-${productId}] [prod-${productId}-query-${images[activeImg].id}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="1200"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3C/svg%3E"
          alt={productName}
          className="w-full h-full object-cover"
          key={activeImg} // Force re-render/scan for new image
        />
      </div>
    </div>
  );
};

export default Gallery;
