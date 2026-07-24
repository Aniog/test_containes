import React, { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductGallery = ({ product }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product.id, activeIndex]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % product.images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div ref={containerRef} className="flex flex-col-reverse md:flex-row gap-4 h-full">
      {/* Thumbnails (Desktop: Left Vertical, Mobile: Bottom Horizontal) */}
      <div className="flex md:flex-col gap-4 overflow-auto snap-x md:snap-y hide-scrollbar md:w-24 w-full order-first md:order-none pb-2 md:pb-0">
        {product.images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={cn(
              "relative flex-none aspect-[3/4] w-20 md:w-full overflow-hidden rounded-[2px] transition-all duration-200 snap-center flex-shrink-0 cursor-pointer outline-none",
              activeIndex === idx 
                ? "ring-1 ring-primary ring-offset-2 ring-offset-background" 
                : "opacity-70 hover:opacity-100"
            )}
            aria-label={`View image ${idx + 1}`}
          >
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`${product.name} thumbnail ${idx + 1}`}
              className="w-full h-full object-cover"
              data-strk-img-id={`pdp-thumb-${product.id}-${idx}`}
              data-strk-img={`[pdp-title] thumbnail ${idx + 1}`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="150"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="relative flex-1 aspect-[3/4] md:aspect-auto md:h-[calc(100vh-8rem)] bg-secondary overflow-hidden group">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          data-strk-img-id={`pdp-main-${product.id}-${activeIndex}`}
          data-strk-img={`[pdp-title] view ${activeIndex + 1}`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="1200"
        />
        
        {/* Navigation Arrows for Main Image */}
        {product.images.length > 1 && (
          <>
            <button 
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            
            {/* Dots indicator for mobile */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 md:hidden">
              {product.images.map((_, idx) => (
                <div 
                  key={`dot-${idx}`}
                  className={cn(
                    "w-1.5 h-1.5 rounded-full transition-all duration-300",
                    activeIndex === idx ? "bg-primary w-4" : "bg-primary/40"
                  )}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
};

export default ProductGallery;
