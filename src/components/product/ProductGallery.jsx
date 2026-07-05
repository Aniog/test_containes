import React, { useState } from "react";
import { ILLUSTRATIONS } from "@/components/illustrations/JewelryArt";
import { cn } from "@/lib/utils";

/**
 * Vertical image gallery for the product detail page.
 * - Left: thumbnails column
 * - Right: large image with subtle hover-to-reveal alt view
 * - Stacks vertically on mobile
 */
const ProductGallery = ({ product }) => {
  const Illustration = ILLUSTRATIONS[product.illustration];
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const thumbs = [0, 1, 2, 3];

  return (
    <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4">
      {/* Thumbnails (desktop left rail / mobile top row) */}
      <div className="order-2 md:order-1 flex md:flex-col gap-3 md:gap-3 overflow-x-auto md:overflow-visible no-scrollbar">
        {thumbs.map((i) => {
          const isActive = active === i;
          return (
            <button
              key={i}
              type="button"
              aria-label={`View image ${i + 1}`}
              onClick={() => setActive(i)}
              className={cn(
                "shrink-0 w-20 h-24 bg-mocha overflow-hidden border transition-colors",
                isActive ? "border-ink" : "border-transparent hover:border-ink/30"
              )}
            >
              {Illustration ? (
                <div
                  className="w-full h-full"
                  style={{
                    transform: `scale(${1 + i * 0.04}) rotate(${i % 2 === 0 ? -1 : 1}deg)`,
                  }}
                >
                  <Illustration />
                </div>
              ) : (
                <div className="w-full h-full bg-mocha" />
              )}
            </button>
          );
        })}
      </div>

      {/* Main image */}
      <div
        className="order-1 md:order-2 relative aspect-[4/5] bg-mocha overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {Illustration ? (
          <>
            <div
              className={cn(
                "absolute inset-0 product-image-swap",
                hovered ? "opacity-0" : "opacity-100"
              )}
            >
              <Illustration />
            </div>
            <div
              className={cn(
                "absolute inset-0 product-image-swap",
                hovered ? "opacity-100 scale-[1.04]" : "opacity-0 scale-100"
              )}
            >
              <div className="absolute inset-0 scale-110">
                <Illustration />
              </div>
              <div className="absolute inset-0 bg-gold/10 mix-blend-overlay" />
            </div>
          </>
        ) : (
          <div className="w-full h-full bg-mocha" />
        )}
        <div className="absolute bottom-4 right-4 bg-ivory/90 text-ink text-[10px] uppercase tracking-eyebrow px-3 py-1.5 font-sans">
          {active + 1} / {thumbs.length}
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
