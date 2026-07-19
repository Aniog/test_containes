import { useEffect, useRef } from "react";
import { reels } from "@/data/products";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function ReelsStrip() {
  const ref = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream border-y border-sand">
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
              As Worn
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">
              On Our Community
            </h2>
          </div>
          <p className="hidden md:block text-sm text-taupe max-w-xs text-right">
            Real moments, real wear. Tag @velmora to be featured.
          </p>
        </div>
      </div>

      <div className="no-scrollbar overflow-x-auto px-5 md:px-8">
        <div className="flex gap-4 md:gap-6 pb-2 max-w-7xl mx-auto">
          {reels.map((reel) => (
            <article
              key={reel.id}
              className="relative shrink-0 w-[60vw] sm:w-[260px] md:w-[280px] aspect-[9/16] overflow-hidden bg-espresso group"
            >
              <img
                alt={reel.caption}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.titleId}] jewelry worn on ear neck editorial vertical`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5">
                <p
                  id={reel.titleId}
                  className="font-serif text-xl text-ivory italic"
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
