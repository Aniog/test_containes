import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      return ImageHelper.loadImages(strkImgConfig, sectionRef.current);
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-0 bg-velmora-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px] overflow-hidden">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-title] [brand-story-text]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-6 py-12 md:px-16 lg:px-20 bg-velmora-ivory">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-velmora-gold mb-4">
              Our Philosophy
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl font-medium text-velmora-espresso leading-tight"
            >
              Jewelry That Tells Your Story
            </h2>
            <div className="w-12 h-[1px] bg-velmora-gold my-6" />
            <p
              id="brand-story-text"
              className="font-sans text-sm text-velmora-warmgray leading-relaxed"
            >
              Velmora was born from a belief that fine jewelry should be accessible without
              compromising on quality or design. Each piece in our collection is designed in-house,
              crafted with 18K gold plating, and finished with a premium protective coating to
              ensure lasting beauty. We believe in quiet luxury — pieces that speak softly but leave
              a lasting impression.
            </p>
            <p className="font-sans text-sm text-velmora-warmgray leading-relaxed mt-4">
              From our studio to your jewelry box, every detail is considered. Because the best
              pieces are the ones you reach for every single day.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 font-sans text-xs font-semibold tracking-[0.2em] uppercase text-velmora-espresso hover:text-velmora-gold transition-colors group"
            >
              Our Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
