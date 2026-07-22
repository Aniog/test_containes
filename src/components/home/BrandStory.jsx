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
    <section ref={containerRef} className="py-20 md:py-28 bg-blush">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-c3d4e5"
              data-strk-img="[brand-story-text] [brand-story-heading]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
            {/* Decorative gold line */}
            <div className="absolute bottom-6 right-6 w-16 h-px bg-gold" />
            <div className="absolute bottom-6 right-6 w-px h-16 bg-gold" />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="font-inter text-xs uppercase tracking-widest text-gold mb-6">Our Story</p>
            <h2
              id="brand-story-heading"
              className="font-cormorant text-4xl md:text-5xl text-charcoal font-light tracking-wide leading-tight mb-8"
            >
              Born from a love of<br />
              <em className="italic">quiet elegance</em>
            </h2>
            <div className="space-y-5">
              <p
                id="brand-story-text"
                className="font-inter text-sm text-warm-gray leading-relaxed"
              >
                Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We create demi-fine pieces designed for the everyday — for the woman who moves through the world with intention and grace.
              </p>
              <p className="font-inter text-sm text-warm-gray leading-relaxed">
                Every piece is crafted with 18K gold plating over hypoallergenic bases, designed to last and to be worn close to the skin. We believe in accessible luxury — jewelry that feels as good as it looks.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-linen">
              {[
                { value: '50K+', label: 'Happy Customers' },
                { value: '18K', label: 'Gold Plated' },
                { value: '100%', label: 'Hypoallergenic' },
              ].map(stat => (
                <div key={stat.label}>
                  <p className="font-cormorant text-3xl text-charcoal font-light">{stat.value}</p>
                  <p className="font-inter text-[10px] uppercase tracking-widest text-warm-gray mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-block mt-10 font-inter text-xs uppercase tracking-widest text-charcoal border-b border-charcoal pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              Read Our Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
