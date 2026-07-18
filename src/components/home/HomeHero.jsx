import { Link } from 'react-router-dom';

export default function HomeHero() {
  return (
    <section className="relative h-screen min-h-[650px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-6d34fa"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/60 via-espresso/30 to-espresso/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1
          id="hero-headline"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-warmwhite font-semibold tracking-wide leading-tight mb-6 animate-slide-up"
        >
          Crafted to be<br className="md:hidden" /> Treasured
        </h1>
        <p
          id="hero-subhead"
          className="text-warmwhite/80 text-base md:text-lg font-light max-w-md mx-auto mb-10 tracking-wide animate-slide-up"
          style={{ animationDelay: '0.15s', animationFillMode: 'both' }}
        >
          Demi-fine jewelry designed for the modern woman. <br className="hidden md:block" />
          Gold-plated pieces that elevate the everyday.
        </p>
        <Link
          to="/shop"
          className="btn-accent animate-slide-up"
          style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-5 h-8 rounded-full border-2 border-warmwhite/40 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-warmwhite/60" />
        </div>
      </div>
    </section>
  );
}
