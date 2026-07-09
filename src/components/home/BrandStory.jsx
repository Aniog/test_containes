import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="story" ref={containerRef} className="section-padding bg-parchment">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                data-strk-img-id="story-img-main-c3d4e5"
                data-strk-img="[story-text] [story-heading] fine jewelry artisan craftsmanship"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Velmora jewelry craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold/30 hidden lg:block" />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-4">
              Our Story
            </p>
            <h2
              id="story-heading"
              className="font-serif text-3xl lg:text-4xl xl:text-5xl text-ink font-light leading-tight"
            >
              Made with intention,<br />
              <em className="italic">worn with love</em>
            </h2>
            <div className="hairline my-6 w-12" />
            <p
              id="story-text"
              className="font-sans text-base text-ink-muted leading-relaxed"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that bridge the gap between costume and fine jewelry — crafted with care, priced with honesty.
            </p>
            <p className="font-sans text-base text-ink-muted leading-relaxed mt-4">
              Every piece is thoughtfully designed in our studio and crafted using 18K gold plating over hypoallergenic bases. We believe in jewelry that lasts — in quality, in style, and in meaning.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
              <Link to="/" className="btn-outlined">
                Our Story
              </Link>
              <div className="flex items-center gap-6 self-center">
                <div className="text-center">
                  <p className="font-serif text-2xl text-ink">50k+</p>
                  <p className="font-sans text-xs text-ink-muted tracking-wide">Happy Customers</p>
                </div>
                <div className="w-px h-8 bg-linen" />
                <div className="text-center">
                  <p className="font-serif text-2xl text-ink">4.9★</p>
                  <p className="font-sans text-xs text-ink-muted tracking-wide">Average Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
