import { useEffect, useRef, useState } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { cn } from "@/lib/utils";

const placeholder =
  "data:image/svg+xml;charset=utf-8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'>
      <defs>
        <radialGradient id='g' cx='40%' cy='35%' r='80%'>
          <stop offset='0%' stop-color='#5C4A3A'/>
          <stop offset='100%' stop-color='#1A1814'/>
        </radialGradient>
        <radialGradient id='gold' cx='50%' cy='40%' r='35%'>
          <stop offset='0%' stop-color='#E8C58A' stop-opacity='0.45'/>
          <stop offset='100%' stop-color='#A8824A' stop-opacity='0'/>
        </radialGradient>
      </defs>
      <rect width='3' height='4' fill='url(%23g)'/>
      <ellipse cx='1.5' cy='1.6' rx='1' ry='1.2' fill='url(%23gold)'/>
    </svg>`
  );

// Five gallery frames per product (a primary, hover, on-model, detail, packaging)
const galleryQueries = (product) => [
  product.images[0],
  product.images[1],
  `[gallery-on-model-${product.id}] editorial portrait of woman wearing ${product.name} close up warm light`,
  `[gallery-detail-${product.id}] macro detail of ${product.name} ${product.tagline} warm light`,
  `[gallery-packaging-${product.id}] ${product.name} in elegant velvet gift box dark warm background`,
];

export default function ProductGallery({ product }) {
  const ref = useRef(null);
  const [active, setActive] = useState(0);

  const frames = galleryQueries(product);
  const altIds = [
    `${product.id}-img-1`,
    `${product.id}-img-2`,
    `gallery-on-model-${product.id}`,
    `gallery-detail-${product.id}`,
    `gallery-packaging-${product.id}`,
  ];

  useEffect(() => {
    if (!ref.current) return;
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [product.id]);

  return (
    <div ref={ref} className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 md:gap-3 md:w-20 lg:w-24 flex-shrink-0 overflow-x-auto md:overflow-visible no-scrollbar">
        {frames.map((q, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              "relative w-16 md:w-full aspect-[3/4] flex-shrink-0 overflow-hidden bg-espresso/95 border transition-colors",
              active === i ? "border-espresso" : "border-hairline hover:border-taupe"
            )}
            aria-label={`View image ${i + 1}`}
          >
            <img
              alt=""
              data-strk-img-id={`${altIds[i]}-thumb`}
              data-strk-img={q}
              data-strk-img-ratio="3x4"
              data-strk-img-width="200"
              src={placeholder}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="relative flex-1 aspect-[3/4] bg-espresso/95 overflow-hidden">
        <img
          alt={product.name}
          data-strk-img-id={altIds[active]}
          data-strk-img={frames[active]}
          data-strk-img-ratio="3x4"
          data-strk-img-width="1200"
          src={placeholder}
          className="h-full w-full object-cover transition-opacity duration-500"
        />
      </div>
    </div>
  );
}
