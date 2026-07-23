import { useState } from "react";
import { cn } from "@/lib/utils";
import ProductImage from "@/components/ui/ProductImage";
import StrkImageLoader from "@/components/ui/StrkImageLoader";

export default function ProductGallery({ product }) {
  const [active, setActive] = useState(0);
  const queries = product.imageQueries;

  return (
    <StrkImageLoader className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4">
      <div className="flex sm:flex-col gap-3 sm:gap-4 overflow-x-auto sm:overflow-visible">
        {queries.map((q, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              "relative w-20 sm:w-24 flex-shrink-0 aspect-[4/5] overflow-hidden bg-ivory-200 transition-all",
              i === active ? "ring-1 ring-espresso" : "opacity-70 hover:opacity-100"
            )}
            aria-label={`View image ${i + 1}`}
          >
            <ProductImage
              imgId={`${product.id}-thumb-${i}`}
              query={q}
              ratio="4x5"
              width={200}
              alt={`${product.name} thumbnail ${i + 1}`}
            />
          </button>
        ))}
      </div>

      <div className="flex-1 min-w-0">
        <div className="relative aspect-[4/5] overflow-hidden bg-ivory-200">
          <ProductImage
            imgId={`${product.id}-hero-${active}`}
            query={queries[active]}
            ratio="4x5"
            width={1200}
            alt={product.name}
            eager
          />
        </div>
      </div>
    </StrkImageLoader>
  );
}
