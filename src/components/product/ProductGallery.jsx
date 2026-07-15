import React, { useState } from "react";
import StrkImage from "@/components/ui/StrkImage";

export default function ProductGallery({ product }) {
  const { gallery = [], query, alt, id } = product;
  const sources = [query, ...gallery].filter(Boolean);
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-6">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 md:w-20 lg:w-24">
        {sources.map((q, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActive(idx)}
            aria-label={`View image ${idx + 1}`}
            className={`relative w-20 md:w-full aspect-square overflow-hidden bg-cocoa-soft border transition-colors duration-200 ${
              active === idx ? "border-ink" : "border-transparent hover:border-line"
            }`}
          >
            <StrkImage
              imgId={`${id}-thumb-${idx}`}
              query={q}
              ratio="1x1"
              width={300}
              alt={`${alt} thumbnail ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Active image */}
      <div className="flex-1 relative bg-cocoa-soft aspect-square overflow-hidden">
        <StrkImage
          imgId={`${id}-main-${active}`}
          query={sources[active]}
          ratio="1x1"
          width={1200}
          alt={alt}
          loading="eager"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
