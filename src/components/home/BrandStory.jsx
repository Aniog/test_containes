import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[560px]">
          {/* Image */}
          <div className="relative overflow-hidden min-h-[400px] md:min-h-0">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              data-strk-img-id="brand-story-img-k2l3m4"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <span id="brand-story-title" className="sr-only">Velmora Fine Jewelry brand story</span>
            <span id="brand-story-desc" className="sr-only">artisan jewelry maker crafting gold jewelry in studio warm light</span>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="font-manrope text-[10px] tracking-widest uppercase text-gold mb-6">Our Story</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ink leading-tight mb-6">
              Made with intention.<br />
              <em className="italic">Worn with love.</em>
            </h2>
            <div className="w-12 h-px bg-gold mb-8" />
            <p className="font-manrope text-sm text-muted leading-relaxed mb-4">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. Every woman deserves to feel adorned, every single day.
            </p>
            <p className="font-manrope text-sm text-muted leading-relaxed mb-10">
              Each piece is thoughtfully designed and crafted in 18K gold-plated brass — durable enough for daily wear, refined enough for every occasion. We believe in accessible luxury, without compromise.
            </p>
            <Link
              to="/#about"
              className="font-manrope text-xs tracking-widest uppercase text-ink hover:text-gold transition-colors duration-300 border-b border-divider pb-0.5 self-start"
            >
              Read Our Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
