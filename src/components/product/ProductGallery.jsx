import { useEffect, useRef, useState } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import SmartImage from "@/components/ui/SmartImage";
import { cn } from "@/lib/cn";

// The strk-img plugin pre-registers `data-strk-img-id` entries it finds
// at build time. IDs that aren't registered in the config are silently
// skipped by ImageHelper.loadImages, so the gallery MUST use IDs that
// appear in src/strk-img-config.json. We pre-generate two IDs per
// product (hero + alt) in the data file and reuse them across the
// gallery's image slots.
export default function ProductGallery({ images, name, imgIds }) {
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return undefined;
    return ImageHelper.loadImages(strkImgConfig, node);
  }, [imgIds.join("|")]);

  return (
    <div ref={containerRef} className="flex flex-col-reverse md:flex-row gap-3 md:gap-4">
      <ol className="flex md:flex-col gap-3 md:gap-4 overflow-x-auto md:overflow-visible no-scrollbar">
        {images.map((img, i) => (
          <li key={i} className="flex-shrink-0">
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1}`}
              aria-current={i === active}
              className={cn(
                "block w-16 h-20 md:w-20 md:h-24 overflow-hidden bg-ivory border transition-colors",
                i === active
                  ? "border-ink"
                  : "border-transparent hover:border-ink/40"
              )}
            >
              <SmartImage
                alt={`${name} thumbnail ${i + 1}`}
                query={img.query}
                ratio="1x1"
                width={200}
                imgId={imgIds[i % imgIds.length]}
                className="w-full h-full"
              />
            </button>
          </li>
        ))}
      </ol>

      <div className="flex-1 min-w-0">
        <div className="relative aspect-[4/5] md:aspect-[1/1] overflow-hidden bg-ivory">
          <SmartImage
            alt={name}
            query={images[active].query}
            ratio="1x1"
            width={1200}
            imgId={imgIds[active % imgIds.length]}
            className="w-full h-full"
            sizes="(min-width: 1024px) 50vw, 100vw"
            loading="eager"
            fetchpriority="high"
          />
        </div>
      </div>
    </div>
  );
}
