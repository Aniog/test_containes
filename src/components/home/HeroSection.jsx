import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto">
        <p
          id="hero-subtitle"
          className="text-xs sm:text-sm tracking-[0.3em] uppercase text-white/80 mb-4 sm:mb-6"
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="velmora-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 sm:mb-8 leading-tight"
        >
          Crafted to be<br />Treasured
        </h1>
        <p className="text-sm sm:text-base text-white/70 mb-8 sm:mb-10 max-w-lg mx-auto leading-relaxed">
          Timeless pieces designed for everyday luxury. 18K gold plated, hypoallergenic, and made to last.
        </p>
        <Link to="/shop" className="velmora-btn-primary">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-white/40" />
      </div>
    </section>
  );
}
