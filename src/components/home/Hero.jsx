import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div 
        data-strk-bg-id="hero-bg-9912"
        data-strk-bg="[hero-title] close up gold jewelry on woman high fashion aesthetic"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center text-white space-y-8 fade-in">
        <div className="space-y-4">
          <span className="uppercase tracking-[0.4em] text-[10px] md:text-xs">Velmora Fine Jewelry</span>
          <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl font-serif">
            Crafted to be <br /> <span className="italic">Treasured</span>
          </h1>
          <p className="text-sm md:text-base tracking-wide max-w-lg mx-auto opacity-90 leading-relaxed font-light">
            Demi-fine pieces meticulously designed for your everyday luxury. <br className="hidden md:block" />
            18K Gold plated, made to last.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link to="/shop" className="bg-white text-velmora-charcoal px-10 py-4 uppercase tracking-[0.2em] text-[10px] hover:bg-velmora-cream transition-colors font-medium">
            Shop the Collection
          </Link>
          <Link to="/collections" className="bg-transparent border border-white text-white px-10 py-4 uppercase tracking-[0.2em] text-[10px] hover:bg-white/10 transition-colors font-medium">
            View Lookbook
          </Link>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 opacity-50">
        <div className="w-[1px] h-12 bg-white" />
        <span className="uppercase tracking-[0.3em] text-[8px] text-white">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
