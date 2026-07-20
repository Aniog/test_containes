import { useRef, useEffect, useState } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ImageGallery({ product }) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const images = product.images;
  const total = images.length;

  return (
    <div ref={containerRef} className="w-full">
      {/* Main image */}
      <div className="relative aspect-[4/5] bg-sand overflow-hidden">
        {images.map((img, i) => (
          <img
            key={img.id}
            data-strk-img-id={img.id}
            data-strk-img={`[product-${product.id}-name] [product-${product.id}-tagline] ${img.query}`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="1200"
            alt={`${product.name} — view ${i + 1}`}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
              i === activeIndex ? "opacity-100" : "opacity-0"
            )}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        ))}

        {total > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => setActiveIndex((i) => (i - 1 + total) % total)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-ivory/85 text-espresso flex items-center justify-center hover:bg-ivory transition-colors"
            >
              <ChevronLeft className="w-4 h-4" strokeWidth={1.4} />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() => setActiveIndex((i) => (i + 1) % total)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-ivory/85 text-espresso flex items-center justify-center hover:bg-ivory transition-colors"
            >
              <ChevronRight className="w-4 h-4" strokeWidth={1.4} />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {total > 1 && (
        <div className="mt-4 flex gap-3">
          {images.map((img, i) => (
            <button
              key={img.id}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={cn(
                "flex-shrink-0 w-20 aspect-[4/5] overflow-hidden border transition-colors",
                i === activeIndex ? "border-espresso" : "border-transparent hover:border-sand"
              )}
              aria-label={`View image ${i + 1}`}
            >
              <img
                data-strk-img-id={`${img.id}-thumb`}
                data-strk-img={`[product-${product.id}-name] ${img.query}`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="200"
                alt={`${product.name} thumbnail`}
                className="w-full h-full object-cover"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
