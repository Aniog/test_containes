import { Link } from 'react-router-dom';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1920&h=1080&fit=crop"
          alt="Elegant gold jewelry on model"
          className="w-full h-full object-cover object-center"
        />
        {/* Warm overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-warm-900/70 via-warm-900/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-900/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container py-32">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p className="text-gold-300 text-sm uppercase tracking-extra-wide mb-4 animate-fade-in">
            Demi-Fine Collection
          </p>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 animate-slide-up">
            Crafted to be Treasured
          </h1>

          {/* Subheadline */}
          <p className="text-white/80 text-lg md:text-xl max-w-lg mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '150ms' }}>
            Timeless 18K gold plated jewelry designed for the modern woman. 
            Everyday elegance, exceptional quality.
          </p>

          {/* CTA Button */}
          <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
            <Link to="/shop">
              <Button variant="primary" size="lg" className="bg-gold-400 text-warm-900 hover:bg-gold-300">
                Shop the Collection
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
