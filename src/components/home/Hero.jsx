import React from 'react';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-vlm-001"
        data-strk-bg="elegant gold jewelry model close up warm light editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in-up">
          <span className="text-white/80 uppercase tracking-[0.4em] text-[10px] md:text-xs">
            Velmora Fine Jewelry
          </span>
          <h1 className="text-5xl md:text-8xl text-white font-serif leading-tight">
            Crafted to be <br /> <span className="italic">Treasured</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light tracking-wide max-w-xl mx-auto">
            Sustainable demi-fine jewelry made from recycled metals and ethically sourced stones.
          </p>
          <div className="pt-8">
            <Link to="/shop">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-velmora-base px-10 h-14"
              >
                Shop the Collection
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Trust bar overlay at bottom of screen if preferred, but instructions say "thin strip under hero" */}
    </section>
  );
};

export default Hero;
