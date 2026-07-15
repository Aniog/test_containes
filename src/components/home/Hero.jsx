import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[650px] max-h-[900px] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-8a2c91"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p
          id="hero-subtitle"
          className="font-sans text-xs md:text-sm tracking-super uppercase text-white/80 mb-6 animate-fade-in"
        >
          Demi-Fine Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light tracking-wide leading-tight max-w-2xl animate-fade-up"
        >
          Crafted to be Treasured
        </h1>
        <Link
          to="/shop"
          className="btn-primary mt-10 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2.5 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}