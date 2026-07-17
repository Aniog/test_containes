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
    <section ref={containerRef} className="py-0 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[560px] md:min-h-[640px]">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto">
            <img
              data-strk-img-id="brand-story-img-x7y2z9"
              data-strk-img="[brand-story-text] [brand-story-title] fine jewelry artisan craftsmanship gold"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-espresso/10" />
          </div>

          {/* Text */}
          <div className="flex items-center px-8 md:px-16 lg:px-20 py-16 md:py-20 bg-cream">
            <div className="max-w-md">
              <p className="font-sans text-xs tracking-widest uppercase text-gold mb-5">Our Story</p>
              <h2 id="brand-story-title" className="font-serif text-4xl md:text-5xl text-espresso mb-6 leading-tight">
                Born from a love of<br />
                <em className="italic font-light">quiet beauty</em>
              </h2>
              <p id="brand-story-text" className="font-sans text-sm text-charcoal leading-relaxed mb-4">
                Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We design pieces that feel luxurious every day — crafted with intention, worn with ease.
              </p>
              <p className="font-sans text-sm text-charcoal leading-relaxed mb-8">
                Every piece is made with 18K gold-plated brass, hypoallergenic materials, and a commitment to lasting quality. Because you deserve jewelry that keeps up with your life.
              </p>
              <Link
                to="/about"
                className="font-sans text-xs tracking-widest uppercase text-espresso border-b border-espresso/40 hover:border-gold hover:text-gold transition-colors duration-200 pb-0.5"
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
