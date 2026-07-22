import { useState } from "react";
import { cn } from "@/lib/utils";
import StockImage from "@/components/ui/StockImage";
import { useStrkImage } from "@/hooks/useStrkImage";
import { useRef } from "react";

/**
 * Sticky image gallery with thumbnails. On mobile it's a swipe-friendly
 * horizontal scroller instead of a thumbnail rail.
 */
export default function ImageGallery({ product }) {
  const ref = useRef(null);
  useStrkImage(ref, []);

  // Each product gets a primary + 3 alternate views for the gallery.
  const shots = [
    { id: "main", query: product.imageQuery, alt: product.name },
    {
      id: "alt-1",
      query: product.imageQueryAlt || product.imageQuery,
      alt: `${product.name}, alternate angle`,
    },
    {
      id: "alt-2",
      query: `${product.imageQuery}, on model`,
      alt: `${product.name} worn on model`,
    },
    {
      id: "alt-3",
      query: `${product.imageQuery}, detail close up`,
      alt: `${product.name} detail`,
    },
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const active = shots[activeIdx];

  return (
    <div ref={ref} className="lg:sticky lg:top-24">
      {/* Main image */}
      <div className="bg-cream-deep aspect-[4/5] overflow-hidden">
        <StockImage
          id={`pdp-main-${product.id}-${active.id}`}
          query={active.query}
          alt={active.alt}
          ratio="4x5"
          width={1200}
          className="w-full h-full"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      {/* Mobile-only horizontal swiper */}
      <div className="lg:hidden mt-4 -mx-5 px-5 overflow-x-auto reel-scroll flex gap-3">
        {shots.map((s, i) => (
          <button
            type="button"
            key={s.id}
            onClick={() => setActiveIdx(i)}
            className={cn(
              "flex-shrink-0 w-20 aspect-[4/5] border transition-colors",
              i === activeIdx ? "border-espresso" : "border-transparent",
            )}
            aria-label={`View image ${i + 1}`}
          >
            <StockImage
              id={`pdp-thumb-${product.id}-${s.id}`}
              query={s.query}
              alt={s.alt}
              ratio="4x5"
              width={160}
              className="w-full h-full"
            />
          </button>
        ))}
      </div>

      {/* Desktop thumbnail rail */}
      <div className="hidden lg:flex mt-5 gap-3">
        {shots.map((s, i) => (
          <button
            type="button"
            key={s.id}
            onClick={() => setActiveIdx(i)}
            className={cn(
              "w-20 xl:w-24 aspect-[4/5] border transition-all duration-500 ease-elegant",
              i === activeIdx
                ? "border-espresso opacity-100"
                : "border-transparent opacity-70 hover:opacity-100",
            )}
            aria-label={`View image ${i + 1}`}
            aria-current={i === activeIdx}
          >
            <StockImage
              id={`pdp-thumb-d-${product.id}-${s.id}`}
              query={s.query}
              alt={s.alt}
              ratio="4x5"
              width={200}
              className="w-full h-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
