import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 scale-105"
        data-strk-bg-id="hero-bg"
        data-strk-bg="[hero-subtitle] [hero-title] luxury gold jewelry on skin model editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/20 lg:bg-black/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full text-white mt-20">
        <div className="max-w-2xl space-y-6">
          <p id="hero-subtitle" className="text-xs uppercase tracking-[0.3em] font-sans font-medium animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Demi-Fine Jewelry Collection
          </p>
          <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl font-serif italic leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
            Crafted to be <br /> Treasured
          </h1>
          <div className="pt-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
            <Link 
              to="/shop" 
              className="inline-flex items-center gap-4 bg-white text-primary px-8 py-4 text-xs uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-300 group"
            >
              Shop the Collection
              <MoveRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Trust bar overlay at bottom */}
      <div className="absolute bottom-12 left-0 w-full z-10 hidden lg:block">
        <div className="max-w-7xl mx-auto px-12">
            <div className="flex justify-between text-[10px] uppercase tracking-[0.2em] text-white/80 font-medium">
                <span>Free Worldwide Shipping</span>
                <span>30-Day Returns</span>
                <span>18K Gold Plated</span>
                <span>Hypoallergenic</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
