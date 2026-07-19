import { useState } from "react";
import { cn } from "@/lib/utils";
import { PRODUCT_IMAGES } from "@/data/realImages";

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

/**
 * Build the gallery from the resolved real-image URLs.
 * The first slot is the primary, the second the secondary, then we
 * fall back to other entries (cycling) to give the gallery depth.
 */
function buildGallery(product) {
  const set = PRODUCT_IMAGES[product.id];
  if (!set) {
    return [
      { id: "p", url: PLACEHOLDER, ratio: "4x5" },
      { id: "s", url: PLACEHOLDER, ratio: "4x5" },
      { id: "lifestyle", url: PLACEHOLDER, ratio: "4x5" },
      { id: "detail", url: PLACEHOLDER, ratio: "4x5" },
    ];
  }
  const gallery = set.gallery && set.gallery.length >= 4
    ? set.gallery
    : [set.primary, set.secondary, set.primary, set.secondary];
  return [
    { id: "p", url: gallery[0], ratio: "4x5" },
    { id: "s", url: gallery[1], ratio: "4x5" },
    { id: "lifestyle", url: gallery[2], ratio: "4x5" },
    { id: "detail", url: gallery[3], ratio: "4x5" },
  ];
}

export default function ImageGallery({ product }) {
  const gallery = buildGallery(product);
  const [active, setActive] = useState(0);
  const current = gallery[active];
  const currentId = current ? current.id : "p";

  return (
    <div className="flex gap-3 sm:gap-4">
      {/* Thumbnails (vertical on desktop, horizontal strip on mobile) */}
      <div className="hidden sm:flex flex-col gap-3 w-20 lg:w-24 shrink-0">
        {gallery.map((g, i) => (
          <button
            key={g.id}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              "relative aspect-[4/5] bg-cream overflow-hidden border transition-colors duration-300",
              active === i ? "border-ink" : "border-line hover:border-ink/60",
            )}
            aria-label={`View image ${i + 1}`}
          >
            <img
              alt=""
              aria-hidden="true"
              src={g.url}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 min-w-0">
        <div className="relative aspect-[4/5] bg-cream overflow-hidden">
          <img
            key={currentId}
            alt={`${product.name} — view ${active + 1}`}
            src={current.url}
            className="absolute inset-0 w-full h-full object-cover animate-soft-fade"
            loading="eager"
          />
        </div>

        {/* Mobile thumbnails strip */}
        <div className="sm:hidden flex gap-2 mt-3 overflow-x-auto reel-track">
          {gallery.map((g, i) => (
            <button
              key={g.id}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "relative shrink-0 w-16 aspect-[4/5] bg-cream overflow-hidden border transition-colors duration-300",
                active === i ? "border-ink" : "border-line",
              )}
              aria-label={`View image ${i + 1}`}
            >
              <img
                alt=""
                aria-hidden="true"
                src={g.url}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
