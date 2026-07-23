import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subhead] [hero-headline] gold jewelry on model warm editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      >
        <span id="hero-headline" className="hidden">Crafted to be Treasured</span>
        <span id="hero-subhead" className="hidden">Demi-fine gold jewelry for the modern woman</span>
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-velvet-900/40 via-velvet-900/20 to-velvet-900/70" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-wider animate-fade-in max-w-3xl leading-tight">
          Crafted to be Treasured
        </h1>
        <p
          className="mt-6 text-white/80 text-base md:text-lg font-light tracking-wide max-w-lg animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          Demi-fine gold jewelry designed for everyday luxury. Premium materials, honest prices — pieces meant to be worn and loved.
        </p>
        <Link
          to="/shop"
          className="btn-primary mt-10 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-5 h-8 border-2 border-white/40 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
