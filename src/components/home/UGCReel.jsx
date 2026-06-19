import React from "react";
import JewelryImage from "@/components/ui/JewelryImage";
import { UGC_REELS } from "@/lib/products";

export default function UGCReel() {
  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow-dark">@velmora · #worninvelmora</p>
            <h2 className="mt-3 font-serif font-light text-4xl md:text-5xl text-ivory leading-[1.05] text-balance">
              Worn In Velmora
            </h2>
          </div>
          <p className="font-serif text-lg md:text-xl text-ivory/70 max-w-md italic">
            Real moments, from our community. Tag us to be featured.
          </p>
        </div>

        <div className="relative -mx-5 md:-mx-10 lg:-mx-16">
          <div className="flex gap-4 md:gap-5 overflow-x-auto px-5 md:px-10 lg:px-16 pb-4 scroll-hide snap-x snap-mandatory">
            {UGC_REELS.map((reel) => (
              <ReelCard key={reel.id} reel={reel} />
            ))}
          </div>
          {/* edge fade */}
          <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-ink to-transparent" />
          <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-ink to-transparent" />
        </div>
      </div>
    </section>
  );
}

function ReelCard({ reel }) {
  return (
    <article className="relative flex-shrink-0 w-[220px] md:w-[260px] aspect-[9/16] overflow-hidden snap-start group">
      <JewelryImage id={reel.image} className="w-full h-full transition-transform duration-700 ease-editorial group-hover:scale-[1.04]" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.85) 100%)" }} />
      <div className="absolute left-4 right-4 bottom-5 text-ivory">
        <p className="font-serif text-lg md:text-xl leading-snug italic text-balance">
          {reel.caption}
        </p>
        <p className="mt-2 font-sans text-[10px] uppercase tracking-widest2 text-gold-soft/80">
          {reel.creator}
        </p>
      </div>
    </article>
  );
}
