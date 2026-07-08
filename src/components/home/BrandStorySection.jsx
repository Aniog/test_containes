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
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-portrait overflow-hidden">
              <img
                data-strk-img-id="brand-story-img-c3d4e5"
                data-strk-img="[brand-story-text] [brand-story-headline] gold jewelry artisan craftsmanship"
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Velmora brand story"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold/30 hidden md:block" />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="font-inter text-[10px] tracking-ultra-wide uppercase text-gold mb-6">
              Our Story
            </p>
            <h2
              id="brand-story-headline"
              className="font-cormorant text-4xl md:text-5xl font-light text-ink leading-tight mb-8"
            >
              Born from a love of<br />
              <em className="italic">quiet elegance</em>
            </h2>
            <div className="space-y-5">
              <p
                id="brand-story-text"
                className="font-inter text-sm text-stone leading-relaxed"
              >
                Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion — or a special budget. We create demi-fine pieces that feel luxurious, wear beautifully, and last.
              </p>
              <p className="font-inter text-sm text-stone leading-relaxed">
                Every piece is thoughtfully designed in our studio and crafted with 18K gold plating over hypoallergenic bases. We believe in jewelry you can wear every day, layer freely, and pass down with pride.
              </p>
            </div>

            {/* Divider */}
            <div className="w-12 h-px bg-gold my-8" />

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {[
                { value: '50K+', label: 'Happy Customers' },
                { value: '18K', label: 'Gold Plated' },
                { value: '100%', label: 'Hypoallergenic' },
              ].map(stat => (
                <div key={stat.label}>
                  <p className="font-cormorant text-2xl text-gold mb-1">{stat.value}</p>
                  <p className="font-inter text-[10px] tracking-wider uppercase text-stone">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 border border-ink text-ink px-8 py-3 font-inter text-xs tracking-widest uppercase hover:bg-ink hover:text-cream transition-all duration-300"
            >
              Our Story <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
