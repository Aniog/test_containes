import React from "react";
import { Link } from "react-router-dom";

export default function BrandStory() {
  return (
    <section id="story" className="bg-ivory">
      <div className="container-shell py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-6 relative aspect-[4/5] bg-cocoa-soft overflow-hidden">
            <div
              className="absolute inset-0"
              data-strk-bg-id="brand-story-img"
              data-strk-bg="[brand-story-quote] [brand-story-title] [brand-story-eyebrow]"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="1100"
            />
          </div>

          <div className="md:col-span-6 md:pl-6 lg:pl-12">
            <span id="brand-story-eyebrow" className="eyebrow">
              The House of Velmora
            </span>
            <h2
              id="brand-story-title"
              className="mt-4 font-serif text-4xl sm:text-5xl md:text-[56px] text-ink leading-[1.05]"
            >
              Heirlooms in the making.
            </h2>
            <p
              id="brand-story-quote"
              className="mt-6 text-ink/80 text-[17px] leading-relaxed max-w-lg"
            >
              Velmora began at a small bench in Jaipur, with a single brass
              cuff and a notebook of botanical drawings. Today every piece is
              cast in small batches by a workshop of seven, finished by hand,
              and shipped from a quiet studio in Brooklyn.
            </p>
            <p className="mt-4 text-ink/70 text-[15px] leading-relaxed max-w-lg">
              We make jewelry meant to be worn — to coffee, to bed, to the
              corner of a frame. Pieces that begin as gifts and quietly
              become signatures.
            </p>
            <div className="mt-9 flex items-center gap-6">
              <Link to="/about" className="btn-outline">
                Our Story
              </Link>
              <Link
                to="/journal"
                className="text-[12px] uppercase tracking-[0.22em] text-ink border-b border-ink/40 hover:border-ink pb-1 transition-colors"
              >
                The Journal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
