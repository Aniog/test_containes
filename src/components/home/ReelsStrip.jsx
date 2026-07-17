import React from "react";
import { reels } from "@/data/products";
import { useStrkImages } from "@/hooks/useStrkImages";

export default function ReelsStrip() {
  const ref = useStrkImages([]);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-sand">
      <div className="max-w-content mx-auto px-5 md:px-8 mb-10">
        <div className="flex items-end justify-between reveal">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-gold mb-3">Worn & Loved</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">As Seen On You</h2>
          </div>
          <p className="hidden md:block text-sm text-stone max-w-xs text-right">
            Tag <span className="text-ink">@velmora</span> to be featured.
          </p>
        </div>
      </div>

      <div
        ref={ref}
        className="flex gap-4 md:gap-5 overflow-x-auto no-scrollbar px-5 md:px-8 pb-2 snap-x snap-mandatory"
      >
        {reels.map((reel) => (
          <article
            key={reel.id}
            className="relative shrink-0 w-[68vw] sm:w-[280px] aspect-[9/16] overflow-hidden bg-ink snap-start group"
          >
            <img
              alt={reel.caption}
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] gold jewelry worn`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <p
              id={reel.titleId}
              className="absolute bottom-5 left-5 right-5 font-serif italic text-cream text-lg md:text-xl leading-snug"
            >
              {reel.caption}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
