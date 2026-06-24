import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-cream overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-b3c4d5"
              data-strk-img="[brand-story-title] [brand-story-desc] jewelry craftsmanship"
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
              width="600"
              height="800"
            />
          </div>

          {/* Text */}
          <div className="py-4">
            <p className="text-[11px] uppercase tracking-[0.2em] text-accent mb-4">Our Story</p>
            <h2
              id="brand-story-title"
              className="font-serif text-[28px] md:text-[36px] leading-[1.2] text-text-primary"
            >
              Jewelry That Tells Your Story
            </h2>
            <p
              id="brand-story-desc"
              className="text-[14px] text-text-secondary mt-6 leading-relaxed"
            >
              Every Velmora piece begins with a simple belief: jewelry should be both beautiful and accessible. We craft each design with 18K gold plating over hypoallergenic bases, ensuring luxury that's kind to your skin and your wallet.
            </p>
            <p className="text-[14px] text-text-secondary mt-4 leading-relaxed">
              From our studio to your jewelry box, we obsess over every detail — the weight of a chain, the curve of a hoop, the way light catches a crystal. Because the pieces you wear every day deserve that level of care.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center mt-8 text-[12px] uppercase tracking-[0.12em] text-accent hover:text-accent-hover transition-colors border-b border-accent pb-0.5"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
