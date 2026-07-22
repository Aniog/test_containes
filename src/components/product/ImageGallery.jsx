import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ImageGallery({ product }) {
  const [active, setActive] = useState(0);
  const images = product.images.slice(0, 4);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-visible scrollbar-hide">
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`View image ${i + 1}`}
            className={cn(
              "relative shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border transition-colors",
              active === i ? "border-ink" : "border-line hover:border-ink/50"
            )}
          >
            <img
              alt=""
              aria-hidden="true"
              data-strk-img-id={product.imgThumbIds[i]}
              data-strk-img={`[gallery-title] ${img} warm`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="200"
              src={product.imgThumbUrls[i]}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div
        className="relative flex-1 aspect-[4/5] bg-ivory border border-line/70 overflow-hidden"
        id="gallery-title"
        data-strk-img-root=""
      >
        <img
          alt={product.name}
          data-strk-img-id={product.imgMainId}
          data-strk-img={`[gallery-title] ${images[active]} ${product.subtitle} ${product.name}`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="1100"
          src={product.imgMainUrl}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {product.badge && (
          <span className="absolute top-4 left-4 text-[10px] uppercase tracking-wider-3 font-sans font-medium bg-cream/95 text-ink px-2.5 py-1 rounded-sm">
            {product.badge}
          </span>
        )}
      </div>
    </div>
  );
}
