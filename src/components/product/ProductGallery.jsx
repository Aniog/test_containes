import React, { useState } from "react";
import StrkImage from "@/components/ui/StrkImage";

export default function ProductGallery({ product }) {
  // Synthesize 4 images for the gallery: 2 hero + 2 detail/lifestyle
  const slides = [
    {
      imgId: `${product.imgId1}-gal-1`,
      query: `${product.name} ${product.material} main editorial shot of demi-fine gold ${product.category} on dark warm background`,
    },
    {
      imgId: `${product.imgId2}-gal-2`,
      query: `${product.name} detail closeup of demi-fine gold ${product.category} on linen neutral background warm light`,
    },
    {
      imgId: `${product.imgId1}-gal-3`,
      query: `${product.name} lifestyle shot of demi-fine gold ${product.category} worn on model warm daylight editorial`,
    },
    {
      imgId: `${product.imgId2}-gal-4`,
      query: `${product.name} flat lay of demi-fine gold ${product.category} on cream linen warm natural light`,
    },
  ];

  const [active, setActive] = useState(0);
  const current = slides[active];

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      <div className="md:w-20 flex md:flex-col gap-3">
        {slides.map((s, i) => (
          <button
            key={s.imgId}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`View image ${i + 1}`}
            aria-pressed={active === i}
            className={`relative w-full aspect-square overflow-hidden border editorial-transition ${
              active === i ? "border-ink-950" : "border-sand-200 hover:border-ink-700"
            }`}
          >
            <StrkImage
              imgId={`${s.imgId}-thumb`}
              query={s.query}
              ratio="1x1"
              width={200}
              alt={`${product.name} thumbnail ${i + 1}`}
            />
          </button>
        ))}
      </div>
      <div className="flex-1">
        <div className="aspect-[4/5] bg-sand-100">
          <StrkImage
            key={current.imgId}
            imgId={current.imgId}
            query={current.query}
            ratio="4x5"
            width={1200}
            alt={`${product.name} image ${active + 1}`}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
