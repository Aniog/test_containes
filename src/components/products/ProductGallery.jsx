import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * ProductGallery — left-rail thumbnail column + main image. On mobile, the
 * thumbnails become a horizontal scroller above the main image.
 */
export function ProductGallery({ product }) {
  const images = [
    { id: `${product.id}-g-0`, query: product.gallery[0] || product.imgQuery },
    { id: `${product.id}-g-1`, query: product.gallery[1] || product.imgQuery },
    { id: `${product.id}-g-2`, query: product.gallery[2] || product.gallery[1] || product.imgQuery },
  ];
  const [active, setActive] = useState(0);
  const titleId = `${product.id}-gallery-title`;

  return (
    <div className="grid gap-4 md:grid-cols-[88px_1fr] md:gap-5">
      {/* Thumbnails — vertical on desktop, horizontal scroller on mobile */}
      <ol
        className="order-2 flex gap-3 overflow-x-auto no-scrollbar md:order-1 md:flex-col md:gap-3 md:overflow-visible"
        aria-label="Product image thumbnails"
      >
        {images.map((img, i) => (
          <li key={img.id}>
            <button
              type="button"
              aria-label={`Show image ${i + 1}`}
              aria-pressed={active === i}
              onClick={() => setActive(i)}
              className={cn(
                "block aspect-square w-20 shrink-0 overflow-hidden border bg-bone transition-all duration-200 md:w-[88px]",
                active === i
                  ? "border-ink"
                  : "border-transparent opacity-65 hover:opacity-100"
              )}
            >
              <img
                data-strk-img-id={img.id}
                data-strk-img={`[${titleId}] gold jewelry detail`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover"
              />
            </button>
          </li>
        ))}
      </ol>

      {/* Main image */}
      <div className="order-1 md:order-2">
        <div className="relative aspect-square overflow-hidden bg-bone">
          <img
            key={images[active].id}
            data-strk-img-id={`${product.id}-main`}
            data-strk-img={`[${titleId}] ${images[active].query}`}
            data-strk-img-ratio="1x1"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="h-full w-full animate-fade-in object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductGallery;
