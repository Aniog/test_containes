import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-16 md:py-0 bg-ivory-200"
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[520px] overflow-hidden">
          <img
            data-strk-img-id="brand-story-img-a1b2c3"
            data-strk-img="[brand-story-desc] [brand-story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora brand story"
            className="w-full h-full object-cover"
          />
          <span id="brand-story-title" className="sr-only">Velmora Fine Jewelry brand story</span>
          <span id="brand-story-desc" className="sr-only">Artisan crafting delicate gold jewelry in a warm studio workshop</span>
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center px-8 md:px-14 lg:px-20 py-14 md:py-20">
          <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-4">Our Story</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velvet-900 mb-6 leading-snug">
            Made with intention.<br />
            <em className="italic">Worn with love.</em>
          </h2>
          <div className="hairline mb-6 w-12" />
          <p className="font-sans text-sm text-velvet-700 leading-relaxed mb-4">
            Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that move with you — from morning coffee to candlelit dinners.
          </p>
          <p className="font-sans text-sm text-velvet-700 leading-relaxed mb-8">
            Every piece is crafted in 18K gold-plated sterling silver, hypoallergenic and built to last. Because you deserve jewelry that keeps up with your life.
          </p>
          <Link
            to="/#about"
            className="self-start font-sans text-xs tracking-widest2 uppercase text-velvet-900 border-b border-velvet-900 pb-0.5 hover:text-gold hover:border-gold transition-colors"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
