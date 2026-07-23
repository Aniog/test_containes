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
    <section id="about" ref={containerRef} className="py-16 md:py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-f9g0h1"
              data-strk-img="[brand-story-title] [brand-story-desc] artisan crafting gold jewelry workshop"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-charcoal leading-tight"
            >
              Our Story
            </h2>
            <p
              id="brand-story-desc"
              className="mt-6 text-base text-charcoal-light font-sans leading-relaxed"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury price tag. Each piece is thoughtfully designed in our London studio and crafted with 18K gold plating over hypoallergenic metals — so you can wear them every day without compromise.
            </p>
            <p className="mt-4 text-base text-charcoal-light font-sans leading-relaxed">
              We believe in slow fashion, timeless design, and the quiet confidence that comes from wearing something truly special. No trends, no fast fashion — just pieces made to last.
            </p>
            <Link
              to="/#about"
              className="inline-block mt-8 border border-gold text-gold px-8 py-3 text-xs tracking-widest uppercase font-sans font-medium hover:bg-gold hover:text-cream transition-colors no-underline"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
