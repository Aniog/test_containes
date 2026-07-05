import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80"
          alt="Velmora jewelry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <span className="inline-block text-[#d4af37] text-sm tracking-[0.3em] uppercase mb-6">
            Demi-Fine Jewelry
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
            Timeless elegance meets everyday luxury. 18K gold plated pieces 
            designed for the modern woman.
          </p>
          <Link
            to="/shop"
            className="inline-block px-10 py-4 bg-[#d4af37] text-[#1a1a1a] text-sm tracking-[0.2em] uppercase hover:bg-white transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
