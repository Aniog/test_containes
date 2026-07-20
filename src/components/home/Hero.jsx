import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&h=1080&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/40" />
      </div>

      {/* Content */}
      <div className={cn(
        'relative z-10 text-center text-cream px-4 transition-all duration-1000',
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-display mb-6">
          Crafted to be Treasured
        </h1>
        <p className="font-sans text-lg md:text-xl text-cream/80 max-w-xl mx-auto mb-8">
          Premium demi-fine jewelry for the modern woman. Elegant pieces designed to become your most treasured possessions.
        </p>
        <Link 
          to="/shop"
          className="inline-block bg-gold text-charcoal font-sans text-sm uppercase tracking-widest py-4 px-10 transition-all duration-300 hover:bg-gold-hover"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60 animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}