import { useState } from "react";
import { StockImage } from "@/components/ui/StockImage";
import { cn } from "@/lib/utils";

export default function ImageGallery({ images, productName }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex] || images[0];

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-5">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 md:w-20 shrink-0 overflow-x-auto md:overflow-visible no-scrollbar">
        {images.map((img, i) => (
          <button
            key={img.id}
            type="button"
            onClick={() => setActiveIndex(i)}
            aria-label={`View image ${i + 1} of ${images.length}`}
            aria-current={i === activeIndex}
            className={cn(
              "relative w-16 md:w-20 aspect-[4/5] overflow-hidden bg-hairline/30 border transition-colors shrink-0",
              i === activeIndex ? "border-ink" : "border-transparent hover:border-hairline"
            )}
          >
            <StockImage
              id={`${img.id}-thumb`}
              query={img.query}
              ratio="4x5"
              width={160}
              alt={`${productName} — thumbnail ${i + 1}`}
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 min-w-0">
        <div className="relative aspect-[4/5] bg-hairline/30 overflow-hidden">
          <StockImage
            id={active.id}
            query={active.query}
            ratio="4x5"
            width={1100}
            alt={active.alt || productName}
            className="transition-opacity duration-500"
          />
        </div>
      </div>
    </div>
  );
}
