import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=1920&q=80"
          alt="Velmora jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/20 to-charcoal/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-wide mb-6 leading-tight animate-fade-in">
          Crafted to be<br />Treasured
        </h1>
        <p className="font-sans font-light text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto animate-fade-in stagger-1">
          Timeless demi-fine jewelry designed for the modern woman.
          18K gold plated, hypoallergenic, and made to be loved.
        </p>
        <div className="animate-fade-in stagger-2">
          <Link to="/shop">
            <Button variant="primary" size="lg">
              Shop the Collection
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
