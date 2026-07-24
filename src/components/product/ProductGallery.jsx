import React, { useState } from "react";

export default function ProductGallery({ product }) {
  // 3 views: primary, alt, plus a "detail" composite
  const images = [
    { src: product.image,     label: "Front" },
    { src: product.imageAlt,  label: "Detail" },
  ];
  const [active, setActive] = useState(0);

  return (
    <div className="grid grid-cols-12 gap-3 sm:gap-4">
      <div className="hidden sm:flex col-span-1 flex-col gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative aspect-[4/5] overflow-hidden border transition-colors ${
              active === i ? "border-gold" : "border-hairline hover:border-gold/60"
            }`}
            aria-label={`View image ${i + 1}`}
          >
            <img src={img.src} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      <div className="col-span-12 sm:col-span-11">
        <div className="relative aspect-[4/5] bg-cream-warm overflow-hidden">
          <img
            src={images[active].src}
            alt={product.name}
            className="w-full h-full object-cover animate-fade-in"
            key={active}
          />
          {product.badge && (
            <span className="absolute top-5 left-5 label-eyebrow text-[0.62rem] px-3 py-1.5 bg-cream/95 text-ink">
              {product.badge}
            </span>
          )}
        </div>
        {/* Mobile thumbnails */}
        <div className="sm:hidden flex gap-3 mt-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative w-20 aspect-[4/5] overflow-hidden border ${
                active === i ? "border-gold" : "border-hairline"
              }`}
            >
              <img src={img.src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
