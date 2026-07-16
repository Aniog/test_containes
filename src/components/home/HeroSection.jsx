import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[650px] max-h-[900px] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/20 to-charcoal/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <p
          id="hero-subtitle"
          className="text-xs md:text-sm uppercase tracking-[0.35em] mb-6 text-cream/80 animate-fade-in"
        >
          Demi-Fine Jewelry for Everyday
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-wide mb-8 max-w-2xl leading-tight animate-slide-up"
        >
          Crafted to be Treasured
        </h1>
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Link to="/shop" className="btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
