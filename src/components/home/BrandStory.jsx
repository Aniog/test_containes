import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-[#FDFCFB] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 px-6 md:px-12">
        {/* Image Left */}
        <div className="md:w-1/2 relative aspect-[3/4] md:aspect-square overflow-hidden">
          <img
            data-strk-img-id="brand-story-img"
            data-strk-img="[story-title] [story-desc] jewelry designer studio aesthetic"
            data-strk-img-ratio="1x1"
            data-strk-img-width="1000"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Our Story"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Right */}
        <div className="md:w-1/2 space-y-8">
          <div className="space-y-4">
             <p className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-medium">The Velmora Ethos</p>
             <h2 id="story-title" className="text-4xl md:text-5xl font-serif leading-tight">Modern Heirlooms for the Soul</h2>
          </div>
          <p id="story-desc" className="text-gray-600 leading-relaxed font-light text-lg">
            VELMORA was born from a desire to create high-quality, demi-fine jewelry that bridges the gap between fast fashion and fine jewelry. Every piece is thoughtfully designed in our London studio, crafted with 18K gold plating and ethically sourced crystals. We believe jewelry should be more than just an accessory—it should be a treasure that tells your unique story.
          </p>
          <div>
            <Link
              to="/about"
              className="inline-block text-xs uppercase tracking-[0.2em] border-b border-black pb-1 hover:opacity-70 transition-opacity"
            >
              Discover Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
EOF > /workspace/my-app/src/components/home/BrandStory.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-[#FDFCFB] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 px-6 md:px-12">
        {/* Image Left */}
        <div className="md:w-1/2 relative aspect-[3/4] md:aspect-square overflow-hidden">
          <img
            data-strk-img-id="brand-story-img"
            data-strk-img="[story-title] [story-desc] jewelry designer studio aesthetic"
            data-strk-img-ratio="1x1"
            data-strk-img-width="1000"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Our Story"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Right */}
        <div className="md:w-1/2 space-y-8">
          <div className="space-y-4">
             <p className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-medium">The Velmora Ethos</p>
             <h2 id="story-title" className="text-4xl md:text-5xl font-serif leading-tight">Modern Heirlooms for the Soul</h2>
          </div>
          <p id="story-desc" className="text-gray-600 leading-relaxed font-light text-lg">
            VELMORA was born from a desire to create high-quality, demi-fine jewelry that bridges the gap between fast fashion and fine jewelry. Every piece is thoughtfully designed in our London studio, crafted with 18K gold plating and ethically sourced crystals. We believe jewelry should be more than just an accessory—it should be a treasure that tells your unique story.
          </p>
          <div>
            <Link
              to="/about"
              className="inline-block text-xs uppercase tracking-[0.2em] border-b border-black pb-1 hover:opacity-70 transition-opacity"
            >
              Discover Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
