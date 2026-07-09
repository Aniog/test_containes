import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-velmora-ink"
        data-strk-bg-id="hero-bg-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-velmora-ink/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fade-in">
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-white/70 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed font-light"
        >
          Demi-fine gold jewelry designed for the modern woman — 
          elegant, accessible, and made to last.
        </p>
        <Link to="/shop" className="btn-primary text-base">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/20" />
      </div>
    </section>
  );
}