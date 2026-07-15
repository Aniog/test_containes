import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section className="py-24 md:py-32 bg-secondary" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-[3/4] relative overflow-hidden max-w-[400px] mx-auto md:ml-auto md:mr-0 z-10">
              <img
                data-strk-img-id="brand-story-img"
                data-strk-img="[story-title]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Velmora Jewelry Craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 w-24 md:w-32 h-24 md:h-32 bg-primary/10 rounded-full blur-2xl z-0" />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center max-w-xl text-center md:text-left">
            <h2 id="story-title" className="font-serif text-3xl md:text-5xl mb-6 leading-tight text-foreground">
              A pursuit of everyday elegance.
            </h2>
            <div className="h-[1px] w-16 bg-primary mx-auto md:mx-0 mb-8" />
            <p className="text-muted-foreground leading-relaxed mb-6 font-light">
              Velmora was born from a simple belief: fine jewelry shouldn't be reserved for special occasions. We craft demi-fine pieces that bridge the gap between fashion and fine, using premium materials that stand the test of time.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 font-light">
              Every curve, every setting, and every reflection is designed to celebrate the modern woman's quiet confidence. Treat yourself, you deserve it.
            </p>
            <div>
              <Button asChild variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-background uppercase tracking-widest px-8">
                <Link to="/#">Read Our Story</Link>
              </Button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}