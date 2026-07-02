import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] md:h-screen w-full overflow-hidden bg-charcoal-900">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-main"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center section-padding">
        <p id="hero-badge" className="font-sans text-xs tracking-[0.25em] uppercase text-brand-gold-light mb-4 animate-fade-in">
          Demi-Fine Jewelry
        </p>
        <h1 id="hero-title" className="font-serif text-4xl sm:text-5xl md:text-display text-white tracking-[0.04em] mb-6 animate-slide-up">
          Crafted to Be Treasured
        </h1>
        <p id="hero-subtitle" className="font-sans text-sm md:text-base text-white/80 max-w-md mb-8 animate-slide-up" style={{ animationDelay: '0.15s' }}>
          Premium 18K gold-plated jewelry designed for the modern woman.
          Accessible luxury, everyday elegance.
        </p>
        <Link
          to="/shop"
          className="btn-gold text-xs animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/50">Scroll</span>
        <div className="w-px h-8 bg-white/30" />
      </div>
    </section>
  );
}
