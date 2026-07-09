import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
    <section className="section-padding bg-velmora-pearl" ref={containerRef}>
      <div className="container-velmora">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              data-strk-bg-id="brand-story-image"
              data-strk-bg="artisan hands crafting gold jewelry workshop warm lighting"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
              role="img"
              aria-label="Artisan crafting gold jewelry"
            />
          </div>

          {/* Content */}
          <div className="max-w-lg">
            <p className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-velmora-black mb-6 leading-tight">
              Jewelry That Feels Like{' '}
              <span className="italic">You</span>
            </h2>
            <div className="space-y-4 font-sans text-sm text-velmora-charcoal/80 leading-relaxed">
              <p>
                Velmora was born from a simple belief: every woman deserves jewelry that makes her feel 
                extraordinary, without the extraordinary price tag.
              </p>
              <p>
                We design pieces that transition seamlessly from morning meetings to evening celebrations. 
                Each piece is crafted with 18K gold plating over sterling silver, ensuring lasting quality 
                that won't fade or irritate sensitive skin.
              </p>
              <p>
                Our commitment to accessible luxury means you can build a jewelry wardrobe that reflects 
                your personal style — one treasured piece at a time.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block mt-8 font-sans text-xs tracking-nav uppercase text-velmora-gold border-b border-velmora-gold pb-1 hover:text-velmora-gold-muted transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
