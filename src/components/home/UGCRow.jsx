import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ugcItems } from "@/data/products";

function UGCCard({ item }) {
  return (
    <div className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] overflow-hidden group">
      <img
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        data-strk-img-id={item.imgId}
        data-strk-img={`[${item.descId}] [${item.titleId}]`}
        data-strk-img-ratio="9x16"
        data-strk-img-width="400"
        alt={item.caption}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p
          id={item.titleId}
          className="font-cormorant text-sm italic text-cream font-light leading-tight"
        >
          "{item.caption}"
        </p>
        <p id={item.descId} className="sr-only">{item.description}</p>
      </div>

      {/* Instagram-style dot indicator */}
      <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-cream/20 backdrop-blur-sm flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-cream/80" />
      </div>
    </div>
  );
}

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-parchment overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-inter text-xs uppercase tracking-[0.2em] text-gold mb-3">As Worn</p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-espresso">
              Real Women, Real Gold
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block font-inter text-xs uppercase tracking-[0.15em] text-charcoal border-b border-charcoal pb-0.5 hover:text-gold hover:border-gold transition-colors"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Scrollable reel strip */}
      <div ref={containerRef} className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2">
        {ugcItems.map((item) => (
          <UGCCard key={item.id} item={item} />
        ))}
        {/* Repeat for visual fullness */}
        {ugcItems.slice(0, 3).map((item) => (
          <UGCCard key={`${item.id}-dup`} item={{ ...item, imgId: `${item.imgId}-dup` }} />
        ))}
      </div>
    </section>
  );
}
