import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80"
          alt="Gold jewelry on warm background"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(26,24,22,0.3) 0%, rgba(26,24,22,0.5) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <h1
          className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 animate-fade-in-up"
          style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}
        >
          Crafted to be Treasured
        </h1>
        <p
          className="text-lg md:text-xl opacity-80 max-w-xl mx-auto mb-10 animate-fade-in-up"
          style={{ animationDelay: '150ms' }}
        >
          Demi-fine jewelry in 18K gold plate, designed for the modern woman.
          Everyday luxury that feels extraordinary.
        </p>
        <Link
          to="/collection"
          className="inline-flex items-center gap-2 px-10 py-4 text-sm tracking-widest uppercase transition-all hover:gap-4"
          style={{
            backgroundColor: 'var(--color-cream)',
            color: 'var(--color-charcoal)',
          }}
        >
          Shop the Collection
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div
          className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-2"
          style={{ borderColor: 'rgba(255,255,255,0.5)' }}
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}
          />
        </div>
      </div>
    </section>
  );
}