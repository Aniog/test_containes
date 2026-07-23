import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Vertical thumbnail rail on the left, large image on the right.
 * Renders two frames per product (primary + secondary) and adds
 * a soft "in-use" frame for additional context.
 */
export default function ProductGallery({ product }) {
  const frames = [
    { id: "1", imgId: product.imgId,  ratio: "4x5",  label: "Studio" },
    { id: "2", imgId: product.imgId2, ratio: "4x5",  label: "Detail" },
    { id: "3", imgId: `${product.id}-lifestyle-3a4b`, ratio: "4x5", label: "Worn" },
  ];
  const [active, setActive] = useState(frames[0].id);
  const current = frames.find((f) => f.id === active) ?? frames[0];

  return (
    <div className="grid grid-cols-[64px_1fr] sm:grid-cols-[80px_1fr] gap-3 sm:gap-5">
      {/* Thumbs */}
      <div className="flex flex-col gap-3">
        {frames.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setActive(f.id)}
            className={cn(
              "relative block aspect-[4/5] overflow-hidden image-placeholder",
              "border transition-all duration-300",
              active === f.id
                ? "border-espresso"
                : "border-taupe-light/60 hover:border-espresso/60",
            )}
            aria-label={`Show ${f.label}`}
            aria-current={active === f.id}
          >
            <img
              alt=""
              aria-hidden
              data-strk-img-id={f.imgId}
              data-strk-img={`[${product.id}-name] [${product.id}-tagline] ${f.label.toLowerCase()}`}
              data-strk-img-ratio={f.ratio}
              data-strk-img-width="200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              loading="lazy"
              className="relative z-10 w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="relative aspect-[4/5] overflow-hidden image-placeholder">
        <img
          alt={`${product.name} — ${current.label}`}
          data-strk-img-id={current.imgId}
          data-strk-img={`[${product.id}-name] [${product.id}-tagline] ${current.label.toLowerCase()}`}
          data-strk-img-ratio={current.ratio}
          data-strk-img-width="1200"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
          className="relative z-10 w-full h-full object-cover"
        />
        {product.badges?.[0] && (
          <span className="absolute top-4 left-4 z-20 text-[10px] uppercase tracking-widest2 bg-bone-50/90 text-espresso px-2.5 py-1">
            {product.badges[0]}
          </span>
        )}
      </div>
    </div>
  );
}
