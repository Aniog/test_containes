import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-cream/80 text-xs tracking-[0.3em] uppercase mb-5 font-medium">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream font-light leading-[1.1] mb-6 text-balance">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-cream/70 text-sm md:text-base max-w-md mx-auto mb-10 leading-relaxed">
          Timeless pieces designed for the modern woman. 18K gold-plated, hypoallergenic, and made to last.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-cream text-charcoal px-10 py-4 text-xs tracking-widest uppercase font-medium hover:bg-gold hover:text-white transition-all duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-10 bg-cream/40" />
      </div>
    </section>
  );
}