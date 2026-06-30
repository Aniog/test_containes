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
    <section id="about" ref={containerRef} className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto md:min-h-[500px]">
            <span id="brand-story-title" className="sr-only">Velmora Fine Jewelry brand story artisan craftsmanship</span>
            <span id="brand-story-desc" className="sr-only">Woman wearing gold jewelry editorial portrait warm light studio</span>
            <img
              data-strk-img-id="brand-story-img-a1b2c3"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="bg-obsidian flex flex-col justify-center px-8 md:px-14 py-12 md:py-16">
            <p className="text-xs font-sans tracking-widest uppercase text-gold mb-4">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl text-parchment font-light leading-snug">
              Made for the<br />
              <em className="italic">Everyday Extraordinary</em>
            </h2>
            <div className="w-12 h-px bg-gold mt-6 mb-6" />
            <p className="text-sm font-sans text-ghost leading-relaxed">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't be saved for special occasions. We design demi-fine pieces that feel luxurious, wear effortlessly, and last.
            </p>
            <p className="text-sm font-sans text-ghost leading-relaxed mt-4">
              Each piece is crafted with 18K gold plating over hypoallergenic bases — designed to be worn every day, through every season of your life.
            </p>
            <Link
              to="/#"
              className="mt-8 self-start text-xs font-sans tracking-wider uppercase text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-obsidian transition-colors duration-200"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
