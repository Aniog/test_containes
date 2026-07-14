import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} id="about" className="py-20 md:py-28 bg-linen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative rounded-lg overflow-hidden">
            <div className="aspect-[4/5] bg-linen">
              <img
                data-strk-img-id="brand-story-velmora-img"
                data-strk-img="[brand-story-text] [brand-story-title]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'%3E%3Crect fill='%23F0EDE6' width='400' height='500'/%3E%3Ctext x='200' y='250' text-anchor='middle' fill='%23C9A84C' font-size='14' font-family='serif'%3EVelmora%3C/text%3E%3C/svg%3E"
                alt="Velmora artisan crafting gold jewelry"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-gold/30 rounded-lg -z-10" />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-4xl md:text-5xl text-charcoal mb-6 leading-[1.1]"
            >
              Jewelry That Feels
              <br />
              <span className="italic">Like You</span>
            </h2>
            <div className="space-y-4">
              <p
                id="brand-story-text"
                className="text-sm text-muted leading-relaxed font-sans"
              >
                Velmora was born from a simple belief: luxury should be accessible.
                We create demi-fine gold jewelry that bridges the gap between costume
                and couture — pieces that feel special without the markup.
              </p>
              <p className="text-sm text-muted leading-relaxed font-sans">
                Every piece is crafted with 18K gold plating over sterling silver,
                designed to be worn daily without tarnishing. We test every design
                for comfort, durability, and that perfect golden glow.
              </p>
            </div>
            <Link
              to="#"
              className="inline-block mt-8 font-sans text-xs uppercase tracking-widest-xl text-gold border-b border-gold pb-1 hover:text-gold-dark hover:border-gold-dark transition-colors duration-300"
            >
              Read Our Full Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
