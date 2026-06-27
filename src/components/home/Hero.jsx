import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1600&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-velmora-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-tight mb-6">
          Crafted to be Treasured
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/90 font-light max-w-xl mx-auto mb-10 leading-relaxed">
          Demi-fine jewelry designed for the modern woman. Timeless pieces that transition seamlessly from day to evening.
        </p>
        <Link to="/shop">
          <Button variant="accent" size="lg" className="shadow-lg">
            Shop the Collection
          </Button>
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
