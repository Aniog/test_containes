import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="bg-stone">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto md:min-h-[560px]">
            <img
              data-strk-img-id="brand-story-img-x9y0z1"
              data-strk-img="[brand-story-text] [brand-story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-gold mb-6">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-cormorant text-4xl md:text-5xl font-light text-charcoal tracking-wide leading-tight mb-6"
            >
              Made with intention.<br />
              <em className="not-italic text-gold">Worn with love.</em>
            </h2>
            <p
              id="brand-story-text"
              className="font-inter text-sm text-warm-gray leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune or compromise on quality. We design each piece to be worn every day — in the shower, to the office, on a date night.
            </p>
            <p className="font-inter text-sm text-warm-gray leading-relaxed mb-8">
              Our demi-fine collection is crafted from 18K gold-plated brass with nickel-free, hypoallergenic finishes. Every piece is designed in-house and made to last.
            </p>

            <div className="flex items-center gap-8 mb-10 pt-6 border-t border-divider">
              {[
                { num: '50K+', label: 'Happy Customers' },
                { num: '100%', label: 'Hypoallergenic' },
                { num: '18K', label: 'Gold Plated' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-cormorant text-2xl font-medium text-charcoal">{stat.num}</p>
                  <p className="font-inter text-[10px] tracking-wider uppercase text-warm-gray mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="self-start font-inter text-xs tracking-widest uppercase text-charcoal border-b border-charcoal pb-0.5 hover:text-gold hover:border-gold transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
