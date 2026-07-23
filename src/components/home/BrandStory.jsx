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
    <section ref={containerRef} className="bg-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image side */}
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-c4d5e6"
              data-strk-img="[brand-story-text] [brand-story-heading] gold jewelry artisan craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text side */}
          <div className="flex items-center px-8 md:px-16 py-16 md:py-24">
            <div className="max-w-md">
              <p className="font-inter text-xs uppercase tracking-widest text-gold mb-6">Our Story</p>
              <h2
                id="brand-story-heading"
                className="font-cormorant text-4xl md:text-5xl text-charcoal font-light leading-tight mb-8"
              >
                Made with intention,<br />
                <em>worn with love</em>
              </h2>
              <p
                id="brand-story-text"
                className="font-inter text-sm text-warm-gray leading-relaxed mb-6"
              >
                Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that feel luxurious without the luxury price tag — crafted to become part of your everyday story.
              </p>
              <p className="font-inter text-sm text-warm-gray leading-relaxed mb-10">
                Every piece is thoughtfully designed in our studio, using 18K gold plating over hypoallergenic bases. We believe in slow design, lasting quality, and jewelry that means something.
              </p>
              <Link
                to="/about"
                className="font-inter text-xs uppercase tracking-widest text-charcoal border-b border-charcoal pb-0.5 hover:text-gold hover:border-gold transition-colors duration-200"
              >
                Our Story →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
