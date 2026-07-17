import { useState } from "react";
import StrkImage, { useStrkImageLoader } from "@/components/ui/StrkImage";
import { cn } from "@/lib/utils";

export default function ProductGallery({ product }) {
  const [active, setActive] = useState(0);
  const ref = useStrkImageLoader([product.id, active]);

  // Build a 4-image gallery: primary, secondary, then 2 generated (we reuse the same two for now)
  const slides = [
    {
      imgId: product.imgIds.primary,
      titleId: `gal-${product.id}-t0`,
      caption: "Studio on warm ivory",
    },
    {
      imgId: product.imgIds.secondary,
      titleId: `gal-${product.id}-t1`,
      caption: "On model, daylight",
    },
    {
      imgId: `${product.imgIds.primary}-detail`,
      titleId: `gal-${product.id}-t2`,
      caption: "Hand-set detail",
    },
    {
      imgId: `${product.imgIds.secondary}-scale`,
      titleId: `gal-${product.id}-t3`,
      caption: "Scale reference",
    },
  ];

  return (
    <div ref={ref} className="flex flex-col-reverse gap-4 md:flex-row">
      <ol
        className="order-2 md:order-1 flex md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-x-visible no-scrollbar"
        role="tablist"
        aria-label="Product image thumbnails"
      >
        {slides.map((s, i) => (
          <li key={s.imgId}>
            <button
              type="button"
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={cn(
                "relative block h-16 w-16 md:h-20 md:w-20 overflow-hidden border transition-colors",
                active === i ? "border-ink" : "border-line hover:border-ink/40"
              )}
            >
              <StrkImage
                imgId={s.imgId}
                query={`[${s.titleId}] [pd-name-${product.id}] [pd-cat-${product.id}]`}
                ratio="1x1"
                width={180}
                alt={`${product.name} — view ${i + 1}`}
                className="absolute inset-0 h-full w-full"
              />
              <span id={s.titleId} className="sr-only">
                {s.caption}
              </span>
            </button>
          </li>
        ))}
      </ol>

      <div className="order-1 md:order-2 flex-1">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream-soft">
          <StrkImage
            key={slides[active].imgId}
            imgId={slides[active].imgId}
            query={`[pd-name-${product.id}] [pd-cat-${product.id}]`}
            ratio="4x5"
            width={1200}
            alt={`${product.name} — view ${active + 1}`}
            eager
            className="absolute inset-0 h-full w-full animate-fadeUp"
          />
        </div>
      </div>
    </div>
  );
}
