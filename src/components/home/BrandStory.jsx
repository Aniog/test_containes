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
    <section ref={containerRef} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-velmora-dark/10 overflow-hidden">
            <div
              data-strk-bg-id="brand-story-bg-d4e5f6"
              data-strk-bg="[brand-story-title] [brand-story-subtitle]"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
              className="w-full h-full"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="section-subtitle">Our philosophy</p>
            <h2 id="brand-story-title" className="section-title mt-3">
              Jewelry That Tells <em className="italic text-velmora-gold">Your Story</em>
            </h2>
            <p id="brand-story-subtitle" className="text-velmora-muted leading-relaxed mt-6">
              Velmora was born from a simple belief: everyone deserves to wear beautiful jewelry without compromise.
              Our demi-fine pieces are crafted with 18K gold plating over quality brass, designed to look and feel
              luxurious while remaining accessible.
            </p>
            <p className="text-velmora-muted leading-relaxed mt-4">
              Each piece is designed in-house, tested for hypoallergenic wear, and finished with the kind of
              attention to detail usually reserved for pieces ten times the price.
            </p>
            <div className="mt-8">
              <Link to="/about" className="btn-secondary inline-block">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
