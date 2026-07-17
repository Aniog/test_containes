import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[650px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image placeholder */}
      <div className="absolute inset-0 bg-velmora-sand">
        <div className="w-full h-full bg-gradient-to-br from-velmora-gold/20 via-velmora-sand to-velmora-cream" />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-charcoal/40 via-velmora-charcoal/20 to-velmora-charcoal/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-white/70 mb-6 font-sans">
          Velmora Fine Jewelry
        </p>
        <h1 className="heading-xl text-white mb-6">
          Crafted to be<br className="md:hidden" /> Treasured
        </h1>
        <p className="text-base md:text-lg text-white/80 font-light max-w-xl mx-auto mb-10 leading-relaxed">
          Demi-fine gold jewelry designed for the modern woman —<br className="hidden md:block" /> everyday elegance that lasts.
        </p>
        <Link to="/shop" className="btn-accent inline-flex">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/50">Scroll</span>
        <div className="w-px h-8 bg-white/20" />
      </div>
    </section>
  );
}
