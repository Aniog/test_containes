import { useState } from "react";

const GALLERY_IMAGES = [
  { key: "front", label: "Front" },
  { key: "side",  label: "Side"  },
  { key: "model", label: "On model" },
  { key: "detail", label: "Detail" },
];

export default function ProductGallery({ product }) {
  const [activeIdx, setActiveIdx] = useState(0);

  if (!product) return null;

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-6">
      {/* Thumbnails — vertical on desktop, horizontal on mobile */}
      <div
        className="flex md:flex-col gap-3 md:gap-4 overflow-x-auto md:overflow-visible no-scrollbar"
        role="tablist"
        aria-label="Product gallery"
      >
        {GALLERY_IMAGES.map((img, idx) => (
          <button
            key={img.key}
            type="button"
            role="tab"
            aria-selected={activeIdx === idx}
            onClick={() => setActiveIdx(idx)}
            className={
              "relative flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border transition-colors " +
              (activeIdx === idx
                ? "border-espresso-900"
                : "border-hairline hover:border-espresso-500")
            }
            aria-label={`${img.label} view`}
          >
            <img
              alt=""
              aria-hidden="true"
              data-strk-img-id={`${product.id}-thumb-${img.key}`}
              data-strk-img={`[${product.descId}] [${product.titleId}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 relative aspect-[4/5] overflow-hidden bg-ivory-200">
        <img
          alt={`${product.name} — view ${GALLERY_IMAGES[activeIdx].label}`}
          data-strk-img-id={activeIdx === 0 ? product.imgId : product.imgId2}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="1200"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
          loading="eager"
          key={`${product.id}-${activeIdx}`}
          className="absolute inset-0 w-full h-full object-cover animate-fadeUp"
        />
        {product.badge && (
          <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1.5 bg-ivory-50/95 backdrop-blur-sm text-[10px] uppercase tracking-[0.22em] text-espresso-900">
            {product.badge}
          </span>
        )}
      </div>
    </div>
  );
}
