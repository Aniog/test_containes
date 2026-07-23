import React, { useEffect, useRef, useState } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { cn } from "@/lib/utils";
import { PRODUCT_IMAGE_IDS } from "@/lib/products";

export default function ProductGallery({ product }) {
  const containerRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product.id]);

  // Compose a list of image descriptors with stable ids and queries
  const imgIds = PRODUCT_IMAGE_IDS[product.id];
  const images = [
    {
      id: imgIds?.primary,
      query: imgIds?.primaryQuery,
      ratio: "4x5",
      width: 1200,
    },
    {
      id: imgIds?.hover,
      query: imgIds?.hoverQuery,
      ratio: "4x5",
      width: 1200,
    },
    // Editorial detail shots — extra "lifestyle" images
    {
      id: `img-${product.id}-detail-1`,
      query: `[product-${product.id}-name] editorial detail shot close up`,
      ratio: "4x5",
      width: 1200,
    },
    {
      id: `img-${product.id}-detail-2`,
      query: `[product-${product.id}-name] on model editorial portrait`,
      ratio: "4x5",
      width: 1200,
    },
  ];

  return (
    <div ref={containerRef} className="flex flex-col-reverse md:flex-row gap-3 md:gap-4">
      {/* Thumbnails */}
      <ul className="flex md:flex-col gap-2 md:gap-3 order-2 md:order-1 md:w-20 lg:w-24">
        {images.map((img, idx) => (
          <li key={img.id + idx} className="flex-shrink-0">
            <button
              type="button"
              aria-label={`View image ${idx + 1}`}
              onClick={() => setActive(idx)}
              className={cn(
                "block w-16 md:w-20 lg:w-24 aspect-[4/5] overflow-hidden bg-ivory-100 border transition-colors",
                active === idx
                  ? "border-cocoa-900"
                  : "border-transparent hover:border-cocoa-900/30"
              )}
            >
              <img
                alt=""
                data-strk-img-id={img.id}
                data-strk-img={img.query}
                data-strk-img-ratio="4x5"
                data-strk-img-width="240"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </button>
          </li>
        ))}
      </ul>

      {/* Main image */}
      <div className="flex-1 order-1 md:order-2">
        <div className="aspect-[4/5] bg-ivory-100 overflow-hidden">
          <img
            key={images[active].id + active}
            alt={product.name}
            data-strk-img-id={images[active].id}
            data-strk-img={images[active].query}
            data-strk-img-ratio="4x5"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
            className="w-full h-full object-cover animate-fade-in"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
}
