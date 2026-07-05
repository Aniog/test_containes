import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[650px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background gradient simulating warm-lit jewelry */}
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-espresso/80 via-velmora-espresso/40 to-velmora-espresso/90" />
      <div className="absolute inset-0 bg-gradient-to-tr from-velmora-burgundy/20 via-transparent to-velmora-gold/10" />

      {/* Decorative light orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-velmora-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-velmora-rose/8 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-5 max-w-3xl mx-auto">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-velmora-gold-light mb-6 animate-fade-in">
          Demi-Fine Gold Jewelry
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-medium leading-tight mb-6 animate-slide-up">
          Crafted to be<br className="hidden sm:block" /> Treasured
        </h1>
        <p className="font-sans text-base md:text-lg text-white/60 mb-10 max-w-xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Heirloom-quality demi-fine jewelry in 18k gold plate. Designed for the woman who collects moments — and the pieces that mark them.
        </p>
        <Link
          to="/shop"
          className="btn-primary animate-slide-up inline-flex"
          style={{ animationDelay: '0.2s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-sans">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
