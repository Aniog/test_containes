import React, { useState } from "react";
import { strkSrc } from "@/lib/strkSrc";

export default function ProductGallery({ product }) {
  const [active, setActive] = useState(0);
  const activeImage = product.images[active];

  return (
    <div>
      <div className="relative overflow-hidden bg-sand">
        <img
          key={activeImage.imgId}
          data-strk-img-id={`gallery-${activeImage.imgId}`}
          data-strk-img={`[${activeImage.descId}] [${activeImage.titleId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="1000"
          src={strkSrc(`gallery-${activeImage.imgId}`)}
          alt={activeImage.alt}
          className="aspect-[4/5] w-full animate-fade-in object-cover"
        />
        {product.isNew && (
          <span className="absolute left-5 top-5 bg-ivory px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-espresso">
            New Arrival
          </span>
        )}
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4">
        {product.images.map((img, index) => (
          <button
            key={img.imgId}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`View image ${index + 1} of ${product.name}`}
            className={`overflow-hidden bg-sand transition-all duration-300 ${
              index === active
                ? "ring-1 ring-bronze ring-offset-2 ring-offset-ivory"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <img
              data-strk-img-id={`thumb-${img.imgId}`}
              data-strk-img={`[${img.descId}] [${img.titleId}]`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="300"
              src={strkSrc(`thumb-${img.imgId}`)}
              alt=""
              aria-hidden="true"
              className="aspect-square w-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Hidden text feeding image queries */}
      <span className="sr-only">
        {product.images.map((img) => (
          <React.Fragment key={img.imgId}>
            <span id={img.titleId}>{img.title}</span>
            <span id={img.descId}>{img.desc}</span>
          </React.Fragment>
        ))}
      </span>
    </div>
  );
}
