import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="velmora-hero-bg-7a3f9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-charcoal/60 via-velmora-charcoal/30 to-velmora-charcoal/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p id="hero-subtitle" className="text-white/70 text-xs tracking-[0.3em] uppercase mb-4 font-medium animate-fade-in">
          Handcrafted · 18K Gold Plated
        </p>
        <h1 id="hero-title" className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light leading-[1.1] mb-6 animate-fade-in-up">
          Crafted to be<br />
          <span className="italic">Treasured</span>
        </h1>
        <p className="text-white/80 text-sm sm:text-base max-w-lg mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          Premium demi-fine jewelry designed for the modern woman. Thoughtfully crafted, beautifully accessible.
        </p>
        <Link
          to="/shop"
          className="inline-block px-10 py-4 bg-velmora-gold text-white text-xs tracking-[0.2em] uppercase font-semibold hover:bg-velmora-gold-dark transition-colors duration-300 animate-fade-in-up"
          style={{ animationDelay: '400ms' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-10 bg-white/40" />
      </div>
    </section>
  );
}
