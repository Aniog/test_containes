import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] bg-velmora-espresso overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-velmora-espresso/80 via-velmora-espresso/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl animate-fade-in-up">
            <span className="text-velmora-gold text-sm tracking-ultrawide uppercase mb-4 block">
              Demi-Fine Jewelry
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-velmora-cream leading-tight mb-6">
              Crafted to be<br />
              <span className="italic text-velmora-gold">Treasured</span>
            </h1>
            <p className="text-velmora-sand text-lg mb-8 max-w-md leading-relaxed">
              Timeless pieces in 18K gold plate, designed for the modern woman who 
              appreciates quiet luxury and lasting quality.
            </p>
            <Link to="/collection">
              <Button variant="gold" size="lg">
                Shop the Collection
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-velmora-gold/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-velmora-gold rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
