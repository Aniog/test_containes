import { useEffect, useRef, useState } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { cn } from "@/lib/utils";

const variants = ["hero", "detail", "lifestyle", "scale"];

export default function ProductGallery({ product }) {
  const [active, setActive] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [product.id]);

  useEffect(() => {
    setActive(0);
  }, [product.id]);

  return (
    <div ref={ref} className="flex flex-col-reverse md:flex-row gap-3 md:gap-4">
      <ul className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible no-scrollbar">
        {variants.map((v, i) => (
          <li key={v} className="shrink-0">
            <button
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "block w-16 h-20 md:w-20 md:h-24 overflow-hidden bg-sand border transition-colors",
                active === i ? "border-ink" : "border-hairline hover:border-ink/50"
              )}
              aria-label={`View image ${i + 1}`}
              aria-pressed={active === i}
            >
              <img
                alt=""
                data-strk-img-id={`${product.id}-thumb-${v}`}
                data-strk-img={`[${product.id}-name] ${v} thumbnail`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </button>
          </li>
        ))}
      </ul>

      <div className="flex-1 relative aspect-[4/5] bg-sand overflow-hidden">
        {variants.map((v, i) => (
          <img
            key={v}
            alt={`${product.name} — ${v}`}
            data-strk-img-id={`${product.id}-main-${v}`}
            data-strk-img={`[${product.id}-name] [${product.id}-subtitle] ${v} view`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
              i === active ? "opacity-100" : "opacity-0"
            )}
          />
        ))}
      </div>
    </div>
  );
}
