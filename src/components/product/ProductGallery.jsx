import React, { useState } from "react";
import { cn } from "@/lib/utils";

export default function ProductGallery({ images, name }) {
  const [active, setActive] = useState(0);
  const validImages = images?.length ? images : [""];
  const safe = (idx) => validImages[Math.min(idx, validImages.length - 1)];

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible no-scrollbar md:w-20 shrink-0">
        {validImages.map((src, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`View image ${i + 1}`}
            className={cn(
              "shrink-0 w-16 md:w-20 aspect-[4/5] bg-taupe overflow-hidden border transition-colors",
              active === i ? "border-espresso" : "border-transparent hover:border-line"
            )}
          >
            <img
              src={src}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="relative flex-1 aspect-[4/5] md:aspect-[4/5] bg-taupe overflow-hidden">
        <img
          key={active}
          src={safe(active)}
          alt={`${name} — image ${active + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          fetchpriority={active === 0 ? "high" : "auto"}
        />
      </div>
    </div>
  );
}