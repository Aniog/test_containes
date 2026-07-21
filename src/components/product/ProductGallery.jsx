import { useRef, useState } from "react";
import { useEffect } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../../strk-img-config.json";
import { cn } from "../../lib/utils";

export default function ProductGallery({ product }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  useEffect(() => { return ImageHelper.loadImages(strkImgConfig, containerRef.current); }, [activeIndex, product.id]);;

  const images = product.images.gallery;

  return (
    <div ref={containerRef} className="flex flex-col-reverse md:flex-row gap-3 md:gap-4">
      {/* Thumbnails — left column on desktop, horizontal row on mobile */}
      <ul className="flex md:flex-col gap-3 md:gap-3 md:w-20 lg:w-24 flex-shrink-0">
        {images.map((query, idx) => {
          const isActive = idx === activeIndex;
          return (
            <li key={idx} className="flex-shrink-0">
              <button
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "block aspect-square w-16 md:w-full overflow-hidden bg-champagne border transition-colors duration-300",
                  isActive
                    ? "border-espresso"
                    : "border-transparent hover:border-sand",
                )}
                aria-label={`View image ${idx + 1} of ${images.length}`}
                aria-current={isActive}
              >
                <img
                  alt=""
                  aria-hidden="true"
                  data-strk-img-id={`${product.id}-thumb-${idx}`}
                  data-strk-img={query}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </button>
            </li>
          );
        })}
      </ul>

      {/* Main image */}
      <div className="flex-1 aspect-[4/5] bg-champagne overflow-hidden">
        <img
          alt={`${product.name} — view ${activeIndex + 1}`}
          data-strk-img-id={`${product.id}-main-${activeIndex}`}
          data-strk-img={images[activeIndex]}
          data-strk-img-ratio="4x5"
          data-strk-img-width="1200"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
