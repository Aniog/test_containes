import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-end md:items-center overflow-hidden bg-charcoal-950">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1600&q=85"
          alt="Woman wearing gold jewelry"
          className="w-full h-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/30 via-charcoal-950/20 to-charcoal-950/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16 md:pb-24 pt-32">
        <div className="max-w-2xl">
          {/* Label */}
          <p className="label text-gold-300 mb-6 animate-in opacity-0">
            Demi-Fine Gold Jewelry
          </p>

          {/* Headline */}
          <h1
            className="heading-display text-cream-50 mb-6 animate-in opacity-0"
            style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
          >
            Crafted to be
            <br />
            <em className="font-light italic text-gold-200">Treasured</em>
          </h1>

          {/* Subhead */}
          <p
            className="font-sans text-base md:text-lg font-light text-cream-200/80 leading-relaxed mb-10 max-w-md animate-in opacity-0"
            style={{ animationDelay: '250ms', animationFillMode: 'forwards' }}
          >
            Hand-finished 18K gold-plated jewelry, designed for everyday luxury and made to last.
          </p>

          {/* CTA */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-in opacity-0"
            style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
          >
            <Link to="/shop" className="btn-primary text-center">
              Shop the Collection
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-cream-200/40 text-cream-100 font-sans font-medium text-xs uppercase tracking-ultra-wide transition-all duration-300 hover:border-cream-200 hover:bg-cream-200/10"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-in opacity-0"
        style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
        <span className="text-[10px] font-sans uppercase tracking-ultra-wide text-cream-200/60">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-cream-200/60 to-transparent" />
      </div>
    </section>
  );
}
