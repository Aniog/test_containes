import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1920&q=80"
          alt="Model wearing gold jewelry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-xl animate-fade-in">
          <p className="text-[var(--color-gold-light)] text-sm tracking-[0.3em] uppercase mb-4">
            Demi-Fine Jewelry
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[var(--color-ivory)] leading-tight mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-[var(--color-sand)] text-lg mb-8 leading-relaxed">
            Hand-finished 18K gold plated pieces designed for everyday luxury. 
            Because the finest things should be worn, not saved.
          </p>
          <Link
            to="/collection"
            className="inline-flex items-center gap-2 btn-accent hover:shadow-lg"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[var(--color-ivory)]/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[var(--color-ivory)]/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
