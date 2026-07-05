import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-espresso">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80"
          alt="Luxury gold jewelry"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/80 via-espresso/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-2xl">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in">
            Premium Demi-Fine Jewelry
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-display text-ivory leading-tight mb-6 animate-fade-in-delay-1">
            Crafted to be Treasured
          </h1>
          <p className="text-champagne/90 text-lg md:text-xl max-w-lg mb-8 leading-relaxed animate-fade-in-delay-2">
            Timeless pieces designed for moments that matter. 18K gold-plated, hypoallergenic jewelry that feels luxurious and lasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-3">
            <Link
              to="/shop"
              className="inline-block px-10 py-4 bg-gold text-white text-sm font-medium tracking-wider uppercase hover:bg-gold-light transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Shop the Collection
            </Link>
            <Link
              to="/about"
              className="inline-block px-10 py-4 border border-champagne/40 text-champagne text-sm font-medium tracking-wider uppercase hover:border-gold hover:text-gold transition-all duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-champagne/60 animate-bounce">
        <span className="text-xs tracking-wider uppercase">Scroll</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
