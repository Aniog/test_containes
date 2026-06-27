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
    <section ref={containerRef} className="bg-velmora-linen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Side */}
          <div className="relative overflow-hidden" style={{ minHeight: '500px' }}>
            <span id="brand-story-title" className="hidden">Velmora Fine Jewelry brand story artisan craftsmanship</span>
            <span id="brand-story-desc" className="hidden">jewelry maker crafting gold jewelry artisan workshop</span>
            <img
              data-strk-img-id="brand-story-img-9k2m"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our Story"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Subtle gold frame accent */}
            <div className="absolute inset-4 border border-velmora-gold/20 pointer-events-none" />
          </div>

          {/* Text Side */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-24 bg-velmora-linen">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-velmora-gold mb-6">Our Story</p>
            <h2 className="font-serif text-4xl md:text-5xl text-velmora-text-dark font-light leading-tight mb-8">
              Made with intention,<br />
              <em className="italic">worn with love</em>
            </h2>
            <div className="space-y-5 text-velmora-text-muted font-sans text-sm leading-relaxed">
              <p>
                Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion — or a special budget. We create demi-fine pieces that feel luxurious every day.
              </p>
              <p>
                Each design begins with a sketch, refined through dozens of iterations until it achieves that rare balance of elegance and wearability. Our 18K gold plating is applied in multiple layers for lasting brilliance.
              </p>
              <p>
                We believe in jewelry that tells your story — pieces you reach for every morning, that become part of who you are.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-6">
              <Link
                to="/about"
                className="font-sans text-xs uppercase tracking-widest text-velmora-text-dark border-b border-velmora-text-dark pb-0.5 hover:text-velmora-gold hover:border-velmora-gold transition-colors"
              >
                Read Our Story
              </Link>
              <div className="h-px flex-1 bg-velmora-sand/60" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-velmora-sand/60">
              {[
                { value: '50K+', label: 'Happy Customers' },
                { value: '18K', label: 'Gold Plated' },
                { value: '4.9★', label: 'Average Rating' },
              ].map(stat => (
                <div key={stat.label}>
                  <p className="font-serif text-3xl text-velmora-text-dark font-light">{stat.value}</p>
                  <p className="font-sans text-xs text-velmora-text-muted uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
