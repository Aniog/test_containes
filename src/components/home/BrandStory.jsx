import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }, []);

  return (
    <section ref={containerRef} className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative aspect-[4/5] bg-muted overflow-hidden">
            <img 
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" 
              data-strk-img="[brand-title] brand model jewelry gold aesthetic editorial"
              data-strk-img-id="brand-story-img"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1200"
              alt="Handcrafted jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-10">
            <div className="space-y-6">
              <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Our Philosophy</p>
              <h2 id="brand-title" className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
                Quiet luxuty, crafted for the jewelry lover.
              </h2>
            </div>
            
            <div className="w-12 h-[1px] bg-accent" />
            
            <p className="text-muted-foreground font-sans leading-relaxed max-w-lg">
                At Velmora, we believe that fine jewelry shouldn't be reserved for special occasions. 
                We craft pieces that transition seamlessly from a morning coffee to an evening gala, 
                emphasizing quality materials and timeless silhouettes.
            </p>
            
            <Link 
              to="/about" 
              className="inline-block text-[11px] uppercase tracking-[0.3em] font-bold border-b border-primary pb-2 hover:text-accent hover:border-accent transition-all duration-300"
            >
              Discover Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
