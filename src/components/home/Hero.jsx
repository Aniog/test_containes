import { Link } from 'react-router-dom';
import { HeroPlaceholder } from '../ui/ProductImagePlaceholder';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <HeroPlaceholder />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-rich-black/70 via-rich-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-xl md:max-w-2xl">
          {/* Tagline */}
          <p className="text-champagne text-xs tracking-[0.3em] uppercase mb-4 animate-fade-in">
            Demi-Fine Collection
          </p>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-warm-ivory leading-tight mb-6 animate-fade-in-up">
            Crafted to be<br />
            <span className="italic text-champagne">Treasured</span>
          </h1>

          {/* Subheadline */}
          <p className="text-warm-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-md animate-fade-in-up stagger-1">
            Hand-finished 18K gold plated jewelry designed for the modern woman. 
            Timeless pieces that become part of your story.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-2">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center bg-champagne text-rich-black px-10 py-4 font-medium tracking-wider uppercase text-sm transition-all duration-300 hover:bg-opacity-90 hover:shadow-card-hover"
            >
              Shop the Collection
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center border border-warm-ivory/30 text-warm-ivory px-10 py-4 font-medium tracking-wider uppercase text-sm transition-all duration-300 hover:bg-warm-ivory/10"
            >
              Our Story
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="hidden md:flex items-center gap-2 mt-16 text-warm-gray-400 text-xs tracking-wider">
            <span className="w-8 h-px bg-warm-gray-400" />
            <span>Scroll to discover</span>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warm-ivory to-transparent" />
    </section>
  );
}

export default Hero;
