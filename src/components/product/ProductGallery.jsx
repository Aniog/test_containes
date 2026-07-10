import React, { useState } from "react";
import { cn } from "@/lib/utils";

// Each gallery image is built from references to the product's real
// text IDs (defined on the PDP page), so the strk-img system can
// produce coherent imagery.
function buildGalleryImages(product) {
  // These IDs MUST match the IDs rendered on the PDP page.
  const titleId = `pdp-${product.id}-name`;
  const descId = `pdp-${product.id}-desc`;
  const brandId = `pdp-${product.id}-brand`;
  const categoryId = `pdp-${product.id}-category`;
  return [
    {
      id: `${product.id}-gallery-1`,
      query: `[${titleId}] [${descId}] [${brandId}] [${categoryId}]`,
      alt: product.name,
      label: "Front",
    },
    {
      id: `${product.id}-gallery-2`,
      query: `[${titleId}] close-up detail [${brandId}]`,
      alt: `${product.name} — detail`,
      label: "Detail",
    },
    {
      id: `${product.id}-gallery-3`,
      query: `[${titleId}] worn by model [${brandId}] [${categoryId}]`,
      alt: `${product.name} — worn`,
      label: "On model",
    },
    {
      id: `${product.id}-gallery-4`,
      query: `[${titleId}] styled flat lay [${brandId}]`,
      alt: `${product.name} — flat lay`,
      label: "Flat lay",
    },
  ];
}

export default function ProductGallery({ product }) {
  const images = buildGalleryImages(product);
  const [active, setActive] = useState(0);
  const activeImage = images[active];

  return (
    <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-4">
      {/* Thumbnails (vertical on desktop, horizontal on mobile) */}
      <div className="md:w-20 flex md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-visible no-scrollbar md:shrink-0">
        {images.map((img, i) => (
          <button
            key={img.id}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`View ${img.label.toLowerCase()}`}
            aria-current={i === active}
            className={cn(
              "relative shrink-0 w-20 md:w-20 aspect-square overflow-hidden bg-ivory-dark border transition-colors duration-300",
              i === active ? "border-cocoa" : "border-hairline hover:border-cocoa-soft"
            )}
          >
            <img
              alt=""
              aria-hidden="true"
              data-strk-img-id={`${img.id}-thumb`}
              data-strk-img={img.query}
              data-strk-img-ratio="1x1"
              data-strk-img-width="200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 relative aspect-[4/5] bg-ivory-dark overflow-hidden">
        <img
          key={activeImage.id}
          alt={activeImage.alt}
          data-strk-img-id={activeImage.id}
          data-strk-img={activeImage.query}
          data-strk-img-ratio="4x5"
          data-strk-img-width="1200"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover animate-fade-in"
        />
        {product.badge && (
          <span className="absolute top-4 left-4 px-3 py-1.5 bg-ivory-light text-cocoa text-[10px] uppercase tracking-[0.18em]">
            {product.badge}
          </span>
        )}
      </div>
    </div>
  );
}
