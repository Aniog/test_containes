import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function BrandStory() {
  return (
    <section className="bg-parchment py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden bg-cream">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-title] [brand-story-text]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="max-w-lg">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-gold">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl text-espresso md:text-4xl"
            >
              Made for Modern Heirlooms
            </h2>
            <p
              id="brand-story-text"
              className="mt-6 leading-relaxed text-warm-gray"
            >
              Velmora was born from a belief that fine jewelry should feel
              attainable, wearable, and meaningful. Each piece is designed in
              small batches using responsibly sourced materials and finished
              with 18K gold plating for a warm, lasting glow. We create the kind
              of jewelry you reach for every morning — and reach for again on
              the nights that matter most.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-espresso underline-offset-4 transition-colors hover:text-gold hover:underline"
            >
              Our Story
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
