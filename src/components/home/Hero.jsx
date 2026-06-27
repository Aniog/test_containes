import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative w-full h-[92vh] min-h-[580px] overflow-hidden bg-velmora-charcoal">
      {/* Background */}
      <div
        className="absolute inset-0 bg-velmora-charcoal-light"
        data-strk-bg-id="hero-bg-velmora-01"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
        <p
          id="hero-subtitle"
          className="font-sans text-[11px] md:text-[12px] font-medium tracking-[0.2em] uppercase text-white/70 mb-5"
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-[38px] md:text-[64px] lg:text-[76px] font-light text-white leading-[1.1] max-w-[900px] mb-6"
        >
          Crafted to be Treasured
        </h1>
        <p className="font-sans text-[14px] md:text-[16px] text-white/60 max-w-[440px] mb-9 leading-relaxed">
          Timeless designs in 18K gold plating, made for the moments that matter most.
        </p>
        <Link
          to="/shop"
          className="inline-block px-9 py-3.5 bg-velmora-gold text-white font-sans text-[12px] font-medium tracking-[0.12em] uppercase hover:bg-velmora-gold-dark transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-white/40">
          Scroll
        </span>
        <div className="w-[1px] h-6 bg-white/30 animate-pulse" />
      </div>
    </section>
  );
}