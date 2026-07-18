import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[650px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-velvet-950/70 via-velvet-950/40 to-velvet-950/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-wide leading-tight animate-fade-in"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-6 text-base md:text-lg text-white/70 font-light tracking-wide max-w-xl mx-auto animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          Demi-fine gold jewelry for the modern woman — designed to be lived in, layered, and loved for years to come.
        </p>
        <div className="mt-10 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Link to="/shop" className="btn-accent px-10 py-4 text-sm tracking-widest">
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}