import { useState } from "react";
import StockImage from "@/components/ui/StockImage";
import { cn } from "@/lib/utils";

export default function ProductGallery({ product }) {
  const images = product.images.length > 0 ? product.images : [product.images[0]];
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex];

  return (
    <div className="grid grid-cols-1 md:grid-cols-[88px_1fr] gap-4 md:gap-6">
      {/* Thumbnails — vertical strip on desktop, horizontal on mobile */}
      <div
        className="order-2 md:order-1 flex md:flex-col gap-3 overflow-x-auto md:overflow-visible"
        role="tablist"
        aria-label="Product images"
      >
        {images.map((img, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={img.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveIndex(i)}
              className={cn(
                "relative h-16 w-16 md:h-20 md:w-20 flex-shrink-0 overflow-hidden rounded-sm border transition-all",
                isActive
                  ? "border-espresso"
                  : "border-bone/80 hover:border-charcoal"
              )}
            >
              <StockImage
                imageId={`${product.id}-thumb-${img.id}`}
                query={`[product-${product.id}-name] [product-${product.id}-material]`}
                ratio="1x1"
                width={160}
                alt={`${product.name} thumbnail ${i + 1}`}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </button>
          );
        })}
      </div>

      {/* Main image */}
      <div className="order-1 md:order-2">
        <div
          id={`product-${product.id}-gallery-main`}
          className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-bone/40"
        >
          <StockImage
            imageId={active.id}
            query={`[product-${product.id}-name] [product-${product.id}-material]`}
            ratio="3x4"
            width={1200}
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}