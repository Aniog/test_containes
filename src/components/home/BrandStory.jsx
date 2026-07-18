import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-cream-dark" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image side */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-charcoal">
            <img
              data-strk-bg-id="brand-story-img"
              data-strk-bg="[brand-story-heading] [brand-story-text]"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text side */}
          <div className="max-w-lg">
            <p className="text-gold text-xs tracking-widest uppercase font-sans font-medium mb-3">
              About Velmora
            </p>
            <h2 id="brand-story-heading" className="text-4xl md:text-5xl font-serif font-semibold text-charcoal leading-tight">
              Jewelry That
              <br />
              <span className="italic font-light">Tells Your Story</span>
            </h2>
            <div className="w-12 h-0.5 bg-gold/40 my-6" />
            <p id="brand-story-text" className="text-warm-gray-500 font-sans leading-relaxed text-base">
              Velmora was born from a belief that fine jewelry shouldn&apos;t require a fine price tag. 
              Every piece is crafted in 18K gold-plated metals with the same care and attention to detail 
              as luxury houses — but designed for the way you actually live. From morning coffee to evening 
              dinner, Velmora is made to be worn, not kept in a box.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 mt-8 text-charcoal font-sans text-sm tracking-widest uppercase hover:text-gold transition-colors duration-300 group"
            >
              Our Story
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}