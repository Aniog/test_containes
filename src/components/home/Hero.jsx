import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&h=1080&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-4 animate-fade-in">
          Crafted to be Treasured
        </h1>
        <p className="font-sans text-lg md:text-xl text-white/90 mb-8 max-w-xl mx-auto animate-fade-in delay-100">
          Discover our collection of premium demi-fine jewelry, designed for the modern woman who appreciates quiet luxury.
        </p>
        <Link to="/shop" className="animate-fade-in delay-200">
          <Button size="lg">
            Shop the Collection
          </Button>
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;