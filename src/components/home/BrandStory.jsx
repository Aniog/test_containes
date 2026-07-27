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
    <section ref={containerRef} className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-[#f5f0eb] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-7d34fa"
              data-strk-img="[brand-story-title] [brand-story-subtitle] jewelry artisan"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <span className="text-[#c9a96e] text-xs uppercase tracking-widest mb-4 block">Our Story</span>
            <h2 id="brand-story-title" className="velmora-heading text-3xl sm:text-4xl lg:text-5xl text-[#1a1a1a] mb-6">
              Where Craft Meets Care
            </h2>
            <p id="brand-story-subtitle" className="text-[#6b6560] leading-relaxed mb-6">
              Every Velmora piece begins as a sketch, shaped by hands that understand the weight of a well-made thing. We believe jewelry should feel personal — not precious. Pieces you reach for on ordinary mornings and keep close through extraordinary ones.
            </p>
            <p className="text-[#6b6560] leading-relaxed mb-8">
              Our demi-fine collection is crafted with 18K gold plating over solid brass, designed to be worn daily without compromise. Hypoallergenic, thoughtfully sourced, and made to last.
            </p>
            <Link to="/about" className="velmora-btn-outline inline-block">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
