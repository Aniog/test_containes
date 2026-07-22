import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Story = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-secondary">
      <div className="flex flex-col md:flex-row min-h-[600px]">
        
        {/* Image half */}
        <div className="w-full md:w-1/2 aspect-square md:aspect-auto relative bg-background">
          <img
            data-strk-img-id="story-img-1"
            data-strk-img="[story-title] [story-desc] elegant artisan working on jewelry editorial warm lighting"
            data-strk-img-ratio="1x1"
            data-strk-img-width="1000"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora Studio"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text half */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 lg:p-32">
          <div className="max-w-md">
            <span className="text-secondary-foreground uppercase tracking-widest text-xs font-semibold mb-4 block">The Studio</span>
            <h2 id="story-title" className="text-3xl md:text-5xl font-serif mb-8 leading-tight text-foreground">
              Redefining <br/> Modern Luxury
            </h2>
            <p id="story-desc" className="text-muted text-lg font-light leading-relaxed mb-10">
              Velmora was born from a desire to bridge the gap between costume jewelry and fine heirlooms. We craft demi-fine pieces using sterling silver and thick 18k gold plating, ensuring every design feels as luxurious as it looks.
            </p>
            <Link 
              to="/about"
              className="inline-block border-b border-primary text-primary hover:text-foreground hover:border-foreground transition-colors uppercase tracking-widest text-sm pb-1 font-medium"
            >
              Discover Our Story
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Story;