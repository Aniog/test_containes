import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStorySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-velmora-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative overflow-hidden bg-velmora-obsidian" style={{ minHeight: '500px' }}>
            <img
              data-strk-img-id="brand-story-img-x1y2z3"
              data-strk-img="[brand-story-text] [brand-story-title] gold jewelry artisan craftsmanship"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 60%, rgba(237,232,220,0.25) 100%)' }} />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="font-manrope text-xs uppercase tracking-widest-xl text-velmora-gold mb-5 font-medium">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-cormorant text-4xl md:text-5xl font-light text-velmora-obsidian tracking-wide leading-tight mb-6"
            >
              Made with intention.<br />
              <em className="italic">Worn with love.</em>
            </h2>
            <p
              id="brand-story-text"
              className="font-manrope text-sm text-velmora-text-mid leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion — or a special budget. We design demi-fine pieces in warm 18K gold that feel luxurious, wear beautifully, and last.
            </p>
            <p className="font-manrope text-sm text-velmora-text-mid leading-relaxed mb-8">
              Every piece is thoughtfully designed in our studio and crafted with hypoallergenic materials, so you can wear them every day without compromise.
            </p>
            <Link
              to="/#about"
              className="self-start font-manrope text-xs uppercase tracking-widest-md text-velmora-obsidian border-b border-velmora-obsidian pb-0.5 hover:text-velmora-gold hover:border-velmora-gold transition-colors duration-200"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
