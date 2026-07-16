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
    <section ref={containerRef} id="about" className="section-padding bg-parchment">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-linen order-2 md:order-1">
            <img
              data-strk-img-id="brand-story-img-7b4e1f"
              data-strk-img="[brand-story-text] [brand-story-heading] gold jewelry artisan craftsmanship studio"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our story"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gold accent line */}
            <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-gold" />
          </div>

          {/* Text */}
          <div className="order-1 md:order-2">
            <p className="section-label mb-4">Our Story</p>
            <h2 id="brand-story-heading" className="font-cormorant text-4xl md:text-5xl font-light text-ink leading-tight mb-6">
              Born from a love of<br />
              <em className="italic text-gold">quiet beauty</em>
            </h2>
            <p id="brand-story-text" className="font-manrope text-sm text-ink-muted leading-relaxed mb-5">
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that feel genuinely luxurious — crafted with care, priced with honesty.
            </p>
            <p className="font-manrope text-sm text-ink-muted leading-relaxed mb-8">
              Every piece is made with 18K gold plating over hypoallergenic bases, designed to be worn every day without compromise. Because you deserve to feel beautiful on a Tuesday.
            </p>
            <Link to="/#about" className="btn-outline">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
