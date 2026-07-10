import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-velmora-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image side */}
          <div className="relative overflow-hidden" style={{ minHeight: '500px' }}>
            <img
              data-strk-img-id="brand-story-img-a1b2c3"
              data-strk-img="[brand-story-text] [brand-story-title] fine jewelry artisan crafting gold"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text side */}
          <div className="flex items-center px-8 md:px-16 py-16 md:py-24 bg-velmora-cream">
            <div className="max-w-md">
              <p className="font-manrope text-xs tracking-widest-xl uppercase text-velmora-gold mb-5">
                Our Story
              </p>
              <h2
                id="brand-story-title"
                className="font-cormorant text-4xl md:text-5xl font-light text-velmora-obsidian leading-tight mb-6"
              >
                Born from a love of quiet luxury
              </h2>
              <div className="w-12 h-px bg-velmora-gold mb-8" />
              <p
                id="brand-story-text"
                className="font-manrope text-sm text-velmora-text-mid leading-relaxed mb-5"
              >
                Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion — or a special budget. We create demi-fine pieces that feel genuinely luxurious, crafted with care and designed to become part of your everyday story.
              </p>
              <p className="font-manrope text-sm text-velmora-text-mid leading-relaxed mb-10">
                Every piece is 18K gold plated, hypoallergenic, and made to last. We believe in slow fashion, thoughtful design, and jewelry that earns its place in your collection.
              </p>
              <Link
                to="/shop"
                className="inline-block border border-velmora-obsidian text-velmora-obsidian font-manrope text-xs tracking-widest-md uppercase px-8 py-3.5 hover:bg-velmora-obsidian hover:text-velmora-text-light transition-all duration-300"
              >
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
