import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

const HomeStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
        {/* Image Left */}
        <div className="relative aspect-square md:aspect-[4/3] bg-[#F4F1ED] overflow-hidden">
          <img
            data-strk-img-id="story-image-4d2a1b"
            data-strk-img="jewelry artisan workshop table gold materials sunset lighting"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            alt="Our Workshop"
            className="w-full h-full object-cover grayscale-[0.3]"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
          />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 -z-10" />
        </div>

        {/* Text Right */}
        <div className="flex flex-col gap-8 max-w-xl">
          <p className="text-xs uppercase tracking-[0.4em] text-gold font-bold">Our Philosophy</p>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight">Beyond the Sparkle</h2>
          <p className="text-lg text-[#1A1A1A]/70 leading-relaxed font-light italic">
            "We believe jewelry is more than an accessory. It is a memory, a milestone, and a whisper of who you are. Velmora was born from a desire for jewelry that feels as good as it looks—premium crafting at an accessible reach."
          </p>
          <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">
            Founded in a small sun-drenched studio, our mission has always been simple: to create demi-fine pieces that bridge the gap between costume jewelry and traditional fine jewelry. Every piece is gold-plated with thick 18K layers for lasting durability.
          </p>
          <Link to="/about">
            <Button variant="outline" className="self-start tracking-extra-wide uppercase py-6 px-10 border-[#1A1A1A]/20">
              DISCOVER OUR STORY
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeStory;
