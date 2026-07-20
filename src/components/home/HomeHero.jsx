import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeHero = () => {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center overflow-hidden">
      {/* Background Image Wrapper */}
      <div 
        className="absolute inset-0 z-0 bg-surface"
        data-strk-bg-id="home-hero-bg-v1"
        data-strk-bg="[hero-title] [hero-subtitle] jewelry luxury model gold warm lighting"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/20" /> {/* Subtle overlay */}
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 mt-20">
        <div className="max-w-xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <p id="hero-subtitle" className="text-white/80 font-sans text-[11px] uppercase tracking-[0.4em] mb-6">Demi-Fine Gold Jewelry</p>
          <h1 id="hero-title" className="text-white text-6xl md:text-8xl font-serif mb-8 leading-[1.1]">
            Crafted to be <br /> <span className="italic">Treasured</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link 
              to="/shop" 
              className="bg-accent text-white px-10 py-4 uppercase text-[10px] tracking-[0.3em] font-bold hover:bg-white hover:text-foreground transition-all duration-500 flex items-center justify-center gap-3 group"
            >
              Shop the Collection
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Trust Bar (Thin strip under hero) */}
      <div className="absolute bottom-0 left-0 w-full bg-background/10 backdrop-blur-md border-t border-white/10 py-4 px-6 md:px-12 z-20">
        <div className="flex flex-wrap justify-between items-center gap-4 text-white/90 text-[10px] uppercase tracking-widest font-semibold">
          <div className="flex items-center gap-2"><span>Free Worldwide Shipping</span></div>
          <div className="hidden sm:block opacity-30">|</div>
          <div className="flex items-center gap-2"><span>30-Day Returns</span></div>
          <div className="hidden sm:block opacity-30">|</div>
          <div className="flex items-center gap-2"><span>18K Gold Plated</span></div>
          <div className="hidden sm:block opacity-30">|</div>
          <div className="flex items-center gap-2"><span>Hypoallergenic</span></div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
