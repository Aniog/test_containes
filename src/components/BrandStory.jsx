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
    <section ref={containerRef} className="py-16 lg:py-24 bg-warm-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden bg-warm-dark">
            <img
              data-strk-bg-id="brand-story-img-a1b2c3"
              data-strk-bg="[brand-story-title] [brand-story-desc]"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <p className="text-xs tracking-widest uppercase text-gold font-sans font-medium">Our Story</p>
            <h2 id="brand-story-title" className="heading-serif text-3xl md:text-4xl mt-4 leading-tight">
              Jewelry That Tells Your Story
            </h2>
            <p id="brand-story-desc" className="text-taupe text-sm md:text-base mt-6 leading-relaxed font-sans">
              At Velmora, we believe jewelry should be more than an accessory — it should be a reflection of who you are. 
              Every piece is meticulously crafted from 18K gold-plated materials, designed to transition seamlessly from 
              desk to dinner, from everyday to exceptional.
            </p>
            <p className="text-taupe text-sm md:text-base mt-4 leading-relaxed font-sans">
              We source ethically, price transparently, and package every order as if it were a gift — because we believe 
              you deserve nothing less.
            </p>
            <Link to="/" className="btn-outline inline-block mt-8">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}