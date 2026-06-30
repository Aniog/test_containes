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
    <section id="about" ref={containerRef} className="bg-velmora-linen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto">
            <img
              data-strk-img-id="brand-story-img-a1b2c3"
              data-strk-img="[brand-story-text] [brand-story-title] fine jewelry artisan craftsmanship gold"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-velmora-obsidian/10" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="font-manrope text-xs uppercase tracking-widest text-velmora-champagne mb-5">
              Our Story
            </p>
            <h2 id="brand-story-title" className="font-cormorant text-4xl md:text-5xl font-light text-velmora-obsidian leading-tight mb-6">
              Jewelry that tells<br />
              <em className="italic">your story</em>
            </h2>
            <div className="w-12 h-px bg-velmora-champagne mb-6" />
            <p id="brand-story-text" className="font-manrope text-sm text-velmora-stone leading-relaxed mb-4">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion — or a special budget. We design demi-fine pieces that feel luxurious, wear beautifully, and last for years.
            </p>
            <p className="font-manrope text-sm text-velmora-stone leading-relaxed mb-8">
              Every piece is crafted from 18K gold-plated brass, hypoallergenic and nickel-free. Designed in-house, made with care. Because you deserve jewelry that's as thoughtful as you are.
            </p>
            <Link
              to="/#about"
              className="inline-flex items-center gap-3 font-manrope text-xs uppercase tracking-widest text-velmora-obsidian hover:text-velmora-champagne transition-colors duration-200 self-start"
            >
              Read Our Story
              <span className="text-velmora-champagne">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
