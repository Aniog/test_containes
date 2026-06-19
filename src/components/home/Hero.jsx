import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-[85vh] md:h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-headline] [hero-sub] elegant gold jewelry editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl">
        <h1
          id="hero-headline"
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] mb-6"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-sub"
          className="text-white/80 text-sm md:text-base font-light tracking-wide max-w-md mx-auto mb-8"
        >
          Demi-fine 18K gold jewelry designed for the moments that matter — from everyday rituals to once-in-a-lifetime celebrations.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-accent text-accent-fg px-10 py-3.5 text-xs font-medium tracking-[0.2em] uppercase hover:bg-accent-hover transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-white/30" />
      </div>
    </section>
  );
}
