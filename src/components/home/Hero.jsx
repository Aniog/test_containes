import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/90 to-charcoal/70"
        data-strk-bg-id="hero-bg-velmora-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry warm light close up model"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-charcoal/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5">
        <p className="font-sans text-xs uppercase tracking-widest-2xl text-gold mb-4 animate-fade-in">
          Premium Demi-Fine Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-display text-ivory max-w-3xl animate-fade-in-up"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="font-sans text-ivory/70 text-base md:text-lg max-w-xl mt-4 mb-8 animate-fade-in-up animation-delay-200"
        >
          18K gold plated jewelry designed for the modern woman. Elegant pieces that transition from day to night, crafted with intention.
        </p>
        <Link
          to="/shop"
          className="btn-primary animate-fade-in-up animation-delay-400"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-ivory/40" />
      </div>
    </section>
  );
}
