import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1920&q=80')`,
        }}
      >
        {/* Warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/70 via-espresso/50 to-espresso/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-xl">
          <p className="text-gold text-sm tracking-ultra-wide uppercase mb-4 animate-fade-up" style={{ animationDelay: '0ms' }}>
            Demi-Fine Gold Jewelry
          </p>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory leading-[1.1] mb-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
            Crafted to be Treasured
          </h1>
          
          <p className="text-ivory/80 text-lg md:text-xl leading-relaxed mb-10 max-w-md animate-fade-up" style={{ animationDelay: '200ms' }}>
            Timeless pieces in 18K gold plating, designed for everyday luxury and life's memorable moments.
          </p>
          
          <div className="animate-fade-up" style={{ animationDelay: '300ms' }}>
            <Link to="/shop">
              <Button variant="primary" size="lg">
                Shop the Collection
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/60 hover:text-gold transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
}
