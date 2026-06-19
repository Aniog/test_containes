import React, { useState } from "react";
import { cn } from "@/lib/cn";
import StockImage from "@/components/ui/StockImage";

export default function Gallery({ images = [], name }) {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState({ open: false, x: 50, y: 50 });

  if (images.length === 0) {
    return <div className="aspect-[4/5] bg-cream-200" />;
  }

  const current = images[active] || images[0];

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoom((z) => ({ ...z, x, y }));
  };

  return (
    <div className="grid grid-cols-[80px_1fr] md:grid-cols-[96px_1fr] gap-4 md:gap-5">
      <div className="flex md:flex-col gap-3 md:gap-4 order-2 md:order-1 overflow-x-auto md:overflow-y-auto no-scrollbar md:max-h-[640px]">
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`View image ${i + 1} of ${name}`}
            className={cn(
              "flex-shrink-0 aspect-square w-16 md:w-20 md:h-24 overflow-hidden border transition-colors",
              i === active ? "border-ink" : "border-ink/15 hover:border-ink/40"
            )}
          >
            <StockImage
              imgId={`pdp-thumb-${i}`}
              query={img.query}
              ratio="1x1"
              width="240"
              alt={`${name} thumbnail ${i + 1}`}
              eager={i === 0}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      <div
        className="order-1 md:order-2 relative aspect-[4/5] bg-cream-200 overflow-hidden cursor-zoom-in"
        onMouseMove={onMove}
        onMouseLeave={() => setZoom((z) => ({ ...z, open: false }))}
        onMouseEnter={() => setZoom((z) => ({ ...z, open: true }))}
      >
        <StockImage
          imgId={`pdp-main-${active}`}
          query={current.query}
          ratio="4x5"
          width="1200"
          alt={name}
          eager
          className={cn(
            "w-full h-full object-cover transition-transform duration-700 ease-editorial",
            zoom.open ? "scale-150" : "scale-100"
          )}
          style={zoom.open ? { transformOrigin: `${zoom.x}% ${zoom.y}%` } : undefined}
        />
      </div>
    </div>
  );
}
