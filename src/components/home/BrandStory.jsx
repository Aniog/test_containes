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
    <section id="about" ref={containerRef} className="bg-cream">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3] lg:aspect-auto">
          <img
            data-strk-img-id="brand-story-img-x1y2z3"
            data-strk-img="[brand-story-text] [brand-story-heading] fine jewelry craftsmanship atelier"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora brand story"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-obsidian/10" />
        </div>

        {/* Text */}
        <div className="flex items-center bg-parchment px-8 lg:px-16 py-16 lg:py-20">
          <div className="max-w-md">
            <p className="section-label mb-4">Our Story</p>
            <h2
              id="brand-story-heading"
              className="font-serif text-4xl lg:text-5xl text-obsidian mb-6 leading-tight"
            >
              Made with intention,<br />
              <em className="italic text-gold-dark">worn with love</em>
            </h2>
            <p
              id="brand-story-text"
              className="text-stone text-base leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion. We create demi-fine pieces designed for the everyday — crafted with the same care as fine jewelry, at a price that feels accessible.
            </p>
            <p className="text-stone text-base leading-relaxed mb-8">
              Each piece is thoughtfully designed in our studio, using 18K gold plating over sterling silver and hypoallergenic materials. Because you deserve to wear something beautiful, every single day.
            </p>
            <Link to="/#about" className="btn-outline">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
