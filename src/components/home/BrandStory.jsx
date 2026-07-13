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
    <section id="story" ref={containerRef} className="bg-velmora-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative overflow-hidden" style={{ minHeight: '500px' }}>
            <img
              data-strk-img-id="story-img-velmora-x9y8z7"
              data-strk-img="[story-text] [story-title] gold jewelry artisan craftsmanship"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex items-center px-8 md:px-16 py-16 md:py-24 bg-velmora-cream">
            <div className="max-w-md">
              <p className="text-[10px] tracking-widest-xl uppercase text-velmora-gold mb-4">Our Story</p>
              <h2
                id="story-title"
                className="font-serif text-3xl md:text-4xl font-light text-velmora-obsidian tracking-wide leading-snug"
              >
                Made with intention,<br />
                <em className="italic">worn with love</em>
              </h2>
              <div className="w-10 h-px bg-velmora-gold mt-5 mb-6" />
              <p
                id="story-text"
                className="text-sm text-velmora-stone leading-relaxed"
              >
                Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune, but it should feel like it does. We design each piece with the modern woman in mind — someone who moves through the world with intention, who values quality over quantity, and who knows that the right accessory can transform an entire look.
              </p>
              <p className="text-sm text-velmora-stone leading-relaxed mt-4">
                Every Velmora piece is crafted from 18K gold plated brass, hypoallergenic and designed to be worn every single day. From the studio to your jewelry box, we believe in slow, considered design.
              </p>
              <Link
                to="/"
                className="inline-block mt-8 text-xs font-medium tracking-widest uppercase text-velmora-obsidian border-b border-velmora-obsidian pb-0.5 hover:text-velmora-gold hover:border-velmora-gold transition-colors duration-300"
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
