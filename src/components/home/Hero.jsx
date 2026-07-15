import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[650px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry model editorial warm lighting"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/50 via-charcoal-950/30 to-charcoal-950/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-[720px] mx-auto">
        <p className="font-sans text-[11px] sm:text-xs tracking-widest3 uppercase text-cream-100/80 mb-6 animate-fade-in">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-cream-50 leading-[1.1] mb-6 animate-fade-in-up text-balance"
          style={{ animationDelay: '0.2s' }}
        >
          Crafted to be<br className="hidden sm:block" /> Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-base sm:text-lg text-cream-200/80 font-light max-w-[480px] mx-auto mb-10 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          Heirloom-worthy gold jewelry at an accessible price.<br className="hidden sm:block" /> Designed for the woman who knows quiet luxury.
        </p>
        <Link
          to="/shop"
          className="inline-block btn-accent animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
