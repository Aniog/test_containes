import { useEffect, useRef, useState } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import StrkImage from "@/components/ui/StrkImage";
import { cn } from "@/lib/utils";

/**
 * ProductGallery — main + thumbnails.
 * Uses the same pre-built imgIds as ProductCard (`${product.id}-1` and `-2`)
 * so the curated stock images resolve correctly from strk-img-config.
 */
export default function ProductGallery({ product }) {
  const [active, setActive] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return undefined;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, [active, product.id]);

  if (!product.images?.length) return null;
  const current = product.images[active];

  // Map gallery index 0..n-1 to a pre-built config key.
  // Index 0 → "-1", index 1 → "-2", index ≥2 → "-1" (reuse the primary).
  const slotId = (i) => {
    if (i === 0) return `${product.id}-1`;
    if (i === 1) return `${product.id}-2`;
    return `${product.id}-1`;
  };

  const queryFor = (i, baseAlt) =>
    `[${product.id}-name] [${product.id}-desc] ${product.name} ${baseAlt || ""} gold jewelry`.trim();

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
      {/* Thumbnails (desktop left column) */}
      <div className="hidden md:flex md:col-span-2 flex-col gap-3 order-1">
        {product.images.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              "block aspect-square w-full overflow-hidden bg-cream border transition-colors",
              active === i ? "border-ink" : "border-hairline hover:border-muted"
            )}
            aria-label={`Show image ${i + 1}`}
          >
            <StrkImage
              imgId={slotId(i)}
              query={queryFor(i, "thumbnail")}
              ratio="1x1"
              width={200}
              alt={img.alt || `${product.name} view ${i + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="md:col-span-10 order-2">
        <div className="relative aspect-[4/5] bg-cream overflow-hidden">
          <StrkImage
            key={`${product.id}-main-${active}`}
            imgId={slotId(active)}
            query={queryFor(active, current.alt || "editorial gold jewelry")}
            ratio="4x5"
            width={1200}
            alt={current.alt || product.name}
            eager
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Mobile thumbnail strip */}
        <div className="md:hidden mt-3 flex gap-2 overflow-x-auto no-scrollbar">
          {product.images.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "flex-shrink-0 w-16 h-16 overflow-hidden bg-cream border transition-colors",
                active === i ? "border-ink" : "border-hairline"
              )}
              aria-label={`Show image ${i + 1}`}
            >
              <StrkImage
                imgId={slotId(i)}
                query={queryFor(i, "thumbnail")}
                ratio="1x1"
                width={150}
                alt={img.alt || `${product.name} thumbnail ${i + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
