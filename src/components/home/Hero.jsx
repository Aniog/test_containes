import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80"
          alt="Gold jewelry"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <p className="text-accent text-sm tracking-widest uppercase mb-4">
            Demi-Fine Jewelry
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            Crafted to be
            <br />
            <span className="italic">Treasured</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-md mb-8 leading-relaxed">
            Delicate designs in 18k gold plating, made for everyday luxury. 
            Jewelry you'll never want to take off.
          </p>
          <Link to="/shop">
            <Button variant="primary" size="lg">
              Shop the Collection
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
