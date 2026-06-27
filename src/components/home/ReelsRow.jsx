import React, { useEffect, useRef } from "react";
import { Play } from "lucide-react";
import { REELS } from "@/data/products";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function ReelsRow() {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="bg-ink py-20 text-cream md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 pb-10">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold-light">
              @velmora
            </p>
            <h2 className="mt-3 font-serif text-4xl font-light tracking-tight md:text-5xl">
              Worn by you.
            </h2>
          </div>
          <a
            href="#"
            className="text-[11px] uppercase tracking-[0.28em] text-cream/80 underline-offset-8 transition-colors duration-300 hover:text-gold-light hover:underline"
          >
            Follow on Instagram →
          </a>
        </div>
      </div>

      <div className="no-scrollbar overflow-x-auto">
        <div className="flex gap-4 px-5 pb-2 md:gap-5 md:px-10">
          {REELS.map((reel, idx) => (
            <article
              key={reel.id}
              id={`reel-${reel.id}`}
              className="group relative aspect-[9/16] w-[60vw] flex-shrink-0 overflow-hidden bg-ink-soft md:w-[260px] lg:w-[300px]"
            >
              <img
                alt={reel.caption}
                data-strk-img-id={reel.imgId}
                data-strk-img={reel.query}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
              <div className="absolute right-3 top-3 rounded-full bg-cream/15 p-2 backdrop-blur-sm">
                <Play className="h-3 w-3 fill-cream text-cream" />
              </div>
              <p
                id={`reel-caption-${reel.id}`}
                className="absolute inset-x-4 bottom-4 font-serif text-xl italic leading-tight text-cream"
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
