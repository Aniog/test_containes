import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[650px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/40 via-charcoal-950/20 to-charcoal-950/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-3xl mx-auto">
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 animate-fade-in"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-cream-100/80 text-base md:text-lg font-light max-w-xl mx-auto mb-10 animate-fade-in"
          style={{ animationDelay: '0.15s', animationFillMode: 'both' }}
        >
          Demi-fine gold jewelry for the modern woman — designed in London, plated in 18K gold, priced for everyday luxury.
        </p>
        <Link
          to="/shop"
          className="btn-accent animate-slide-up"
          style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2.5 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}