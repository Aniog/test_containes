import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section className="py-16 md:py-24 bg-cream" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
            <div
              data-strk-bg-id="brand-story-img"
              data-strk-bg="artisan hands crafting gold jewelry workshop warm lighting close-up"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
              className="absolute inset-0 bg-gradient-to-br from-sand/40 to-cream"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-xl text-gold-muted/40 tracking-mega-wide uppercase">
                  Our Craft
                </span>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="text-gold text-xs tracking-mega-wide uppercase font-sans font-medium mb-4">
              Our Story
            </p>
            <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-espresso mb-6 leading-tight">
              Jewelry That Feels<br />
              <span className="italic text-gold-dark">Like You</span>
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-taupe text-sm leading-relaxed">
                Velmora was born from a simple belief: everyone deserves to wear
                jewelry that makes them feel extraordinary. We create demi-fine pieces
                using 18K gold plating over quality base metals — giving you the look
                and feel of fine jewelry without the luxury price tag.
              </p>
              <p className="text-taupe text-sm leading-relaxed">
                Every piece is designed in our studio, tested for comfort, and crafted
                to last. We believe in fewer, better things — jewelry you reach for
                every single day.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs tracking-ultra-wide uppercase font-sans font-medium text-espresso hover:text-gold transition-colors group"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
