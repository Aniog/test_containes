import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button';

const StorySection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-24" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Side */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-16">
            <div className="relative aspect-[4/5] bg-velmora-light">
               <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Our Story"
                  className="w-full h-full object-cover"
                  data-strk-img-id="story-image"
                  data-strk-img="[story-title] jewelry craftsmanship workshop elegant"
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="1200"
                />
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left">
            <span className="uppercase tracking-widest text-velmora-taupe text-sm block mb-4">
              The Heritage
            </span>
            <h2 id="story-title" className="text-3xl md:text-5xl mb-8 font-serif">
              Enduring Elegance
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
              <p>
                Velmora was born from a simple belief: fine jewelry shouldn't be reserved for special occasions. It should be lived in, loved, and layered into your everyday story.
              </p>
              <p>
                We source only premium materials—18k solid gold vermeil and ethically sourced stones—to create pieces that offer the weight and warmth of solid gold, accessible to the modern woman.
              </p>
            </div>
            <Button asChild variant="outline" className="uppercase tracking-widest font-serif rounded-none border-primary text-primary hover:bg-primary hover:text-white px-8 py-6">
              <Link to="/about">Read Our Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;