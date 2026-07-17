import { useState } from "react";
import { JewelryImage } from "@/components/ui/JewelryImage";
import { cn } from "@/lib/utils";

const palettes = ["amber", "honey", "champagne", "blush", "warm"];

export function Gallery({ product }) {
  const [active, setActive] = useState(0);
  const thumbs = [0, 1, 2, 3];

  return (
    <div className="grid grid-cols-12 gap-3 md:gap-5">
      {/* Thumbnails — desktop vertical */}
      <div className="hidden md:flex md:col-span-1 md:flex-col md:gap-3">
        {thumbs.map((i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              "aspect-square w-full overflow-hidden border-2 transition-colors",
              active === i ? "border-ink" : "border-transparent hover:border-line",
            )}
            aria-label={`View image ${i + 1}`}
          >
            <JewelryImage
              art={product.art}
              palette={palettes[(i + 1) % palettes.length]}
              variant={i}
              ratio="1/1"
              className="h-full w-full"
              alt=""
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="col-span-12 md:col-span-11">
        <div className="relative aspect-[4/5] overflow-hidden bg-canvas-soft">
          <JewelryImage
            art={product.art}
            palette={palettes[active % palettes.length]}
            variant={active}
            ratio="4/5"
            className="h-full w-full"
            alt={product.name}
          />
        </div>
        {/* Mobile thumb row */}
        <div className="mt-3 flex gap-2 md:hidden">
          {thumbs.map((i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "aspect-square w-16 overflow-hidden border-2 transition-colors",
                active === i ? "border-ink" : "border-transparent",
              )}
              aria-label={`View image ${i + 1}`}
            >
              <JewelryImage
                art={product.art}
                palette={palettes[(i + 1) % palettes.length]}
                variant={i}
                ratio="1/1"
                className="h-full w-full"
                alt=""
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
