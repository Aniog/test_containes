import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&h=1080&fit=crop')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-espresso/40" />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-espresso/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory leading-tight mb-6">
          Crafted to be Treasured
        </h1>
        <p className="text-lg sm:text-xl text-ivory/80 mb-8 max-w-xl mx-auto font-light">
          Demi-fine jewelry designed for the modern woman. Timeless elegance, 
          crafted in 18K gold, made to be worn and loved every day.
        </p>
        <Link to="/collection">
          <Button variant="outline" size="lg" className="border-ivory text-ivory hover:bg-ivory hover:text-espresso">
            Shop the Collection
          </Button>
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-ivory/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-ivory/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
