import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { cn } from "@/lib/utils";

const SLOTS = [
  { id: "primary", label: "Primary" },
  { id: "alt", label: "Detail" },
  { id: "model", label: "Worn" },
  { id: "scale", label: "Scale" },
];

const QUERIES = {
  primary: "primary",
  alt: "alt",
  model: "model",
  scale: "scale",
};

function buildQueries(product) {
  return {
    primary: product.imageQuery,
    alt:
      product.altImageQuery ||
      `${product.name} detail closeup gold jewelry editorial`,
    model: `model wearing ${product.name.toLowerCase()} ${product.category} warm light`,
    scale: `${product.name.toLowerCase()} ${product.category} scale size on hand warm`,
  };
}

function GalleryImage({ id, query, ratio, active, eager }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, [query, id]);

  return (
    <div
      ref={ref}
      className={cn(
        "absolute inset-0 transition-opacity duration-500",
        active ? "opacity-100" : "opacity-0 pointer-events-none",
      )}
    >
      <img
        alt={query}
        data-strk-img-id={`gallery-${id}-${query.slice(0, 8).replace(/\s+/g, "-")}`}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width="1200"
        loading={eager ? "eager" : "lazy"}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default function ProductGallery({ product }) {
  const [active, setActive] = useState("primary");
  const queries = buildQueries(product);
  const ratio = product.imageRatio || "4x5";

  return (
    <div className="grid grid-cols-12 gap-4">
      {/* Thumbs (vertical on desktop, horizontal on mobile) */}
      <div className="col-span-2 order-2 md:order-1 flex md:flex-col gap-2 overflow-x-auto md:overflow-visible no-scrollbar">
        {SLOTS.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setActive(s.id)}
            className={cn(
              "relative w-16 md:w-full aspect-[4/5] flex-shrink-0 overflow-hidden border transition-colors",
              active === s.id
                ? "border-gold"
                : "border-hairline hover:border-taupe",
            )}
            aria-label={`Show ${s.label.toLowerCase()} view`}
          >
            <GalleryImage
              id={`${product.id}-thumb-${s.id}`}
              query={queries[s.id]}
              ratio="4x5"
              active
              eager
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="col-span-12 md:col-span-10 order-1 md:order-2">
        <div
          className="relative w-full overflow-hidden bg-wash"
          style={{ aspectRatio: ratio.replace("x", " / ") }}
        >
          {SLOTS.map((s) => (
            <GalleryImage
              key={s.id}
              id={`${product.id}-main-${s.id}`}
              query={queries[s.id]}
              ratio={ratio}
              active={active === s.id}
              eager={s.id === "primary"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
