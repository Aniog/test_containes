import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ugcReels } from "@/data/products";

export default function ReelsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 mb-8 md:mb-10">
        <p className="text-xs tracking-[0.25em] uppercase text-muted mb-3">
          @velmorajewelry
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground">
          Styled by You
        </h2>
      </div>

      <div className="relative">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide px-5 md:px-8 lg:px-12 pb-4">
          {ugcReels.map((reel, index) => (
            <article
              key={reel.id}
              className="relative flex-shrink-0 w-[220px] md:w-[260px] aspect-[9/16] group cursor-pointer"
            >
              <img
                data-strk-img-id={`reel-${reel.id}`}
                data-strk-img={`[reel-caption-${index}] ${reel.query}`}
                data-strk-img-ratio="9x16"
                data-strk-img-width={500}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="absolute inset-0 w-full h-full object-cover rounded-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent rounded-sm" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p
                  id={`reel-caption-${index}`}
                  className="font-serif text-lg md:text-xl text-cream leading-snug"
                >
                  {reel.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
