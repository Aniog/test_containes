import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-[4/5] overflow-hidden group">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" 
              alt="Our Story"
              data-strk-img-id="brand-story-img"
              data-strk-img="minimalist jewelry workshop artisan hands gold necklace detail"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1000"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2s]"
            />
            <div className="absolute inset-0 border-[20px] border-white/20 pointer-events-none" />
          </div>
          
          <div className="space-y-12">
            <div className="space-y-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/70">The Velmora Ethos</p>
              <h2 className="text-4xl md:text-6xl font-serif leading-[1.1] text-foreground">
                Quiet Luxury, <br />
                <span className="italic font-light">Loud Quality</span>
              </h2>
            </div>
            
            <div className="space-y-8 text-neutral-600 font-light leading-relaxed max-w-lg">
              <p className="text-lg font-serif italic text-foreground opacity-80">
                "We believe jewelry should be a reflection of one's inner light—subtle, constant, and undeniably present."
              </p>
              <p className="text-sm">
                Founded with a vision to redefine demi-fine jewelry, Velmora blends timeless aesthetics with modern craftsmanship. Each piece is designed to be lived in—transitioning seamlessly from morning coffee to moonlight.
              </p>
              <p className="text-sm">
                Our materials are carefully chosen for longevity and luster, featuring 18K gold layering over hypoallergenic bases, ensuring that your sparkle is both safe and enduring.
              </p>
            </div>
            
            <div className="pt-4">
              <Link to="/about" className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em]">
                Discover Our Story
                <span className="w-12 h-[1px] bg-foreground origin-left group-hover:scale-x-150 transition-transform duration-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
