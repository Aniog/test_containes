import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ugcItems } from "@/data/products";

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-12 md:py-16 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-6 md:mb-8">
        <h2 className="font-serif text-2xl md:text-3xl tracking-wide">
          Styled by You
        </h2>
        <p className="text-sm text-taupe mt-1 tracking-wide">
          Share your look with #VelmoraWoman
        </p>
      </div>
      <div className="flex gap-3 md:gap-4 overflow-x-auto px-4 md:px-8 pb-2 snap-x snap-mandatory scrollbar-hide">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] relative snap-start group"
          >
            <img
              data-strk-img-id={`ugc-${item.id}`}
              data-strk-img={`[ugc-caption-${item.id}] jewelry ear neck worn elegant`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover"
            />
            <span id={`ugc-caption-${item.id}`} className="sr-only">
              {item.caption}
            </span>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3">
              <p className="font-serif text-sm text-white italic">
                {item.caption}
              </p>
              <p className="text-[11px] text-white/70 mt-0.5">{item.author}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
