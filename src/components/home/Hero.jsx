import { Link } from 'react-router-dom';
import Button from '../ui/Button';

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container">
        <div className="max-w-2xl">
          <h1 
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-text-light leading-tight animate-fade-in"
          >
            Crafted to be Treasured
          </h1>
          <p className="mt-6 text-lg md:text-xl text-text-light/80 max-w-lg animate-fade-in delay-100">
            Discover our collection of timeless demi-fine jewelry, designed for the modern woman who appreciates quiet luxury.
          </p>
          <div className="mt-10 animate-fade-in delay-200">
            <Link to="/shop">
              <Button variant="accent" size="lg">
                Shop the Collection
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-text-light/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-text-light/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}

export default Hero;