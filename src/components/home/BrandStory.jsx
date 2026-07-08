import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Image */}
        <div className="aspect-[4/5] overflow-hidden">
          <img
            alt="Velmora brand story"
            data-strk-img-id="brand-story-img-f1g2h3"
            data-strk-img="[brand-story-title] [brand-story-desc] jewelry craftsmanship gold"
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="py-4 md:py-8">
          <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-charcoal leading-tight">
            Designed with Intention, Crafted with Care
          </h2>
          <p id="brand-story-desc" className="mt-6 text-stone leading-relaxed">
            Every Velmora piece begins as a sketch inspired by architecture, nature, and the quiet confidence of the women who wear them. We believe luxury should be accessible — that's why we use 18K gold plating over premium base metals, delivering the look and feel of fine jewelry at a fraction of the cost.
          </p>
          <p className="mt-4 text-stone leading-relaxed">
            Our commitment to quality means each piece is hypoallergenic, tarnish-resistant, and designed to be worn every day. From our studio to your jewelry box — crafted to be treasured.
          </p>
          <button
            className="mt-8 text-xs uppercase tracking-btn font-medium px-8 py-3 transition-all duration-300 bg-transparent cursor-pointer"
            style={{ border: '1px solid #B8860B', color: '#B8860B' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#B8860B'; e.currentTarget.style.color = '#ffffff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#B8860B'; }}
          >
            Our Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
