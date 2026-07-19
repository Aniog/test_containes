import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

const Hero = () => {
  return (
    <section className="relative h-[100vh] w-full flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-white">
        <div className="max-w-2xl">
          <h2 id="hero-subtitle" className="text-white/80 uppercase tracking-[0.3em] text-xs lg:text-sm mb-4 lg:mb-6">
            Timeless Demi-Fine Gold
          </h2>
          <h1 id="hero-title" className="font-serif text-5xl lg:text-7xl mb-8 lg:mb-10 leading-[1.1]">
            Crafted to be <br /> Treasured
          </h1>
          <Link to="/shop">
            <Button variant="accent" size="lg">
              Shop the Collection
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-white/30" />
      </div>
    </section>
  );
};

export default Hero;
