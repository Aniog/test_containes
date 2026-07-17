import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { heroImages } from '@/data/products';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImages[0]} 
          alt="Luxury gold jewelry"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-charcoal/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 md:px-12 flex items-center">
        <div className="max-w-xl">
          <h1 className="font-serif text-4xl md:text-display text-cream leading-tight">
            Crafted to be Treasured
          </h1>
          <p className="mt-6 text-lg md:text-xl text-cream/80 font-sans font-light leading-relaxed">
            Discover our collection of premium demi-fine jewelry, designed for the modern woman who appreciates quiet luxury.
          </p>
          <Link to="/shop">
            <Button 
              variant="primary" 
              size="lg" 
              className="mt-8 text-xs uppercase tracking-widest"
            >
              Shop the Collection
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-cream/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}