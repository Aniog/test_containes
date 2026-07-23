import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-warm-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-warm-200 order-2 md:order-1">
            <div className="w-full h-full bg-warm-300" />
          </div>

          {/* Text */}
          <div className="order-1 md:order-2 py-10 md:py-0 md:pl-16 lg:pl-24">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-charcoal-500 mb-4">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-charcoal-900 leading-[1.15]">
              Jewelry that lives with you, <br />
              <span className="italic">not just on you.</span>
            </h2>
            <p className="mt-6 text-sm font-sans text-charcoal-600 leading-relaxed max-w-md">
              Velmora was born from the belief that fine jewelry should be an everyday pleasure, not a locked-away treasure. Each piece is crafted in 18K gold plate over brass, with the weight, warmth, and glow of heirloom jewelry — at a price that lets you build a collection you'll actually wear.
            </p>
            <p className="mt-4 text-sm font-sans text-charcoal-600 leading-relaxed max-w-md">
              Designed in our atelier and brought to life by master artisans, every Velmora piece is hypoallergenic, nickel-free, and made to be lived in — from morning coffee to evening celebrations.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-block text-xs font-sans uppercase tracking-[0.15em] text-charcoal-900 underline underline-offset-8 hover:text-gold-600 transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}