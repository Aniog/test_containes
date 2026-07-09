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
    <section ref={containerRef} className="bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[560px] overflow-hidden bg-linen">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              data-strk-img-id="brand-story-img-c4d5e6"
              data-strk-img="[brand-story-text] [brand-story-heading] gold jewelry artisan craftsmanship"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
            />
          </div>

          {/* Text */}
          <div className="flex items-center px-8 md:px-16 py-16 md:py-20">
            <div className="max-w-md">
              <p className="font-sans text-xs font-medium tracking-widest uppercase text-gold mb-4">
                Our Story
              </p>
              <h2
                id="brand-story-heading"
                className="font-serif text-4xl md:text-5xl font-light text-ink leading-tight mb-6"
              >
                Made with<br />
                <em className="italic">intention</em>
              </h2>
              <div className="w-10 h-px bg-gold mb-8" />
              <p
                id="brand-story-text"
                className="font-sans text-sm text-mist leading-relaxed mb-4"
              >
                Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion — or a special budget. We design demi-fine pieces that feel luxurious, wear beautifully, and last for years.
              </p>
              <p className="font-sans text-sm text-mist leading-relaxed mb-8">
                Every piece is crafted from 18K gold-plated brass and sterling silver, set with hand-selected stones. Hypoallergenic, nickel-free, and made to be worn every single day.
              </p>
              <Link
                to="/about"
                className="inline-block font-sans text-xs font-medium tracking-widest uppercase text-ink border-b border-ink pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300"
              >
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
