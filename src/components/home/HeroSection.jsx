import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.svg"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in">
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-brand-goldLight mb-6">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-brand-cream leading-[1.1] mb-6">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-sm sm:text-base text-brand-warm/90 max-w-md mx-auto mb-10 leading-relaxed">
          Timeless designs in 18K gold plating, made for everyday moments and extraordinary ones.
        </p>
        <Link
          to="/shop"
          className="inline-block px-10 py-4 bg-brand-gold text-brand-base text-sm font-semibold uppercase tracking-widest hover:bg-brand-goldLight transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}