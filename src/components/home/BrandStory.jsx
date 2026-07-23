import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-20 md:py-0 bg-velmora-cream"
    >
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2">
        {/* Image */}
        <div className="relative overflow-hidden md:aspect-auto aspect-[4/3]" style={{ minHeight: '480px' }}>
          <img
            data-strk-img-id="story-img-main-b1c2d3"
            data-strk-img="[story-text] [story-headline] jewelry artisan crafting gold fine jewelry studio"
            data-strk-img-ratio="3x4"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Our Story"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-24 bg-velmora-cream">
          <p className="font-manrope text-[10px] uppercase tracking-widest-xl text-velmora-gold mb-4">
            Our Story
          </p>
          <h2
            id="story-headline"
            className="font-cormorant text-4xl md:text-5xl font-light text-velmora-obsidian leading-tight mb-6"
          >
            Made with intention.<br />
            <em className="italic">Worn with love.</em>
          </h2>
          <div className="w-10 h-px bg-velmora-gold mb-8" />
          <p
            id="story-text"
            className="font-manrope text-sm text-velmora-text-mid leading-relaxed mb-4"
          >
            Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that feel luxurious, wear effortlessly, and last a lifetime.
          </p>
          <p className="font-manrope text-sm text-velmora-text-mid leading-relaxed mb-8">
            Every piece is crafted with 18K gold plating over hypoallergenic bases, designed to be worn every day — from morning coffee to evening celebrations.
          </p>
          <Link
            to="/#about"
            className="inline-flex items-center gap-3 font-manrope text-xs uppercase tracking-widest-md text-velmora-gold group"
          >
            Read Our Story
            <span className="w-8 h-px bg-velmora-gold group-hover:w-12 transition-all duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
