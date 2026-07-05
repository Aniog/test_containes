import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
      {/* Background gradient overlay on a dark warm base */}
      <div className="absolute inset-0 bg-gradient-to-br from-oxford via-oxford-light/80 to-mocha/60" />

      {/* Abstract warm glow */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-bronze/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gold/10 rounded-full blur-[100px]" />

      {/* Gold line accent */}
      <div className="absolute top-[22%] left-0 w-[120px] h-[1px] bg-gold/40 hidden lg:block" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 pt-16">
        <div className="max-w-[560px] lg:max-w-[640px]">
          <p className="font-sans text-[11px] lg:text-xs font-medium tracking-[0.2em] uppercase text-gold-light/80 mb-5 lg:mb-6 animate-fade-in">
            Demi-Fine Jewelry &middot; Est. 2024
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-medium text-cream leading-[1.08] text-balance animate-fade-up">
            Crafted to be <br />
            <span className="italic text-gold-light">Treasured</span>
          </h1>
          <p className="mt-5 lg:mt-7 text-sm lg:text-base text-cream/60 leading-relaxed max-w-[440px] animate-fade-up" style={{ animationDelay: '0.15s' }}>
            Gold-plated pieces designed for everyday elegance. Each creation blends modern restraint with timeless warmth — because the jewelry you reach for every day deserves to be extraordinary.
          </p>
          <div className="mt-8 lg:mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gold text-oxford text-sm font-semibold tracking-wider uppercase rounded-sm hover:bg-gold-light transition-colors duration-300"
            >
              Shop the Collection
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/shop/Sets"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-cream/20 text-cream/80 text-sm font-medium tracking-wider uppercase rounded-sm hover:border-cream/50 hover:text-cream transition-colors duration-300"
            >
              Gift Sets
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-cream/40">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-cream/30 to-transparent" />
      </div>
    </section>
  );
}
