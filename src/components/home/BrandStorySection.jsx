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
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[560px]">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto">
            <img
              data-strk-img-id="brand-story-img-main"
              data-strk-img="[brand-story-subtitle] [brand-story-title] gold jewelry artisan craftsmanship"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-4xl md:text-5xl font-light text-velmora-obsidian tracking-wide leading-tight"
            >
              Made with intention.<br />
              <em className="italic">Worn with love.</em>
            </h2>
            <p
              id="brand-story-subtitle"
              className="font-sans text-sm text-velmora-muted leading-relaxed mt-6 max-w-md"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune, but it should feel like it does. Every piece is thoughtfully designed, ethically sourced, and finished to a standard that makes it worthy of becoming part of your story.
            </p>
            <p className="font-sans text-sm text-velmora-muted leading-relaxed mt-4 max-w-md">
              We work with skilled artisans who share our commitment to quality — using 18K gold plating over sterling silver and brass, conflict-free stones, and hypoallergenic materials that are kind to sensitive skin.
            </p>

            <div className="flex items-center gap-8 mt-10 pt-8 border-t border-velmora-border">
              <div>
                <p className="font-serif text-3xl font-light text-velmora-obsidian">50K+</p>
                <p className="font-sans text-xs tracking-widest uppercase text-velmora-muted mt-1">Happy Customers</p>
              </div>
              <div className="w-px h-10 bg-velmora-border" />
              <div>
                <p className="font-serif text-3xl font-light text-velmora-obsidian">4.9★</p>
                <p className="font-sans text-xs tracking-widest uppercase text-velmora-muted mt-1">Average Rating</p>
              </div>
              <div className="w-px h-10 bg-velmora-border" />
              <div>
                <p className="font-serif text-3xl font-light text-velmora-obsidian">100%</p>
                <p className="font-sans text-xs tracking-widest uppercase text-velmora-muted mt-1">Hypoallergenic</p>
              </div>
            </div>

            <Link
              to="/"
              className="mt-8 self-start font-sans text-xs tracking-widest uppercase text-velmora-obsidian border-b border-velmora-obsidian pb-0.5 hover:text-velmora-gold hover:border-velmora-gold transition-colors duration-300"
            >
              Read Our Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
