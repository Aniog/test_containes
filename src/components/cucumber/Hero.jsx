import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-cucumber-cream pt-16"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        data-strk-bg-id="hero-bg-cuc-7f3a1b"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block bg-cucumber-pale text-cucumber font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
            Nature's Coolest Vegetable
          </span>
          <h1
            id="hero-title"
            className="font-black text-5xl md:text-7xl text-cucumber-dark leading-tight mb-6"
          >
            Fresh.<br />
            Crisp.<br />
            <span className="text-cucumber">Cucumber.</span>
          </h1>
          <p
            id="hero-subtitle"
            className="text-lg text-cucumber-muted leading-relaxed mb-8 max-w-md"
          >
            Discover the world's most refreshing vegetable — packed with hydration,
            nutrients, and endless culinary possibilities.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#nutrition"
              className="bg-cucumber text-white px-7 py-3 rounded-full font-semibold hover:bg-cucumber-light transition-colors"
            >
              Explore Benefits
            </a>
            <a
              href="#recipes"
              className="border-2 border-cucumber text-cucumber px-7 py-3 rounded-full font-semibold hover:bg-cucumber-pale transition-colors"
            >
              View Recipes
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-cucumber-pale rounded-3xl -rotate-3" />
          <img
            alt="Fresh cucumber"
            data-strk-img-id="hero-img-cuc-9d2e4f"
            data-strk-img="[hero-subtitle] [hero-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="relative rounded-2xl shadow-xl w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
