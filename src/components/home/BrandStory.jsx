import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} id="about" className="py-16 md:py-24 lg:py-32 bg-brand-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-image"
              data-strk-img="[brand-story-subtitle] [brand-story-title] gold jewelry artisan craft elegant"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry artisan crafting gold jewelry"
              className="w-full h-full object-cover"
            />
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-brand-gold/30 -z-10" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-brand-gold text-sm font-medium uppercase tracking-[0.25em] mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-brand-charcoal mb-6 leading-tight"
            >
              Jewelry That Feels
              <br />
              <span className="italic">Like You</span>
            </h2>
            <div className="w-16 h-px bg-brand-gold mb-8" />
            <p
              id="brand-story-subtitle"
              className="text-brand-warm-gray leading-relaxed mb-6"
            >
              Velmora was born from a simple belief: every woman deserves jewelry that makes her feel
              extraordinary — without the extraordinary price tag. We create demi-fine pieces using
              premium 18K gold plating over hypoallergenic metals, designed to be worn every day and
              treasured for years.
            </p>
            <p className="text-brand-warm-gray leading-relaxed mb-8">
              Each piece in our collection is thoughtfully designed with attention to detail, quality
              craftsmanship, and timeless style. From delicate everyday huggies to statement earrings
              that turn heads, Velmora jewelry is made to celebrate the moments — big and small —
              that make life beautiful.
            </p>
            <Link to="/shop">
              <Button variant="secondary">Discover Our Collection</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
