import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="about" className="section-padding bg-velmora-cream">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-main"
              data-strk-img="[story-title] [story-text] artisan jewelry making gold workshop"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting gold jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-hairline bg-velmora-gold" />
              <span className="font-sans text-caption uppercase tracking-[0.2em] text-velmora-gold">
                Our Story
              </span>
            </div>
            <h2 id="story-title" className="font-serif text-heading-lg md:text-heading-xl text-velmora-charcoal mb-6">
              Jewelry That Feels Like You
            </h2>
            <p id="story-text" className="text-body-lg text-velmora-gray leading-relaxed mb-5">
              Velmora was born from a simple belief: every woman deserves jewelry that feels 
              luxurious without the luxury markup. We create demi-fine pieces using 18K gold 
              plating over quality base metals — giving you the look and feel of fine jewelry 
              at a fraction of the price.
            </p>
            <p className="text-body-lg text-velmora-gray leading-relaxed mb-8">
              Each piece is designed in our studio, crafted with care, and made to be worn 
              every single day. Because the best jewelry isn't locked in a safe — it's the 
              piece you reach for every morning.
            </p>
            <Link to="#" className="btn-ghost self-start">
              Read Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
