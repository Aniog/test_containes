import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ProductGallery({ product }) {
  // For demo, we use the same product image for each gallery slot with
  // slight color-treatment variation. Replace with real product shots.
  const slides = [
    { src: product.image, alt: product.imageAlt || product.name },
    { src: product.image, alt: `${product.name} — detail` },
    { src: product.image, alt: `${product.name} — on model` },
    { src: product.image, alt: `${product.name} — packaging` },
  ];
  const [active, setActive] = useState(0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-6">
      {/* Thumbnails (desktop) */}
      <div className="hidden md:flex flex-col gap-3 order-1">
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`View image ${i + 1}`}
            className={cn(
              "aspect-square w-20 overflow-hidden bg-sand border transition-colors",
              active === i ? "border-ink" : "border-transparent hover:border-hairline",
            )}
          >
            <img
              src={s.src}
              alt={s.alt}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="order-2 md:order-2">
        <div className="relative aspect-[4/5] bg-sand overflow-hidden">
          <img
            key={active}
            src={slides[active].src}
            alt={slides[active].alt}
            className="absolute inset-0 w-full h-full object-cover animate-fade-up"
          />
        </div>

        {/* Mobile dot pagination */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              className={cn(
                "h-1.5 rounded-full transition-all",
                active === i ? "w-6 bg-ink" : "w-1.5 bg-hairline",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
