import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-velmora-charcoal">
        <div className="absolute inset-0 jewelry-placeholder">
          <div className="text-center">
            <span className="text-velmora-gold/20 text-[200px] block mb-8">♢</span>
            <p className="text-velmora-gold/40 text-2xl tracking-widest uppercase">
              Demi-Fine Gold Jewelry
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-wider uppercase mb-6 leading-tight">
          Crafted to Be<br />Treasured
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Discover our collection of demi-fine gold jewelry, hand-crafted 
          with intention and designed to celebrate life's most precious moments.
        </p>
        <Link
          to="/shop"
          className="group bg-velmora-gold text-white px-12 py-5 text-sm uppercase tracking-widest font-medium inline-flex items-center gap-3 hover:bg-velmora-gold-dark transition-all duration-500 hover:shadow-premium-lg"
        >
          Shop the Collection
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/50" />
      </div>
    </section>
  );
}
