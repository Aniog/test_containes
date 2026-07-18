import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden bg-warm-dark">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1600&q=85&fit=crop)`,
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex items-end md:items-center justify-start">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16 md:pb-20">
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white leading-tight">
              Crafted to be<br />Treasured
            </h1>
            <p className="font-sans text-sm md:text-base text-white/70 mt-4 max-w-md leading-relaxed">
              Discover our collection of demi-fine gold jewelry — designed for
              everyday elegance and made to last a lifetime.
            </p>
            <Link
              to="/shop"
              className="inline-block mt-8 bg-gold hover:bg-gold-hover text-white font-sans text-sm uppercase tracking-widest px-8 py-3.5 transition-all duration-300"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}