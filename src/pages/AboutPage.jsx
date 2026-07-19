import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const AboutPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen pt-20 sm:pt-24 pb-16">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg"
          data-strk-bg="[about-hero-title] jewelry craftsmanship artisan"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 id="about-hero-title" className="velmora-serif text-4xl sm:text-5xl md:text-6xl mb-4">
            Our Story
          </h1>
          <p className="text-sm sm:text-base text-white/70 max-w-lg mx-auto">
            Where timeless craftsmanship meets conscious design
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="prose prose-lg mx-auto">
          <p className="text-[var(--velmora-text-muted)] leading-relaxed mb-6">
            Velmora was born from a simple belief: that luxury jewelry should be accessible, sustainable, and designed to be worn every day. Founded in 2024, we set out to create demi-fine pieces that bridge the gap between costume jewelry and fine jewelry.
          </p>
          <p className="text-[var(--velmora-text-muted)] leading-relaxed mb-6">
            Each piece in our collection is crafted with 18K gold plating over responsibly sourced brass, ensuring both beauty and durability. We work with skilled artisans who bring decades of expertise to every detail, from the initial sketch to the final polish.
          </p>
          <p className="text-[var(--velmora-text-muted)] leading-relaxed mb-6">
            Our design philosophy centers on quiet luxury — pieces that speak softly but make a lasting impression. We believe jewelry should enhance your natural beauty, not overpower it. That's why our collections feature clean lines, thoughtful proportions, and subtle details that reveal themselves over time.
          </p>

          <h2 className="velmora-serif text-2xl sm:text-3xl text-[var(--velmora-dark)] mt-12 mb-6">Our Commitment</h2>

          <p className="text-[var(--velmora-text-muted)] leading-relaxed mb-6">
            Sustainability isn't just a buzzword for us — it's woven into every decision we make. From our eco-friendly packaging to our responsible sourcing practices, we're committed to minimizing our environmental impact while maximizing the beauty of our pieces.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 my-12">
            <div className="text-center">
              <p className="velmora-serif text-4xl text-[var(--velmora-accent)] mb-2">18K</p>
              <p className="text-sm text-[var(--velmora-text-muted)]">Gold Plated</p>
            </div>
            <div className="text-center">
              <p className="velmora-serif text-4xl text-[var(--velmora-accent)] mb-2">100%</p>
              <p className="text-sm text-[var(--velmora-text-muted)]">Hypoallergenic</p>
            </div>
            <div className="text-center">
              <p className="velmora-serif text-4xl text-[var(--velmora-accent)] mb-2">30</p>
              <p className="text-sm text-[var(--velmora-text-muted)]">Day Returns</p>
            </div>
          </div>

          <p className="text-[var(--velmora-text-muted)] leading-relaxed">
            When you choose Velmora, you're choosing jewelry that's made to be treasured — pieces that will accompany you through life's everyday moments and milestone celebrations alike. Welcome to the Velmora world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
