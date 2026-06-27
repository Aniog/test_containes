import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80"
          alt="Luxury gold jewelry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 pt-20">
        <div className="max-w-xl">
          <span className="inline-block text-xs tracking-[0.2em] uppercase text-gold mb-4 animate-fade-in">
            New Collection
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Crafted to be Treasured
          </h1>
          <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8 max-w-md animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Discover our new collection of demi-fine gold jewelry, designed for the modern woman who appreciates quiet luxury.
          </p>
          <Link
            to="/collection"
            className="inline-block btn-primary animate-fade-in hover-lift"
            style={{ animationDelay: '0.3s' }}
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
