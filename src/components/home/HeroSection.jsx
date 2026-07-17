import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ivory/90 via-ivory/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 pt-20">
        <div className="max-w-2xl">
          <span className="inline-block text-xs tracking-ultra-wide uppercase text-gold mb-4">
            Demi-Fine Jewelry
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
            Crafted to be
            <br />
            <span className="italic">Treasured</span>
          </h1>
          <p className="text-lg text-warm-gray max-w-md mb-8 leading-relaxed">
            Timeless gold-plated jewelry designed for the modern woman. 
            Elegant pieces that transition effortlessly from day to evening.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/collection" className="btn-gold inline-flex items-center gap-2">
              Shop the Collection
              <ArrowRight size={16} />
            </Link>
            <Link to="/about" className="btn-ghost">
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border border-charcoal/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
