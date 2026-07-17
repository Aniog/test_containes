import React, { useState } from "react";
import { cn } from "@/lib/utils";

export default function ImageGallery({ product }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = product.imgTitles?.[activeIdx] || product.name;
  const activeId = product.imgIds?.[activeIdx] || `${product.id}-img`;

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-6">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-visible no-scrollbar md:w-20 shrink-0">
        {product.imgIds.map((id, idx) => (
          <button
            key={id}
            type="button"
            onClick={() => setActiveIdx(idx)}
            aria-label={`Show image ${idx + 1}`}
            className={cn(
              "relative shrink-0 w-16 h-20 md:w-20 md:h-24 bg-ivory-soft overflow-hidden border transition-colors",
              activeIdx === idx ? "border-espresso" : "border-hairline hover:border-ink-muted"
            )}
          >
            <img
              alt={product.imgTitles[idx]}
              data-strk-img-id={`${id}-thumb`}
              data-strk-img={`[${product.imgTitles[idx]}] [product-name-${product.id}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="200"
              className="absolute inset-0 w-full h-full object-cover"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 min-w-0">
        <div className="relative aspect-square bg-ivory-soft overflow-hidden">
          <img
            alt={active}
            data-strk-img-id={`${activeId}-main`}
            data-strk-img={`[${active}] [product-name-${product.id}]`}
            data-strk-img-ratio="1x1"
            data-strk-img-width="1200"
            className="absolute inset-0 w-full h-full object-cover"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
      </div>
    </div>
  );
}
