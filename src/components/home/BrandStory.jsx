import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-warm-50">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-warm-100 overflow-hidden">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="artisan gold jewelry workshop warm lighting"
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-4">
            <p className="font-sans text-xs tracking-[0.28em] uppercase text-ink-400 mb-4">
              Our Philosophy
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide mb-6 leading-tight">
              Jewelry That Tells
              <br />
              Your Story
            </h2>
            <div className="space-y-4 text-ink-500 text-sm md:text-base leading-relaxed">
              <p>
                Velmora was born from a simple belief: that fine jewelry should feel personal, not precious. 
                Every piece is designed to be worn — not just saved for special occasions.
              </p>
              <p>
                We work with master artisans who hand-finish each piece in 18K gold plate over sterling silver 
                or brass, using ethically sourced crystals and pearls. The result is demi-fine jewelry that 
                looks and feels luxurious, at a price that makes sense.
              </p>
              <p>
                No markups. No middlemen. Just beautiful jewelry, direct to you.
              </p>
            </div>
            <Link to="/shop" className="inline-block mt-8 font-sans text-xs tracking-wider uppercase text-gold hover:text-gold-dark transition-colors underline underline-offset-8">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}