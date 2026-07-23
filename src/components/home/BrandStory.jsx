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
    <section id="about" ref={containerRef} className="bg-ivory-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative overflow-hidden bg-obsidian" style={{ minHeight: '480px' }}>
            <img
              data-strk-img-id="brand-story-img-c4d5e6"
              data-strk-img="[brand-story-text] [brand-story-title] fine jewelry artisan craftsmanship"
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-obsidian/20" />
          </div>

          {/* Text */}
          <div className="flex items-center px-8 md:px-12 lg:px-16 py-16 md:py-20">
            <div className="max-w-md">
              <p className="font-manrope text-xs uppercase tracking-widest text-gold mb-4">Our Story</p>
              <h2
                id="brand-story-title"
                className="font-cormorant text-4xl md:text-5xl font-light text-obsidian leading-tight mb-6"
              >
                Born from a love of<br />
                <em className="italic">quiet beauty</em>
              </h2>
              <p
                id="brand-story-text"
                className="font-manrope text-sm text-stone leading-relaxed mb-4"
              >
                Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion — or a special budget. We design demi-fine pieces that feel luxurious, wear beautifully, and last for years.
              </p>
              <p className="font-manrope text-sm text-stone leading-relaxed mb-8">
                Every piece is crafted with 18K gold plating over hypoallergenic bases, designed to be worn daily, gifted with intention, and treasured for a lifetime.
              </p>
              <Link
                to="/#about"
                className="font-manrope text-xs uppercase tracking-widest text-obsidian border-b border-obsidian/40 pb-0.5 hover:text-gold hover:border-gold transition-colors"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
