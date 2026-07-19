import { useState } from "react";
import StrkImage from "@/components/ui/StrkImage";

/**
 * ImageGallery — left vertical thumbnails + large primary image.
 * Designed to read as "editorial product page", not a SaaS card.
 */
export default function ImageGallery({ product }) {
  const images = [
    { id: product.imgId, ratio: "4x5", query: product.name },
    { id: product.imgIdHover, ratio: "4x5", query: `${product.name} alternate view` },
    { id: `${product.imgId}-detail`, ratio: "4x5", query: `${product.name} detail` },
  ];
  const [active, setActive] = useState(0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
      {/* Thumbnails (desktop) */}
      <ul className="hidden md:flex md:flex-col md:col-span-1 gap-3 order-1">
        {images.map((img, idx) => (
          <li key={img.id}>
            <button
              type="button"
              onClick={() => setActive(idx)}
              aria-label={`View image ${idx + 1}`}
              className={`block w-full aspect-square overflow-hidden border transition-colors ${
                active === idx ? "border-ink" : "border-stone hover:border-ink-soft"
              }`}
            >
              <StrkImage
                imgId={img.id}
                query={img.query}
                ratio="1x1"
                width="200"
                alt={`${product.name} thumbnail ${idx + 1}`}
                className="border-0"
              />
            </button>
          </li>
        ))}
      </ul>

      {/* Main image */}
      <div className="md:col-span-11 order-2">
        <StrkImage
          imgId={images[active].id}
          query={images[active].query}
          ratio="4x5"
          width="1200"
          alt={product.name}
          className="border border-stone"
        />
        {/* Mobile-only thumbnail row */}
        <ul className="flex md:hidden gap-2 mt-3">
          {images.map((img, idx) => (
            <li key={img.id} className="flex-1">
              <button
                type="button"
                onClick={() => setActive(idx)}
                aria-label={`View image ${idx + 1}`}
                className={`block w-full aspect-square overflow-hidden border ${
                  active === idx ? "border-ink" : "border-stone"
                }`}
              >
                <StrkImage
                  imgId={img.id}
                  query={img.query}
                  ratio="1x1"
                  width="200"
                  alt={`${product.name} thumbnail ${idx + 1}`}
                  className="border-0"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
