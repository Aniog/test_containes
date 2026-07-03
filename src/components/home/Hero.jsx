import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#FAF7F2] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-headline] [hero-subheadline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <img
          src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1920&h=1080&fit=crop"
          alt="Velmora jewelry"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 py-20 md:py-32">
        <div className="max-w-xl md:max-w-2xl">
          {/* Eyebrow */}
          <p className="text-sm font-sans font-medium tracking-[0.3em] text-[#C9A66B] uppercase mb-6 animate-fade-in">
            Demi-Fine Jewelry
          </p>

          {/* Headline */}
          <h1 
            id="hero-headline"
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#3D3833] leading-[1.1] mb-6 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            Crafted to be Treasured
          </h1>

          {/* Subheadline */}
          <p 
            id="hero-subheadline"
            className="text-lg md:text-xl text-[#9A8E82] leading-relaxed mb-10 max-w-lg animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            Timeless 18K gold-plated pieces designed for the modern woman. 
            Elevate every moment with jewelry that feels like you.
          </p>

          {/* CTA Button */}
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/shop"
              className="btn-primary group"
            >
              Shop the Collection
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/about"
              className="btn-outline"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FAF7F2] to-transparent" />
    </section>
  );
}
