import React, { useState } from "react";
import { cn } from "@/lib/utils";

const GALLERY_IDS = ["a", "b", "c", "d"];

export default function ProductGallery({ product }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-4 md:flex-row-reverse">
      {/* Main image */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-velmora-stone md:aspect-square lg:aspect-[4/5]">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto md:w-24 md:flex-col md:overflow-visible">
        {GALLERY_IDS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={cn(
              "relative aspect-square w-20 shrink-0 overflow-hidden bg-velmora-stone border transition-all duration-200 md:w-full",
              active === idx
                ? "border-velmora-dark"
                : "border-transparent hover:border-velmora-border"
            )}
            aria-label={`View image ${idx + 1}`}
          >
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`${product.name} view ${idx + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
