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
    <section ref={containerRef} id="about" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-[var(--velmora-bg-secondary)] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-b4e7f2"
              data-strk-img="[brand-story-title] [brand-story-text] jewelry artisan craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--velmora-text-muted)] mb-4">Our Philosophy</p>
            <h2 id="brand-story-title" className="font-serif-display text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight">
              Jewelry That Tells<br />Your Story
            </h2>
            <div className="hairline w-12 mb-6" />
            <p id="brand-story-text" className="text-[var(--velmora-text-muted)] leading-relaxed mb-6">
              At Velmora, we believe luxury shouldn't come with a luxury price tag. Our demi-fine collection is crafted with the same care and attention to detail as pieces costing ten times more. Each piece is designed in-house, plated in 18K gold, and made to be worn every day.
            </p>
            <p className="text-[var(--velmora-text-muted)] leading-relaxed mb-8">
              We source responsibly, design intentionally, and price transparently. Because you deserve beautiful jewelry that doesn't compromise your values — or your wallet.
            </p>
            <Link to="/shop" className="btn-outline inline-flex">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
