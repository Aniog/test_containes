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
    <section className="py-24 bg-background" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full md:w-1/2 aspect-[4/5] relative bg-secondary rounded-sm overflow-hidden">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              data-strk-img="[brand-story-title] [brand-story-subtitle]"
              data-strk-img-id="home-brand-story"
              data-strk-img-ratio="4x5"
              alt="Velmora Jewelry Craftsmanship"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
              Quiet Luxury, <br/>Everyday Elegance
            </h2>
            <p id="brand-story-subtitle" className="text-foreground/80 font-serif text-lg leading-relaxed mb-8">
              Velmora was born from a desire to bridge the gap between costume jewelry and fine luxury. We believe in crafting pieces that look and feel like heirlooms, using premium materials without the traditional markup. Each piece is designed to be lived in, loved, and layered.
            </p>
            <Link 
              to="/about"
              className="inline-block border-b border-foreground pb-1 uppercase tracking-widest text-sm hover:text-accent transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
