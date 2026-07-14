import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-background border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-[4/5] relative bg-secondary rounded-t-full overflow-hidden">
              <img
                alt="Artisan working on jewelry"
                className="w-full h-full object-cover"
                data-strk-img-id="brand-story-img-9f8e7d"
                data-strk-img="[story-headline] [story-desc] jewelry making artisan"
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary rounded-full z-0 opacity-20 pointer-events-none hidden md:block" />
          </div>

          <div className="w-full md:w-1/2 space-y-8 text-center md:text-left z-10 relative">
            <h2 id="story-headline" className="text-3xl md:text-5xl font-serif font-light tracking-wide text-foreground">
              Redefining <br/>Everyday Luxury
            </h2>
            
            <p id="story-desc" className="text-muted-foreground font-light leading-relaxed max-w-lg mx-auto md:mx-0">
              Velmora was born from the belief that exceptional quality shouldn't be reserved for special occasions. We craft demi-fine jewelry designed to withstand the rigors of daily life without losing its luster.
              <br/><br/>
              By bridging the gap between accessible fashion jewelry and unattainable fine pieces, we create modern heirlooms meant to be lived in, loved, and layered.
            </p>
            
            <div className="pt-4">
              <Link to="/about" className="inline-flex items-center space-x-2 text-sm font-serif tracking-widest uppercase border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors">
                <span>Discover Our Story</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}