import React, { useRef } from "react";
import { reelSVG } from "@/data/placeholders";
import { reels } from "@/data/products";
import { useReveal } from "@/lib/useReveal";

export default function Reels() {
  const sectionRef = useReveal();
  const trackRef = useRef(null);

  const scrollBy = (dir) => {
    const node = trackRef.current;
    if (!node) return;
    const card = node.querySelector("[data-reel-card]");
    const step = card ? card.getBoundingClientRect().width + 16 : 240;
    node.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="bg-ink py-20 md:py-28 overflow-hidden">
      <div className="max-w-editorial mx-auto px-5 sm:px-8" ref={sectionRef}>
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12">
          <div>
            <p className="eyebrow !text-cream/60 mb-4">#velmoraworn</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cream leading-[1.05] max-w-xl">
              From the wrists, ears and necks of our community.
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll reels left"
              className="w-10 h-10 border border-white/20 text-cream hover:border-gold hover:text-gold transition-colors flex items-center justify-center"
            >
              <ArrowSmLeft />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Scroll reels right"
              className="w-10 h-10 border border-white/20 text-cream hover:border-gold hover:text-gold transition-colors flex items-center justify-center"
            >
              <ArrowSmRight />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar flex gap-4 overflow-x-auto px-5 sm:px-8 md:px-12 lg:pl-[calc((100vw-1320px)/2+48px)] pb-2 snap-x snap-mandatory"
      >
        {reels.map((r, i) => (
          <ReelCard key={r.id} index={i} {...r} />
        ))}
      </div>
    </section>
  );
}

function ArrowSmLeft() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ArrowSmRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ReelCard({ index, handle, caption }) {
  return (
    <article
      data-reel-card
      className="relative flex-shrink-0 w-[200px] sm:w-[230px] md:w-[240px] aspect-[9/16] bg-cream-200 overflow-hidden snap-start group"
    >
      <img
        src={reelSVG(index)}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/85" aria-hidden="true" />

      {/* Top label */}
      <div className="absolute top-3 left-3 text-cream/90 text-[0.62rem] tracking-widest2 uppercase font-sans font-medium">
        @velmora
      </div>
      <div className="absolute top-3 right-3 w-7 h-7 rounded-full border border-cream/40 flex items-center justify-center text-cream/80 text-[0.6rem] font-sans font-medium">
        ▶
      </div>

      {/* Caption overlay */}
      <div className="absolute left-4 right-4 bottom-4 text-cream">
        <p className="font-serif italic text-base sm:text-lg leading-snug">
          {caption}
        </p>
        <p className="mt-1.5 text-[0.62rem] tracking-widest2 uppercase text-cream/70 font-sans">
          {handle}
        </p>
      </div>
    </article>
  );
}
