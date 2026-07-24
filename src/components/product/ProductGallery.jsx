import React, { useRef, useState } from "react";
import { useStrkImages } from "@/lib/useStrkImages";

// Reusable product gallery with thumbnail rail.
// Pass `images = [{ imgId, alt, query, ratio?, width? }]`. The first image is primary.
export default function ProductGallery({ images, name }) {
  const ref = useRef(null);
  useStrkImages(ref, [images?.length, name]);

  const [activeIdx, setActiveIdx] = useState(0);
  const safeImages = images?.length ? images : [];
  const active = safeImages[activeIdx] || safeImages[0];

  if (!active) return null;

  return (
    <div ref={ref} className="grid grid-cols-1 gap-4 md:grid-cols-[80px_1fr]">
      {/* Thumbnails (desktop) */}
      <div className="order-2 flex flex-row gap-3 overflow-x-auto md:order-1 md:flex-col md:overflow-visible">
        {safeImages.map((img, i) => (
          <button
            key={img.imgId}
            type="button"
            onClick={() => setActiveIdx(i)}
            aria-label={`View image ${i + 1} of ${safeImages.length}`}
            aria-current={i === activeIdx}
            className={`relative aspect-square w-20 flex-shrink-0 overflow-hidden border transition-colors duration-300 ${
              i === activeIdx ? "border-ink-800" : "border-ink-800/10 hover:border-ink-800/30"
            }`}
          >
            <img
              alt={img.alt}
              data-strk-img-id={img.imgId}
              data-strk-img={img.query}
              data-strk-img-ratio="1x1"
              data-strk-img-width="240"
              loading="lazy"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="order-1 md:order-2">
        <div className="relative aspect-square w-full overflow-hidden bg-ivory-100">
          <img
            alt={active.alt}
            data-strk-img-id={active.imgId}
            data-strk-img={active.query}
            data-strk-img-ratio="1x1"
            data-strk-img-width="1200"
            loading="eager"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
