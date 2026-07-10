import React, { useEffect, useState } from "react";
import { productSVG } from "@/data/placeholders";

const FRAMES = ["cuff", "flora", "huggie", "lace", "set", "pearl", "chain", "hoop", "cuff2"];

export default function ProductGallery({ product }) {
  const primary = product.image || productSVG(product.art || "cuff", product.name);
  const [active, setActive] = useState(0);

  // Build a small set of variant frames: the primary art, plus a couple
  // of other angle/light variants to feel like a real product gallery.
  const variants = buildGallery(primary, product);

  useEffect(() => setActive(0), [product.id]);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-6">
      {/* Thumbnails */}
      <div className="md:w-20 flex md:flex-col gap-3">
        {variants.map((src, i) => {
          const isActive = i === active;
          return (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              className={`relative aspect-square w-full overflow-hidden bg-cream-200 transition-all ${
                isActive
                  ? "ring-1 ring-ink ring-offset-2 ring-offset-cream"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <img src={src} alt="" aria-hidden="true" className="w-full h-full object-cover" />
            </button>
          );
        })}
      </div>

      {/* Main image */}
      <div className="flex-1">
        <div className="relative aspect-[3/4] overflow-hidden bg-cream-200">
          <img
            key={active}
            src={variants[active]}
            alt={`${product.name} — view ${active + 1}`}
            className="absolute inset-0 w-full h-full object-cover animate-fadeIn"
          />
          {product.badge && (
            <span className="absolute top-4 left-4 bg-cream-50/90 text-ink text-[10.5px] tracking-widest2 uppercase font-medium px-3 py-1.5">
              {product.badge}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function buildGallery(primary, product) {
  const arts = [product.art, ...FRAMES.filter((f) => f !== product.art)];
  return [primary, ...arts.slice(0, 3).map((a) => productSVG(a, product.name))];
}
