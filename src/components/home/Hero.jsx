import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-[90vh] md:h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        data-strk-bg-id="hero-background-main"
        data-strk-bg="gold jewelry on model warm light editorial luxury"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        className="absolute inset-0 bg-velmora-surface"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-bg/80 via-velmora-bg/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-velmora-bg/60 via-transparent to-velmora-bg/20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl">
          <p className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-velmora-gold mb-6 animate-fade-in-up">
            Demi-Fine Jewelry
          </p>
          <h1
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light text-velmora-text leading-[0.95] mb-6 animate-fade-in-up delay-100"
            style={{ opacity: 0, animationFillMode: 'forwards' }}
          >
            Crafted to<br />
            <span className="italic text-velmora-gold-light">be Treasured</span>
          </h1>
          <p
            className="text-base md:text-lg text-velmora-text-muted leading-relaxed mb-10 max-w-md animate-fade-in-up delay-200"
            style={{ opacity: 0, animationFillMode: 'forwards' }}
          >
            18K gold-plated essentials designed for the modern woman. Premium quality, accessible luxury, everyday elegance.
          </p>
          <Link
            to="/shop"
            className="inline-block px-10 py-3.5 bg-velmora-gold text-velmora-bg text-[11px] font-medium tracking-[0.18em] uppercase hover:bg-velmora-gold-light transition-all duration-300 animate-fade-in-up delay-300"
            style={{ opacity: 0, animationFillMode: 'forwards' }}
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-velmora-bg to-transparent" />
    </section>
  );
}
