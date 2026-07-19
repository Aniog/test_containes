import { useEffect, useRef, useState } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { cn } from "@/lib/utils";

export default function ProductGallery({ product }) {
  const ref = useRef(null);
  const [active, setActive] = useState(0);

  // For now, all products get four angles — alternating moody editorial
  // and warm product shots. The first card is the primary view.
  const angles = [
    { id: `${product.id}-gallery-1`, query: product.imageQuery, ratio: "3x4" },
    { id: `${product.id}-gallery-2`, query: product.hoverImageQuery, ratio: "3x4" },
    { id: `${product.id}-gallery-3`, query: product.imageQuery, ratio: "3x4" },
    { id: `${product.id}-gallery-4`, query: product.hoverImageQuery, ratio: "3x4" },
  ];

  useEffect(() => {
    if (!ref.current) return undefined;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, [product.id]);

  return (
    <div ref={ref} className="flex flex-col-reverse md:flex-row gap-4 md:gap-6">
      <ul className="flex md:flex-col gap-3 md:gap-4 overflow-x-auto md:overflow-visible scrollbar-none">
        {angles.map((a, i) => (
          <li key={a.id} className="flex-shrink-0">
            <button
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "w-16 md:w-20 aspect-[3/4] overflow-hidden bg-cream border transition-all",
                active === i ? "border-espresso" : "border-transparent opacity-70 hover:opacity-100"
              )}
              aria-label={`View image ${i + 1}`}
            >
              <img
                alt={`${product.name} view ${i + 1}`}
                data-strk-img-id={`${a.id}-thumb`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </button>
          </li>
        ))}
      </ul>

      <div className="flex-1 relative aspect-[3/4] bg-cream overflow-hidden">
        {angles.map((a, i) => (
          <img
            key={a.id}
            alt={`${product.name} view ${i + 1}`}
            data-strk-img-id={a.id}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="1000"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
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
