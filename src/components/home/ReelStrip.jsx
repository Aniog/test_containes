import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { reels } from "@/data/products";

export default function ReelStrip() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-10">
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">
            As Worn By You
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">
            #VelmoraMoments
          </h2>
        </div>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-4 px-5 md:px-8 pb-2" style={{ width: "max-content" }}>
          {reels.map((reel) => (
            <article
              key={reel.id}
              className="relative w-[230px] md:w-[260px] aspect-[9x16] shrink-0 overflow-hidden bg-espresso group"
            >
              <img
                alt={reel.caption}
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.titleId}] gold jewelry worn on ear neck`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="520"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
              <p
                id={reel.titleId}
                className="absolute bottom-0 inset-x-0 p-5 font-serif text-ivory text-lg leading-snug italic"
              >
                {reel.caption}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
