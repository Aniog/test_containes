import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&h=1080&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-cream px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-display mb-6 animate-slideUp">
          Crafted to be Treasured
        </h1>
        <p className="text-lg sm:text-xl text-cream/80 mb-8 animate-slideUp delay-100">
          Discover our collection of premium demi-fine jewelry, designed for the modern woman who appreciates quiet luxury.
        </p>
        <div className="animate-slideUp delay-200">
          <Link to="/shop">
            <Button variant="primary" size="lg">
              Shop the Collection
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-cream/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}