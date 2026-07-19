import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const About = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
        <p className="text-xs tracking-widest uppercase text-velmora-gold mb-4">Our Story</p>
        <h1 className="font-serif text-3xl md:text-5xl text-velmora-espresso mb-8 leading-tight">
          Where Quiet Luxury Meets Modern Craft
        </h1>
        <div className="aspect-[16/9] bg-velmora-sand/30 rounded-sm mb-10 overflow-hidden">
          <div
            className="w-full h-full"
            data-strk-bg-id="about-hero"
            data-strk-bg="gold jewelry artisan crafting workshop elegant"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1200"
          />
        </div>
        <div className="text-left space-y-6 text-velmora-taupe leading-relaxed">
          <p>
            Velmora was founded in 2022 with a singular vision: to create demi-fine jewelry that feels 
            as special as fine jewelry, without the prohibitive price tag. We believe that luxury 
            should be accessible, wearable, and designed for real life — not just special occasions.
          </p>
          <p>
            Every piece in our collection begins as a hand sketch, refined through prototyping and 
            tested for comfort and durability. We use 18K gold plating on hypoallergenic bases, 
            ensuring that even those with sensitive skin can wear our jewelry with confidence.
          </p>
          <p>
            Our designs draw inspiration from architecture, nature, and the quiet confidence of 
            women who wear their jewelry as an extension of themselves. We do not chase trends — 
            we create pieces that become part of your story.
          </p>
          <p>
            Sustainability is woven into everything we do. From recycled packaging to ethical 
            sourcing, we are committed to minimizing our impact while maximizing the beauty we 
            bring into the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
