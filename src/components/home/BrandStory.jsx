import React from "react";
import { Link } from "react-router-dom";

export default function BrandStory() {
  return (
    <section className="bg-bone">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[3/4] bg-parchment overflow-hidden order-1 md:order-1">
            <img
              alt="Velmora atelier"
              data-strk-img-id="brand-story-image"
              data-strk-img="[brand-story-headline] [brand-story-body]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-5 left-5 right-5 text-bone text-[11px] tracking-[0.3em] uppercase">
              Atelier · Lisbon
            </div>
          </div>

          {/* Copy */}
          <div className="order-2 md:order-2">
            <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-headline"
              className="font-serif font-light text-4xl md:text-5xl text-ink leading-[1.05]"
            >
              Small batches.<br />
              <em className="italic">Slow gold.</em>
            </h2>
            <div
              id="brand-story-body"
              className="mt-8 space-y-5 text-ink/80 text-[15px] leading-relaxed max-w-md"
            >
              <p>
                Velmora began with a single ear cuff and a stubborn idea —
                that demi-fine jewelry should never feel like fast fashion.
                Today, every piece is hand-finished by a small team of artisans,
                cast in solid brass and plated in 18k gold.
              </p>
              <p>
                We design for the morning rush and the dinner reservation. For
                the woman buying for herself, and the partner wrapping a gift
                they hope will be kept for years.
              </p>
            </div>
            <Link
              to="/about"
              className="mt-10 inline-block link-underline text-[11px] tracking-[0.3em] uppercase text-ink"
            >
              Read Our Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
