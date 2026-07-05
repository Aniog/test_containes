import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-muted overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-7c4e2a"
              data-strk-img="[brand-story-heading] [brand-story-text]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-xs uppercase tracking-widest text-accent font-sans font-medium mb-4">
              Our Story
            </p>
            <h2 id="brand-story-heading" className="font-serif text-3xl md:text-4xl text-charcoal mb-6">
              Where Craft Meets Intention
            </h2>
            <p id="brand-story-text" className="text-muted-fg leading-relaxed mb-6">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury price tag. Each piece is thoughtfully designed in our London studio and crafted using 18K gold plating over hypoallergenic bases — so you can wear your favorites every day, worry-free.
            </p>
            <p className="text-muted-fg leading-relaxed mb-8">
              We believe in slow fashion, timeless design, and the quiet confidence that comes from wearing something truly special.
            </p>
            <Link
              to="/about"
              className="inline-block border-b border-accent text-accent text-sm uppercase tracking-widest font-sans font-medium pb-1 hover:text-accent-hover hover:border-accent-hover transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
