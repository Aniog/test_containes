import React from "react";
import { Play } from "lucide-react";
import { REELS } from "@/data/products";

export default function ReelStrip() {
  return (
    <section className="bg-ink text-bone overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-gold-soft mb-3">
              @velmora · Worn by you
            </p>
            <h2 className="font-serif font-light text-4xl md:text-5xl leading-[1.05] max-w-xl">
              Tagged in gold.
            </h2>
          </div>
          <a
            href="#"
            className="link-underline text-[11px] tracking-[0.3em] uppercase text-bone/85 shrink-0"
          >
            Follow @velmora →
          </a>
        </div>
      </div>

      <div className="pb-20 md:pb-28">
        <div className="flex gap-4 md:gap-5 overflow-x-auto no-scrollbar px-6 md:px-10 snap-x snap-mandatory">
          {REELS.map((r) => (
            <article
              key={r.id}
              className="relative shrink-0 w-[64vw] sm:w-[40vw] md:w-[260px] aspect-[9/16] overflow-hidden bg-ink-soft snap-start group"
            >
              <img
                alt={r.caption}
                data-strk-img-id={r.imgId}
                data-strk-img={`[${r.captionId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              {/* hidden context for image system */}
              <span className="sr-only" id={`${r.captionId}-q`}>
                {r.queryHint}
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 text-[10px] tracking-[0.25em] uppercase text-bone/90">
                <Play size={12} className="fill-bone/90" />
                Reel
              </div>
              <p
                id={r.captionId}
                className="absolute left-4 right-4 bottom-5 font-serif text-xl text-bone leading-snug"
              >
                {r.caption}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
