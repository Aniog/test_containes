import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

export function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
            <div
              data-strk-bg-id="brand-story-bg-d4e5f6"
              data-strk-bg="[brand-story-title] [brand-story-subtitle]"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
              className="absolute inset-0"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="text-xs tracking-widest uppercase text-primary mb-4">Our Story</p>
            <h2 id="brand-story-title" className="serif-heading text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              Where Craft Meets Consciousness
            </h2>
            <p id="brand-story-subtitle" className="text-muted-foreground leading-relaxed mb-4">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't come at the cost of the earth or your wallet. Each piece is thoughtfully designed in our studio, using ethically sourced materials and 18K gold plating that lasts.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We create demi-fine jewelry for the modern woman — pieces that transition seamlessly from boardroom to brunch, from date night to everyday. Because luxury should be lived in, not locked away.
            </p>
            <Link to="/about" className="btn-outline inline-block">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
