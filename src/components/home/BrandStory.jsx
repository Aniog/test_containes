import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[3/4] bg-warm overflow-hidden">
            <div
              data-strk-bg-id="brand-story-bg-d4e5f6"
              data-strk-bg="[brand-story-title] [our-story-title]"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
              className="w-full h-full"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="text-xs tracking-widest uppercase text-accent mb-4">Our Philosophy</p>
            <h2 id="our-story-title" className="serif-heading text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              Jewelry That Tells <em className="italic">Your</em> Story
            </h2>
            <div className="w-12 h-px bg-accent mb-6" />
            <p className="text-secondary leading-relaxed mb-4">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury budget. We craft demi-fine pieces using 18K gold plating over sterling silver — materials that look and feel premium, at prices that make sense.
            </p>
            <p className="text-secondary leading-relaxed mb-8">
              Every piece is designed in-house, tested for everyday wear, and finished with the kind of attention to detail that makes you look twice.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-accent hover:text-accent-hover transition-colors group">
              <span>Our Story</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
