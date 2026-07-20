import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[650px] max-h-[900px] overflow-hidden">
      {/* Background image placeholder */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-deep-900 via-deep-800 to-deep-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-950/60 via-deep-900/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="font-sans text-xs md:text-sm tracking-widest uppercase text-gold-400 mb-6 animate-fade-in">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-cream font-medium leading-tight max-w-3xl animate-fade-up">
          Crafted to be Treasured
        </h1>
        <p className="mt-6 font-sans text-sm md:text-base text-cream/70 max-w-lg animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Discover demi-fine gold jewelry designed for everyday elegance — 18K gold plated, hypoallergenic, and made to last.
        </p>
        <div className="mt-10 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <Link to="/shop" className="btn-gold text-sm tracking-widest">
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-8 border border-cream/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-cream/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}