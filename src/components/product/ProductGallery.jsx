import React, { useEffect, useRef, useState } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function ProductGallery({ product }) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return undefined;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product.id]);

  useEffect(() => {
    setActiveIndex(0);
  }, [product.id]);

  return (
    <div ref={containerRef} className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="md:w-20 flex md:flex-col gap-3">
        {product.images.map((img, idx) => (
          <button
            key={img.id}
            type="button"
            onClick={() => setActiveIndex(idx)}
            aria-label={`View image ${idx + 1}`}
            aria-current={activeIndex === idx}
            className={
              "relative aspect-[4/5] w-full overflow-hidden bg-warm-radial-soft transition-all " +
              (activeIndex === idx
                ? "ring-1 ring-ink ring-offset-2 ring-offset-bone"
                : "opacity-80 hover:opacity-100")
            }
          >
            <img
              alt={img.alt}
              data-strk-img-id={`${img.id}-thumb`}
              data-strk-img={img.query}
              data-strk-img-ratio="4x5"
              data-strk-img-width="200"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 relative aspect-[4/5] overflow-hidden bg-warm-radial">
        {product.images.map((img, idx) => (
          <img
            key={img.id}
            alt={img.alt}
            data-strk-img-id={`${img.id}-main`}
            data-strk-img={img.query}
            data-strk-img-ratio="4x5"
            data-strk-img-width="1200"
            loading={idx === 0 ? "eager" : "lazy"}
            className={
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-500 " +
              (activeIndex === idx ? "opacity-100" : "opacity-0")
            }
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        ))}
      </div>
    </div>
  );
}
