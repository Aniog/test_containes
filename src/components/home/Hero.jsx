import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80')`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-warm-white leading-tight animate-fade-in">
          Crafted to be Treasured
        </h1>
        
        <p className="mt-6 font-sans text-lg sm:text-xl text-warm-white/80 max-w-2xl mx-auto animate-slide-up">
          Demi-fine gold jewelry designed for the modern woman. 
          Timeless elegance meets everyday wearability.
        </p>

        <div className="mt-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Link to="/shop">
            <Button 
              variant="primary" 
              size="lg"
              className="bg-gold-500 hover:bg-gold-600 border-gold-500 text-white px-10 py-4"
            >
              Shop the Collection
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-warm-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-warm-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
