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
    <section
      id="about"
      ref={containerRef}
      className="bg-parchment py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-d4e7f1"
              data-strk-img="[brand-story-text] [brand-story-heading]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-champagne/30 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="space-y-6 md:pl-8">
            <p className="font-sans text-xs tracking-widest uppercase text-champagne font-medium">
              Our Story
            </p>
            <h2
              id="brand-story-heading"
              className="font-serif text-4xl md:text-5xl text-velvet font-light leading-tight"
            >
              Born from a love of<br />
              <em className="italic text-champagne">quiet luxury</em>
            </h2>
            <div className="w-10 h-px bg-champagne" />
            <p
              id="brand-story-text"
              className="font-sans text-sm text-stone leading-relaxed"
            >
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't
              require a special occasion — or a special budget. We design demi-fine pieces
              that feel genuinely luxurious, crafted with 18K gold plating over hypoallergenic
              bases, so you can wear them every day without compromise.
            </p>
            <p className="font-sans text-sm text-stone leading-relaxed">
              Every piece is thoughtfully designed in our studio, with an eye for the
              details that make jewelry feel truly personal. We believe in slow design,
              lasting quality, and jewelry that becomes part of your story.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-3 font-sans text-xs tracking-widest uppercase text-velvet font-semibold hover:text-champagne transition-colors duration-300 group"
            >
              Read Our Story
              <span className="w-8 h-px bg-velvet group-hover:bg-champagne transition-colors duration-300 group-hover:w-12 transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
