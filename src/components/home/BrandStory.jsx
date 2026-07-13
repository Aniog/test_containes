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
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image side */}
          <div className="relative overflow-hidden aspect-[4/5] md:aspect-auto md:min-h-[600px]">
            <img
              data-strk-img-id="brand-story-img-a1b2c3"
              data-strk-img="[brand-story-text] [brand-story-title] fine jewelry craftsmanship atelier"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text side */}
          <div className="flex items-center px-8 md:px-16 lg:px-20 py-16 md:py-20">
            <div className="max-w-md">
              <p className="font-sans text-xs tracking-widest uppercase text-gold font-semibold mb-4">
                Our Story
              </p>
              <h2
                id="brand-story-title"
                className="font-serif text-4xl md:text-5xl text-ink font-light leading-tight"
              >
                Made with intention.<br />
                <em className="italic">Worn with love.</em>
              </h2>

              <div className="w-10 h-px bg-gold my-7" />

              <p
                id="brand-story-text"
                className="font-sans text-sm text-muted leading-relaxed"
              >
                Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion — or a special budget. We design demi-fine pieces that live at the intersection of quality and accessibility, crafted to be worn every day and treasured for years.
              </p>

              <p className="font-sans text-sm text-muted leading-relaxed mt-4">
                Every piece is thoughtfully designed in our studio, using 18K gold-plated brass and hypoallergenic materials. We believe in slow fashion — pieces made to last, not to be discarded.
              </p>

              <Link
                to="/#about"
                className="inline-flex items-center mt-8 font-sans text-xs tracking-widest uppercase font-semibold text-ink border-b border-ink pb-0.5 hover:text-gold hover:border-gold transition-colors duration-200"
              >
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
