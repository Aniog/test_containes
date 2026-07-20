import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-velmora-charcoal via-velmora-espresso to-velmora-charcoal">
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-charcoal/60 via-velmora-charcoal/30 to-velmora-charcoal/70" />
      </div>

      {/* Gold accent line */}
      <div className="absolute top-[45%] left-0 w-24 h-[1px] bg-velmora-gold/60 hidden md:block" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="font-sans text-[10px] md:text-xs tracking-[0.35em] uppercase text-velmora-gold-light mb-6 animate-fade-in">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-medium leading-[1.1] tracking-wide animate-slide-up">
          Crafted to be
          <br />
          Treasured
        </h1>
        <p className="mt-6 font-sans text-sm md:text-base text-white/70 leading-relaxed max-w-xl mx-auto animate-slide-up" style={{ animationDelay: '0.15s' }}>
          Heirloom-quality demi-fine jewelry in 18K gold plating.
          Designed for the everyday extraordinary.
        </p>
        <div className="mt-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <Link
            to="/shop"
            className="inline-block bg-velmora-gold text-white font-sans text-xs md:text-sm font-medium uppercase tracking-[0.25em] px-10 py-4 transition-all duration-300 hover:bg-white hover:text-velmora-espresso"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-fade-in">
        <span className="text-[9px] tracking-[0.3em] uppercase font-sans">
          Scroll
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}
