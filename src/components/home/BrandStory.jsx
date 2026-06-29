import { Link } from 'react-router-dom';

const SVG_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-velmora-stone/10">
            <img
              alt="Velmora brand story"
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-title] [brand-story-text]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src={SVG_PLACEHOLDER}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="lg:py-8">
            <p className="text-velmora-stone uppercase tracking-[0.2em] text-sm mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-5xl text-velmora-espresso mb-6 leading-tight"
            >
              Designed for the Moments That Matter
            </h2>
            <p
              id="brand-story-text"
              className="text-velmora-stone leading-relaxed mb-6"
            >
              Velmora was born from a belief that fine jewelry should feel
              attainable. Every piece is crafted in small batches using
              responsibly sourced materials, then finished in thick 18K gold
              plating for a warm, lasting glow.
            </p>
            <p className="text-velmora-stone leading-relaxed mb-8">
              From quiet mornings to celebration nights, our designs move with
              you — elegant, modern, and made to be treasured for years.
            </p>
            <Link
              to="/about"
              className="inline-block font-serif text-lg text-velmora-espresso underline underline-offset-8 decoration-velmora-gold hover:text-velmora-gold transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
