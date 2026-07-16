import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.45)), url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&h=900&fit=crop')`,
        }}
      />

      {/* Content */}
      <div className="container-narrow relative z-10 text-center">
        <p className="text-label text-gold-300 mb-6 animate-fade-in">
          Velmora Fine Jewelry
        </p>
        <h1 className="heading-display text-cream-50 mb-6 animate-slide-up">
          Crafted to be Treasured
        </h1>
        <p className="text-cream-200 text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed font-light animate-slide-up" style={{ animationDelay: '0.15s' }}>
          Discover demi-fine jewelry designed for the modern woman.
          Premium 18K gold plating, accessible luxury.
        </p>
        <Link
          to="/shop"
          className="btn-primary inline-flex animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          Shop the Collection
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-10 bg-gradient-to-b from-transparent to-cream-300/60" />
      </div>
    </section>
  );
}
