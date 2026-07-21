import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-[85vh] md:h-screen flex items-center justify-center overflow-hidden bg-charcoal-800">
      {/* Background image placeholder */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="luxury gold jewelry on model warm lighting close up"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{
          background: 'linear-gradient(135deg, #2D2D2D 0%, #1F1F1F 50%, #141414 100%)',
        }}
      />

      {/* Gold shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/40 via-transparent to-charcoal-900/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div className="animate-fade-in">
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-gold-300 mb-6">
            Demi-fine jewelry · 18K gold plated
          </p>
          <h1 className="font-serif text-display md:text-[5.5rem] text-cream-50 leading-[1.05] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="font-sans text-base md:text-lg text-cream-200 max-w-lg mx-auto mb-10 leading-relaxed">
            Discover our collection of timeless gold jewelry, designed for the modern woman who values quiet luxury.
          </p>
          <Link to="/shop" className="btn-gold">
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-cream-300/50" />
      </div>
    </section>
  );
}
