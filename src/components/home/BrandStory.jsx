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
    <section id="about" ref={containerRef} className="section-padding bg-velmora-linen">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-velmora-sand">
            <img
              data-strk-img-id="brand-story-img-d4e5f6"
              data-strk-img="[brand-story-text] [brand-story-heading]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
            {/* Gold accent line */}
            <div className="absolute top-6 left-6 w-12 h-px bg-velmora-gold" />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <p className="label-ui text-velmora-gold">Our Story</p>
            <h2 id="brand-story-heading" className="font-cormorant text-4xl md:text-5xl text-velmora-obsidian leading-tight">
              Born from a love of<br />
              <em className="italic">quiet beauty</em>
            </h2>
            <div className="w-12 h-px bg-velmora-gold" />
            <p id="brand-story-text" className="font-inter text-sm text-velmora-text-secondary leading-relaxed">
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. We create demi-fine pieces that feel luxurious every day — crafted with care, priced with intention.
            </p>
            <p className="font-inter text-sm text-velmora-text-secondary leading-relaxed">
              Each piece is designed in-house and made with 18K gold-plated brass and hypoallergenic materials, so you can wear them with confidence, every single day.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-inter text-xs uppercase tracking-widest text-velmora-gold hover:text-velmora-gold-dark transition-colors border-b border-velmora-gold pb-0.5"
            >
              Read Our Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
