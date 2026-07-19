import { useEffect, useRef, useState } from "react";
import StockImage from "@/components/ui/StockImage";
import useImageLoader from "@/lib/useImageLoader";

export default function ProductGallery({ product }) {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  useImageLoader(ref, [active, product.id]);

  // A simple variant with 4 "shots" per product, derived from product id.
  const shots = product.images?.length ? product.images : [product.id];

  return (
    <div ref={ref} className="grid grid-cols-12 gap-3 md:gap-4">
      {/* Thumbnails */}
      <div className="hidden md:flex md:col-span-1 flex-col gap-3">
        {shots.map((img, idx) => (
          <button
            type="button"
            key={img}
            onClick={() => setActive(idx)}
            aria-label={`Show image ${idx + 1}`}
            className={`relative aspect-[3/4] overflow-hidden bg-cream-200 border transition-colors ${
              active === idx
                ? "border-gold-400"
                : "border-transparent hover:border-hairline"
            }`}
          >
            <StockImage
              imgId={`${product.id}-thumb-${idx}`}
              query={`[${product.descId}] [${product.titleId}]`}
              refTitle={product.titleId}
              refDesc={product.descId}
              ratio="3x4"
              width="200"
              alt={`${product.name} thumbnail ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="col-span-12 md:col-span-11">
        <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-cream-200">
          {shots.map((img, idx) => (
            <div
              key={img}
              className={`absolute inset-0 transition-opacity duration-700 ease-smooth ${
                active === idx ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              aria-hidden={active !== idx}
            >
              <StockImage
                imgId={`${product.id}-main-${idx}`}
                query={`[${product.descId}] [${product.titleId}] detail shot`}
                refTitle={product.titleId}
                refDesc={product.descId}
                ratio="3x4"
                width="1400"
                alt={`${product.name} image ${idx + 1}`}
                className="w-full h-full object-cover"
                eager={idx === 0}
              />
            </div>
          ))}
        </div>

        {/* Mobile dots */}
        <div className="flex md:hidden justify-center gap-1.5 mt-3">
          {shots.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActive(idx)}
              aria-label={`Show image ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                active === idx ? "w-6 bg-espresso-300" : "w-1.5 bg-hairline"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
