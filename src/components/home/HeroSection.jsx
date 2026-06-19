import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1600&q=85"
          alt="Gold jewelry close-up"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-lg animate-fade-in">
            <p className="text-gold-300 text-xs tracking-widest uppercase font-medium mb-4">
              Demi-Fine Gold Jewelry
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight font-light mb-6">
              Crafted to be
              <span className="block font-semibold italic">Treasured</span>
            </h1>
            <p className="text-cream-200 text-sm sm:text-base leading-relaxed max-w-sm mb-8">
              Hand-finished pieces designed for the woman who values elegance that whispers, not shouts.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white text-xs tracking-widest uppercase font-medium px-8 py-4 transition-all duration-300 group"
            >
              Shop the Collection
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}