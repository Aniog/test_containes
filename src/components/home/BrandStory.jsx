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
    <section ref={containerRef} id="about" className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <span id="brand-story-title" className="sr-only">Velmora Fine Jewelry brand story</span>
            <span id="brand-story-desc" className="sr-only">Artisan crafting gold jewelry in a warm studio, close up hands with gold pieces</span>
            <img
              alt="Our Story"
              data-strk-img-id="brand-story-img-c3d4e5"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-velmora-gold/30 pointer-events-none hidden md:block" />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-velmora-gold">
              Our Story
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-velmora-text"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Born from a love of<br />
              <em className="italic">enduring beauty</em>
            </h2>

            <div className="w-12 h-px bg-velmora-gold" />

            <p className="text-sm leading-relaxed text-velmora-muted">
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion — or a special budget. We design demi-fine pieces that live at the intersection of artistry and accessibility.
            </p>
            <p className="text-sm leading-relaxed text-velmora-muted">
              Every piece is crafted with 18K gold plating over hypoallergenic bases, designed to be worn daily, layered freely, and treasured for years. Because the best jewelry is the kind you never want to take off.
            </p>

            <div className="grid grid-cols-3 gap-6 py-6 border-y border-velmora-gold/20">
              {[
                { value: '50K+', label: 'Happy Customers' },
                { value: '18K', label: 'Gold Plated' },
                { value: '4.9★', label: 'Average Rating' },
              ].map(stat => (
                <div key={stat.label} className="text-center">
                  <p
                    className="text-2xl font-light text-velmora-text mb-1"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[10px] tracking-[0.12em] uppercase text-velmora-muted">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              to="/#about"
              className="inline-flex items-center gap-3 text-xs font-medium tracking-[0.15em] uppercase text-velmora-text hover:text-velmora-gold transition-colors duration-200 group"
            >
              Read Our Full Story
              <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
