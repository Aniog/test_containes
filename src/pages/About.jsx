import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="pt-20 bg-background min-h-screen" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8 py-16 lg:py-24">
        
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-semibold mb-6 block">Our Story</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 text-brand-charcoal leading-tight">
            Crafting the modern heirloom.
          </h1>
          <p className="text-brand-muted text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Velmora Fine Jewelry was born from a simple belief: that fine jewelry doesn't need to be locked away in a safe, waiting for a special occasion. It should be worn, layered, and loved every single day.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center mb-24 relative">
          <div className="flex-1 w-full aspect-[4/5]">
             <img 
                data-strk-img-id="about-img-1"
                data-strk-img="woman adjusting gold necklace aesthetic"
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E`}
                alt="Our craftsmanship"
                className="w-full h-full object-cover shadow-sm"
                style={{backgroundColor: '#e5e5e5'}}
              />
          </div>
          <div className="flex-1 max-w-lg">
            <h2 className="font-serif text-3xl mb-6 text-brand-charcoal">Demi-Fine, Redefined</h2>
            <p className="text-brand-muted mb-6 leading-relaxed font-light">
              We bridge the gap between fast fashion and traditional fine jewelry. Our pieces are crafted using 18K gold thickly plated over sterling silver or premium brass, ensuring you get the weight, warmth, and luster of solid gold without the prohibitive markup.
            </p>
            <p className="text-brand-muted leading-relaxed font-light">
              Every curve, every setting, and every clasp is meticulously designed in our studio, translating classic silhouettes into modern staples that sit beautifully against the skin.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;