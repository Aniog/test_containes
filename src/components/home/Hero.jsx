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
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-black/40 via-velmora-black/20 to-velmora-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-display text-velmora-white mb-6 animate-fade-in">
          Crafted to be Treasured
        </h1>
        <p className="text-lg md:text-xl text-velmora-white/80 mb-8 max-w-2xl mx-auto">
          Discover our collection of premium demi-fine jewelry. Each piece designed to elevate your everyday moments.
        </p>
        <Link to="/shop">
          <Button variant="primary" size="lg">
            Shop the Collection
          </Button>
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-velmora-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-velmora-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}