import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const sectionRef = useScrollReveal(0.1);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={sectionRef} className="reveal py-20 md:py-28">
      <div ref={containerRef} className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/5] md:aspect-[3/4]">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="gold jewelry artisan crafting workshop warm light luxury"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting gold jewelry"
              className="w-full h-full object-cover"
            />
            {/* Decorative frame */}
            <div className="absolute inset-4 border border-gold/20 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="md:pl-4">
            <p className="text-xs uppercase tracking-mega-wide text-gold mb-4">Our Story</p>
            <h2 className="heading-serif text-3xl md:text-5xl text-brand-50 mb-6 leading-tight">
              Where Craft Meets Intention
            </h2>
            <div className="space-y-4 text-brand-300 text-sm leading-relaxed">
              <p>
                Velmora was born from a simple belief: every woman deserves jewelry that feels as
                special as it looks, without the luxury markup. We set out to bridge the gap between
                fast fashion accessories and unattainable fine jewelry.
              </p>
              <p>
                Each piece in our collection is thoughtfully designed in our London studio and
                crafted from premium 18K gold-plated materials. We obsess over the details —
                the weight of a clasp, the curve of a hoop, the way light dances off a crystal —
                so you can wear something truly treasured, every single day.
              </p>
              <p>
                Our commitment to accessible luxury means hypoallergenic materials, thoughtful
                packaging, and prices that invite you to treat yourself — or someone you love.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block mt-8 text-xs uppercase tracking-[0.18em] text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors duration-300"
            >
              Read Our Full Story &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
