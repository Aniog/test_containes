import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden bg-velmora-charcoal">
      {/* Background placeholder - will be replaced by stock image system */}
      <div
        className="absolute inset-0 bg-velmora-dark"
        data-strk-bg-id="hero-bg-velmora-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-velmora-charcoal/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/80 via-transparent to-velmora-charcoal/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center section-padding">
        <p
          id="hero-subtitle"
          className="font-sans text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-velmora-taupe mb-4 md:mb-6"
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] max-w-4xl mb-6 md:mb-8"
        >
          Crafted to be<br className="hidden md:block" /> Treasured
        </h1>
        <p className="font-sans text-sm md:text-base text-velmora-sand/80 max-w-md mb-8 md:mb-10">
          Timeless pieces designed for the modern woman. 18K gold-plated, hypoallergenic, and made to last.
        </p>
        <Link to="/shop" className="btn-primary">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-px h-10 bg-white/30" />
      </div>
    </section>
  );
}