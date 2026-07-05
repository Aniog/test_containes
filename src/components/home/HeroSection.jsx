import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7a3c9f"
        data-strk-bg="[hero-title] [hero-subtitle] luxury gold jewelry close-up model"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="section-subheading text-brand-gold mb-4 animate-fade-in">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light leading-[1.1] mb-6 animate-slide-up"
        >
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="font-sans text-base md:text-lg text-white/80 max-w-lg mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Premium 18K gold-plated jewelry, designed for everyday elegance. Hypoallergenic, tarnish-resistant, and made to last.
        </p>
        <Link
          to="/shop"
          className="btn-gold px-10 py-4 text-base animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-white/30" />
      </div>
    </section>
  );
}
