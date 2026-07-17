import React from "react";
import { Link } from "react-router-dom";
import { useStrkImages } from "@/hooks/useStrkImages";

export default function BrandStory() {
  const ref = useStrkImages([]);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-ink text-cream">
      <div className="max-w-content mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-ink-soft">
            <img
              alt="Velmora atelier — hand-finishing gold jewelry"
              data-strk-img-id="brand-story-img-velmora-3c8d1e"
              data-strk-img="[brand-story-subtitle] [brand-story-title] gold jewelry atelier craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="reveal">
            <p className="text-xs uppercase tracking-[0.24em] text-gold mb-4">Our Story</p>
            <h2
              id="brand-story-title"
              className="font-serif text-4xl md:text-5xl leading-tight text-cream"
            >
              Quiet luxury, made to be lived in.
            </h2>
            <p
              id="brand-story-subtitle"
              className="mt-6 text-cream/75 leading-relaxed"
            >
              Velmora began with a simple belief: fine gold jewelry shouldn't
              wait for special occasions. We hand-finish every piece in 18K gold
              over sterling silver, balancing heirloom detail with the kind of
              weight you forget you're wearing.
            </p>
            <p className="mt-4 text-cream/75 leading-relaxed">
              From the first sketch to the final polish, each piece is made to be
              treasured — and worn, every day.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-xs uppercase tracking-[0.2em] text-cream border-b border-cream/40 pb-1 hover:border-gold hover:text-gold transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
