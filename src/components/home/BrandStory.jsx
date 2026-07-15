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
    <section ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <div
              data-strk-bg-id="brand-story-bg-d4e5f6"
              data-strk-bg="[brand-story-title] [brand-story-subtitle]"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
              className="absolute inset-0"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <span className="text-gold text-xs tracking-widest uppercase mb-4 block">Our Story</span>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl text-charcoal mb-6 leading-tight"
            >
              Jewelry That Tells Your Story
            </h2>
            <p
              id="brand-story-subtitle"
              className="text-taupe leading-relaxed mb-6"
            >
              Velmora was born from a simple belief: luxury shouldn't be reserved for special occasions. 
              We create demi-fine jewelry that bridges the gap between everyday wear and heirloom quality — 
              pieces you'll reach for again and again.
            </p>
            <p className="text-taupe leading-relaxed mb-8">
              Each piece is crafted with 18K gold plating over recycled brass, designed to be 
              hypoallergenic and built to last. Because the jewelry you wear every day deserves 
              the same care as the moments it accompanies.
            </p>
            <Link
              to="/about"
              className="inline-block border-b border-gold text-gold text-xs tracking-widest uppercase pb-1 hover:text-gold-hover hover:border-gold-hover transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
