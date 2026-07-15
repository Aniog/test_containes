import { Link } from 'react-router-dom';

export function BrandStory() {
  return (
    <section className="bg-velmora-cream">
      <div className="grid md:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-charcoal md:aspect-auto md:min-h-[600px]">
          <div className="absolute inset-0 bg-gradient-to-br from-velmora-warm-gray via-velmora-taupe to-velmora-charcoal" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="mx-auto mb-6 h-px w-24 bg-velmora-gold" />
              <p className="font-serif text-2xl italic text-white/90 md:text-3xl">
                "Every piece tells a story"
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center bg-velmora-charcoal px-6 py-16 md:px-16 lg:px-24">
          <div className="max-w-md">
            <p className="mb-4 font-sans text-xs font-medium uppercase tracking-widest-xl text-velmora-gold">
              Our Philosophy
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl text-white md:text-4xl lg:text-5xl"
            >
              Designed for Modern Heirlooms
            </h2>
            <p
              id="brand-story-text"
              className="mt-6 font-sans font-light leading-relaxed text-white/80"
            >
              Velmora was born from a belief that fine-feeling jewelry should be within reach. Each
              piece is cast in small batches, plated in 18K gold, and finished by hand — so you can
              build a collection worth keeping.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-block border border-white/30 px-8 py-3.5 font-sans text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-velmora-charcoal"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
