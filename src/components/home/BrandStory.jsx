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
    <section ref={containerRef} id="about" className="bg-parchment">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[560px] overflow-hidden">
            <span id="brand-story-title" className="sr-only">Velmora jewelry atelier craftsmanship</span>
            <span id="brand-story-desc" className="sr-only">Fine gold jewelry being crafted by hand in a warm studio</span>
            <img
              data-strk-img-id="brand-story-img-x1y2z3"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora atelier"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex items-center px-8 md:px-16 py-16 md:py-20">
            <div className="max-w-md">
              <p className="font-manrope text-xs uppercase tracking-widest text-gold mb-6">Our Story</p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light text-espresso leading-tight mb-6">
                Made with intention,<br />
                <em>worn with love</em>
              </h2>
              <div className="w-12 h-px bg-gold mb-8" />
              <p className="font-manrope text-sm text-bark leading-relaxed mb-5">
                Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that move with you — from morning coffee to candlelit dinners.
              </p>
              <p className="font-manrope text-sm text-bark leading-relaxed mb-10">
                Every piece is crafted with 18K gold plating over hypoallergenic bases, designed to last and to be treasured. Because you deserve jewelry that feels as good as it looks.
              </p>
              <Link
                to="/#about"
                className="font-manrope text-xs uppercase tracking-widest text-espresso border-b border-espresso pb-0.5 hover:text-gold hover:border-gold transition-colors"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
