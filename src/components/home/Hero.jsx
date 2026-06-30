import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="gold jewelry on model warm light close up elegant luxury"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        {/* Fallback gradient bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900" />
        {/* Warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-gold-400 text-xs tracking-widest-xl uppercase mb-6 font-sans font-medium animate-fade-in">
          Handcrafted in 18K Gold
        </p>
        <h1 className="font-serif text-cream-50 text-hero md:text-hero-lg mb-6 animate-slide-up" style={{ fontWeight: 400, animationDelay: '0.1s', opacity: 0 }}>
          Crafted to be<br />
          <em className="italic" style={{ fontWeight: 300 }}>Treasured</em>
        </h1>
        <p className="text-cream-200/80 text-base md:text-lg max-w-lg mx-auto mb-8 font-sans font-light leading-relaxed animate-slide-up" style={{ animationDelay: '0.25s', opacity: 0 }}>
          Demi-fine gold jewelry designed for everyday elegance. Hypoallergenic, timeless, and made to last.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-gold-500 text-white text-xs tracking-widest-xl uppercase font-medium px-8 py-3.5 hover:bg-gold-600 transition-all duration-300 animate-slide-up"
          style={{ animationDelay: '0.4s', opacity: 0 }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border border-cream-100/30 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-cream-100/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
