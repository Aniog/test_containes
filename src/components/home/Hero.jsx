import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=1920&q=80"
          alt="Elegant woman wearing gold jewelry"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-rich-black)]/70 via-[var(--color-rich-black)]/40 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container">
        <div className="max-w-2xl">
          {/* Subtitle */}
          <p 
            className="text-sm md:text-base uppercase tracking-[0.3em] text-[var(--color-gold)] mb-4 animate-fade-in"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Demi-Fine Collection
          </p>
          
          {/* Main Headline */}
          <h1 
            className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-6 animate-fade-in-up"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}
          >
            Crafted to be<br />
            <span className="italic">Treasured</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-base md:text-lg text-white/80 mb-8 max-w-md leading-relaxed animate-fade-in-up delay-200">
            Exquisite 18K gold-plated jewelry designed for the modern woman. 
            Everyday luxury, timeless elegance.
          </p>
          
          {/* CTA Button */}
          <div className="animate-fade-in-up delay-300">
            <Link to="/shop">
              <Button variant="gold" size="lg">
                Shop the Collection
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div className="flex flex-col items-center text-white/60 animate-bounce">
          <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
