import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-200 via-cream-100 to-cream-300">
        <div className="absolute inset-0 bg-charcoal-800/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <p className="font-sans text-sm tracking-ultra-wide uppercase text-charcoal-600 mb-6 animate-fade-in">
          New Collection 2026
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-charcoal-700 mb-6 animate-slide-up">
          Crafted to be
          <br />
          <span className="font-medium italic">Treasured</span>
        </h1>
        <p className="font-sans text-base sm:text-lg text-charcoal-500 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Discover our collection of demi-fine gold jewelry, designed for the modern woman who appreciates timeless elegance and everyday luxury.
        </p>
        <Link
          to="/shop"
          className="btn-primary inline-block animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-charcoal-400 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-charcoal-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
