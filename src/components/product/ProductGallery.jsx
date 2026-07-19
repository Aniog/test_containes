import React, { useState } from "react";
import ProductImage from "./ProductImage";
import { cn } from "@/lib/utils";

export default function ProductGallery({ product }) {
  const images = [product.imgId, product.img2Id, product.img3Id].filter(Boolean);
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-6">
      {/* Thumbnails */}
      <ul className="flex md:flex-col gap-3 md:gap-4 overflow-x-auto md:overflow-visible no-scrollbar md:w-20 shrink-0">
        {images.map((imgId, i) => (
          <li key={imgId}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "relative block w-20 h-24 md:w-20 md:h-24 overflow-hidden bg-sand border transition-colors duration-300",
                active === i
                  ? "border-espresso"
                  : "border-transparent hover:border-hairline"
              )}
              aria-label={`View image ${i + 1}`}
            >
              <ProductImage
                imgId={imgId}
                query={`[${product.descId}] [${product.titleId}]`}
                ratio="3x4"
                width={200}
                alt={`${product.name} thumbnail ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </button>
          </li>
        ))}
      </ul>

      {/* Main image */}
      <div className="relative flex-1 bg-sand aspect-[3/4] overflow-hidden">
        {images.map((imgId, i) => (
          <ProductImage
            key={imgId}
            imgId={imgId}
            query={`[${product.descId}] [${product.titleId}]`}
            ratio="3x4"
            width={1200}
            alt={`${product.name} ${i === 0 ? "main" : `view ${i + 1}`}`}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
              active === i ? "opacity-100" : "opacity-0"
            )}
          />
        ))}
      </div>
    </div>
  );
}
