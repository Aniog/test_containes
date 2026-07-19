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
    <section ref={containerRef} className="py-16 sm:py-24 bg-[var(--velmora-bg-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-[var(--velmora-border)] overflow-hidden">
            <div
              className="w-full h-full"
              data-strk-bg-id="brand-story-img-d4e5f6"
              data-strk-bg="[brand-story-title] [brand-story-subtitle] jewelry craftsmanship"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--velmora-accent)] mb-4">Our Philosophy</p>
            <h2 id="brand-story-title" className="velmora-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--velmora-dark)] mb-6 leading-tight">
              Where Craft<br />Meets Consciousness
            </h2>
            <p id="brand-story-subtitle" className="text-[var(--velmora-text-muted)] leading-relaxed mb-6">
              At Velmora, we believe luxury shouldn't come at a compromise. Our demi-fine jewelry is crafted with 18K gold plating over responsibly sourced brass, designed to be worn every day and treasured for years.
            </p>
            <p className="text-[var(--velmora-text-muted)] leading-relaxed mb-8">
              Each piece is thoughtfully designed in our studio, blending timeless elegance with contemporary minimalism. We create jewelry that speaks softly but makes a lasting impression.
            </p>
            <Link to="/about" className="velmora-btn-outline inline-flex">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
