import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p id="hero-subtitle" className="text-white/80 text-xs md:text-sm tracking-[0.3em] uppercase mb-4 md:mb-6">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="serif-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-6 md:mb-8"
        >
          Crafted to be<br />Treasured
        </h1>
        <p className="text-white/70 text-sm md:text-base max-w-md mx-auto mb-8 md:mb-10 leading-relaxed">
          Timeless pieces designed for the modern woman. 18K gold plated, hypoallergenic, made to last.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 md:px-10 py-3.5 md:py-4 text-xs md:text-sm tracking-widest uppercase hover:bg-opacity-90 transition-all duration-300 hover:shadow-xl group"
        >
          Shop the Collection
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-white/30 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-4 bg-white/60" />
        </div>
      </div>
    </section>
  );
}
