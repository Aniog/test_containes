import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="luxury gold jewelry on model warm light close-up elegant editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-charcoal-950/30 to-charcoal-950/50" />

      {/* Content */}
      <div className="relative z-10 text-center section-padding max-w-3xl mx-auto">
        <p className="font-sans text-xs md:text-sm tracking-mega-wide uppercase text-gold-300 mb-4 md:mb-6 animate-fade-in">
          Demi-Fine Gold Jewelry
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-cream-50 leading-[0.95] mb-6 md:mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Crafted to be
          <br />
          <em className="italic">Treasured</em>
        </h1>
        <p className="font-sans text-sm md:text-base text-cream-200 max-w-md mx-auto mb-8 md:mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Premium 18K gold-plated jewelry, designed for the modern woman. 
          Hypoallergenic, timeless, and made to be worn every day.
        </p>
        <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Link to="/shop" className="btn-gold">
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-8 bg-cream-50/40" />
      </div>
    </section>
  );
}
