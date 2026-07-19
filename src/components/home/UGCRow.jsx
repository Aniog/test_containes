import { useEffect, useRef } from "react";
import { ugcItems } from "@/data/products";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-12 md:py-16 bg-parchment" ref={containerRef}>
      <div className="max-w-site mx-auto px-4 md:px-8 mb-8">
        <h2 className="font-serif text-2xl md:text-3xl text-ink font-light tracking-wide-heading text-center">
          As Seen On You
        </h2>
        <p className="mt-2 text-warm-gray text-sm font-sans text-center">
          Tag us @velmora to be featured.
        </p>
      </div>

      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-3 md:gap-4 px-4 md:px-8" style={{ minWidth: "max-content" }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative w-[180px] md:w-[220px] aspect-[9/16] flex-shrink-0 overflow-hidden rounded-sm group"
            >
              <img
                className="w-full h-full object-cover"
                data-strk-img-id={`ugc-${item.id}`}
                data-strk-img={item.query}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
              />
              {/* Overlay caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="font-serif text-sm text-parchment italic">
                  {item.caption}
                </p>
              </div>
              {/* Always-visible subtle caption */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-ink/40 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                <p className="font-serif text-xs text-parchment/80 italic">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
