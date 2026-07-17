import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section id="story" ref={containerRef} className="bg-velmora-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                data-strk-img-id="brand-story-img-main"
                data-strk-img="[story-text] [story-headline] gold jewelry artisan craftsmanship editorial warm"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                alt="Velmora brand story"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative gold border accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-velmora-gold/40 rounded-sm hidden md:block" />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-velmora-gold">Our Story</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-obsidian tracking-wide leading-tight">
              Born from a love of<br />
              <em className="italic text-velmora-gold-dark">quiet beauty</em>
            </h2>
            <div className="w-12 h-px bg-velmora-gold" />
            <p id="story-headline" className="font-inter text-sm text-velmora-stone leading-relaxed hidden">
              Velmora Fine Jewelry — crafted to be treasured
            </p>
            <p id="story-text" className="font-inter text-sm text-velmora-stone leading-relaxed">
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion — or a special budget. We create demi-fine pieces in 18K gold plating that look and feel luxurious, designed to be worn every single day.
            </p>
            <p className="font-inter text-sm text-velmora-stone leading-relaxed">
              Every piece is thoughtfully designed, ethically sourced, and crafted to last. Because the best jewelry is the kind you never want to take off.
            </p>
            <Link to="/#story">
              <Button variant="outlined-dark" size="md" className="mt-2">
                Read Our Story
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
