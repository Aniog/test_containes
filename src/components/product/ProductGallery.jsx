import { useEffect, useRef, useState } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../../strk-img-config.json";
import { cn } from "../../lib/cn.js";

// Image gallery for the product detail page. On desktop the user picks
// the active frame from a vertical thumbnail column; on mobile the
// frames stack vertically and the active one is the one in view.
export default function ProductGallery({ product }) {
  const containerRef = useRef(null);
  const [active, setActive] = useState(0);

  // The seed catalog carries one resolved image per product; the second
  // frame reuses the primary so the gallery stays a single visual until
  // the catalog grows to include distinct secondary photos.
  const frames = [
    {
      imgId: product.imgIds.primary,
      queryKey: `${product.id}-name`,
      contextKey: `${product.id}-gallery-context-1`,
    },
    {
      // The secondary slot id is identical to the primary so the
      // resolver's image config returns the same URL. Real catalogs
      // will introduce a distinct `product.imgIds.secondary` key.
      imgId: product.imgIds.primary,
      queryKey: `${product.id}-name`,
      contextKey: `${product.id}-gallery-context-2`,
    },
  ];

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product.id]);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 gap-4 md:grid-cols-[80px_1fr] md:gap-6"
    >
      {/* Per-frame context tags for image queries. Each gallery slot
          references a unique id so the image resolver returns a
          different stock image for each frame. */}
      <span id={`${product.id}-gallery-context-1`} className="sr-only">
        Velmora product photo, primary angle, demi-fine gold jewelry
      </span>
      <span id={`${product.id}-gallery-context-2`} className="sr-only">
        Velmora product photo, detail closeup on fabric or skin
      </span>

      {/* Thumbnails — desktop only */}
      <div className="order-2 hidden flex-col gap-3 md:order-1 md:flex">
        {frames.map((frame, idx) => (
          <button
            key={frame.imgId}
            type="button"
            onClick={() => setActive(idx)}
            className={cn(
              "relative block aspect-[4/5] w-full overflow-hidden bg-ink-900 transition-all duration-300",
              active === idx
                ? "ring-1 ring-gold-400 ring-offset-2 ring-offset-ink-950"
                : "opacity-60 hover:opacity-100"
            )}
            aria-label={`View image ${idx + 1}`}
          >
            <img
              data-strk-img-id={`${frame.imgId}-thumb`}
              data-strk-img={`[${frame.queryKey}] [${frame.contextKey}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Active frame */}
      <div className="order-1 md:order-2">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink-900">
          {frames.map((frame, idx) => (
            <img
              key={frame.imgId}
              data-strk-img-id={frame.imgId}
              data-strk-img={`[${frame.queryKey}] [${frame.contextKey}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={product.name}
              loading={idx === 0 ? "eager" : "lazy"}
              className={cn(
                "absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out",
                idx === active ? "opacity-100" : "opacity-0"
              )}
            />
          ))}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-900/0 via-ink-900/10 to-ink-950/60"
          />

          {/* Mobile dots */}
          <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2 md:hidden">
            {frames.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActive(idx)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  active === idx ? "w-8 bg-gold-400" : "w-1.5 bg-ink-500"
                )}
                aria-label={`View image ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
