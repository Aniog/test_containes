import React, { useState } from "react";
import { PLACEHOLDER_SVG, cn } from "@/lib/utils";

export default function ProductGallery({ product }) {
  const [active, setActive] = useState(0);
  const images = product.images;

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Thumbnails - desktop side, mobile bottom */}
      <div className="order-2 md:order-1 flex md:flex-col gap-3 md:gap-4 md:w-20 lg:w-24 overflow-x-auto velmora-scroll-x">
        {images.map((img, i) => (
          <button
            key={img.id}
            onClick={() => setActive(i)}
            className={cn(
              "flex-shrink-0 w-16 h-20 md:w-full md:h-24 lg:h-28 bg-velmora-bone overflow-hidden border transition-all duration-300",
              active === i
                ? "border-velmora-espresso opacity-100"
                : "border-transparent opacity-70 hover:opacity-100",
            )}
            aria-label={`View image ${i + 1}`}
          >
            <img
              alt=""
              data-strk-img-id={img.id}
              data-strk-img={img.q}
              data-strk-img-ratio="3x4"
              data-strk-img-width="240"
              src={PLACEHOLDER_SVG}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="order-1 md:order-2 flex-1 relative aspect-[3/4] bg-velmora-bone overflow-hidden">
        <img
          key={images[active].id}
          alt={product.name}
          data-strk-img-id={images[active].id}
          data-strk-img={images[active].q}
          data-strk-img-ratio="3x4"
          data-strk-img-width="1000"
          src={PLACEHOLDER_SVG}
          className="absolute inset-0 w-full h-full object-cover velmora-fade-in"
        />
      </div>
    </div>
  );
}
