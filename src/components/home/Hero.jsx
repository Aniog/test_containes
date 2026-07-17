import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1920&h=1080&fit=crop"
          alt="Elegant gold jewelry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/70 via-espresso/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl animate-fade-in">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
            Demi-Fine Jewelry
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/80 text-base sm:text-lg mb-8 max-w-md leading-relaxed">
            Elevate everyday moments with 18K gold-plated pieces designed for the modern woman. 
            Luxury within reach, made to last.
          </p>
          <Link
            to="/collection"
            className="inline-block px-8 py-4 bg-gold text-white text-xs tracking-widest uppercase hover:bg-goldDark transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-white/50 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 border border-white/50 rotate-45 -translate-y-1" />
        </div>
      </div>
    </section>
  );
}
