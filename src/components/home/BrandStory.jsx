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
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-charcoal-100 overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-m3n4o5"
              data-strk-img="[brand-story-subtitle] [brand-story-title]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:max-w-md">
            <p className="text-xs tracking-widest uppercase text-gold-500 font-medium mb-4">Our Story</p>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-charcoal-900 leading-tight mb-5" id="brand-story-title">
              Jewelry that tells<br />your story
            </h2>
            <p className="text-charcoal-500 text-sm md:text-base leading-relaxed mb-6" id="brand-story-subtitle">
              Velmora was born from a simple belief — that fine jewelry should feel personal, not precious. We craft each piece in 18K gold plate with the same attention to detail as heritage jewelers, but at a price that lets you live in your jewelry, not just save it for special occasions.
            </p>
            <Link to="/" className="text-xs tracking-widest uppercase text-gold-500 hover:text-gold-600 font-medium underline underline-offset-4 transition-colors">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;