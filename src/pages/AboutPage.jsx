import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function AboutPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pt-24 lg:pt-32 pb-20 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] bg-velmora-sand overflow-hidden">
            <img
              data-strk-img-id="about-story-img-1a2b3c"
              data-strk-img="[about-heading] jewelry craftsmanship editorial"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-sans tracking-[0.2em] uppercase text-velmora-gold mb-4">Our Story</p>
            <h1 id="about-heading" className="font-serif text-3xl lg:text-5xl text-velmora-ink font-light tracking-wide leading-tight">
              About Velmora
            </h1>
            <div className="hairline w-16 mt-6 mb-6" />
            <p className="text-sm font-sans text-velmora-stone leading-relaxed">
              Velmora was born from the belief that luxury should feel personal. Founded in 2020, we set out to create
              demi-fine jewelry that bridges the gap between fast fashion and traditional fine jewelry — pieces that are
              beautiful, well-made, and accessible.
            </p>
            <p className="text-sm font-sans text-velmora-stone leading-relaxed mt-4">
              Every piece is designed in our New York studio and crafted with 18K gold plating over brass, using ethically
              sourced materials. We believe in slow fashion for jewelry — designs that are timeless, not trendy.
            </p>
            <Link to="/shop" className="btn-primary mt-8 inline-flex">
              Explore Our Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}