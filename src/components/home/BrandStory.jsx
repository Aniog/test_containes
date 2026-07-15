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
    <section ref={containerRef} className="bg-warmwhite">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 min-h-[500px]">
          {/* Image */}
          <div className="relative bg-sand/30 min-h-[350px] md:min-h-full">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-title] gold jewelry craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex items-center px-8 lg:px-20 py-16 lg:py-24">
            <div className="max-w-md mx-auto">
              <p className="text-xs tracking-widest uppercase text-taupe font-sans mb-4">Our Philosophy</p>
              <h2 id="brand-story-title" className="serif-heading text-3xl md:text-4xl lg:text-5xl font-light mb-8 leading-tight">
                Jewelry that<br />tells your story
              </h2>
              <p className="text-taupe font-sans text-sm leading-relaxed mb-6">
                At Velmora, we believe fine jewelry should be part of everyday life — not locked away for special occasions. Each piece is crafted in 18K gold-plated brass with meticulous attention to detail, designed to be layered, stacked, and worn from morning to evening.
              </p>
              <p className="text-taupe font-sans text-sm leading-relaxed mb-8">
                From our atelier in Barcelona, we work with skilled artisans using ethically sourced materials to create demi-fine pieces that feel both timeless and modern.
              </p>
              <Link to="/shop" className="btn-outline">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
