import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-brand-dark tracking-wide">
            Our Story
          </h1>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        <div className="relative aspect-[16x9] overflow-hidden mb-16">
          <img
            data-strk-img-id="about-hero-t4u5v6"
            data-strk-img="[about-subtitle] [about-title] jewelry artisan workshop"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
            alt="Our Story"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-2xl mx-auto">
          <h2 id="about-title" className="font-serif text-2xl md:text-3xl font-light text-brand-dark mb-6">
            Jewelry That Lives With You
          </h2>
          <p id="about-subtitle" className="font-sans text-base text-brand-muted leading-relaxed mb-6">
            Velmora was founded on a simple conviction: beautiful, lasting jewelry should be accessible to everyone. We partner directly with skilled artisans who share our commitment to quality, using genuine 18K gold plating over sterling silver to create pieces that feel heirloom-worthy without the heirloom price tag.
          </p>
          <p className="font-sans text-base text-brand-muted leading-relaxed mb-6">
            Every design begins in our studio — drawn by hand, refined through iteration, and produced in small batches to ensure meticulous attention to detail. We test every piece for sensitivity and durability, because jewelry should be worn, not stored away.
          </p>
          <p className="font-sans text-base text-brand-muted leading-relaxed mb-10">
            From the initial sketch to the final polish, we oversee every step. No middlemen, no markups — just thoughtfully crafted jewelry delivered directly to you.
          </p>

          <div className="grid grid-cols-3 gap-8 text-center py-10 border-t border-b border-brand-border">
            <div>
              <p className="font-serif text-3xl text-brand-gold">18K</p>
              <p className="font-sans text-xs uppercase tracking-wide text-brand-muted mt-1">Gold Plated</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-brand-gold">30</p>
              <p className="font-sans text-xs uppercase tracking-wide text-brand-muted mt-1">Day Returns</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-brand-gold">100%</p>
              <p className="font-sans text-xs uppercase tracking-wide text-brand-muted mt-1">Nickel Free</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-block bg-brand-gold text-white font-sans text-xs uppercase tracking-super-wide px-10 py-4 hover:bg-brand-gold-dark transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
