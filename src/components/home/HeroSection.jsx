import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-background-main"
        data-strk-bg="[hero-subhead] [hero-title] elegant gold jewelry on model close-up warm lighting"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="font-sans text-xs tracking-[0.25em] uppercase text-white/70 mb-6 animate-fade-in">
          Velmora Fine Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif font-light text-5xl md:text-7xl lg:text-hero text-white leading-tight mb-6 animate-fade-in"
          style={{ animationDelay: '0.1s' }}
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subhead"
          className="font-sans text-white/80 text-base md:text-lg font-light max-w-lg mx-auto mb-10 leading-relaxed animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          Premium demi-fine gold jewelry, designed for everyday elegance and unforgettable moments.
        </p>
        <Link
          to="/shop"
          className="btn-primary bg-gold hover:bg-gold-dark text-white px-10 py-4 text-sm animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
