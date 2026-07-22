import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&h=1080&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-charcoal)]/60 via-[var(--color-charcoal)]/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-xl">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[var(--color-cream)] leading-tight animate-slide-up">
            Crafted to be Treasured
          </h1>
          <p className="mt-6 text-lg text-[var(--color-cream)]/80 leading-relaxed animate-slide-up delay-100">
            Discover our collection of premium demi-fine jewelry, designed for the modern woman who appreciates quiet luxury.
          </p>
          <Link 
            to="/shop"
            className="inline-block mt-8 px-8 py-3 bg-[var(--color-gold)] text-white text-sm tracking-widest uppercase hover:bg-[var(--color-gold-dark)] transition-all duration-300 animate-slide-up delay-200"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[var(--color-cream)]/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[var(--color-cream)]/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}