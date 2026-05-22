import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const StorySection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="story" ref={containerRef} className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl h-80 md:h-[480px]">
          <img
            alt="Our Story"
            className="w-full h-full object-cover"
            data-strk-img-id="story-img-v4w5x6"
            data-strk-img="[story-desc] [story-title] Italian pizzeria wood fired oven"
            data-strk-img-ratio="3x4"
            data-strk-img-width="700"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          {/* Floating badge */}
          <div className="absolute bottom-6 left-6 bg-dark-brown text-cream px-5 py-3 rounded-xl shadow-lg">
            <p className="font-display text-3xl font-bold text-warm-orange">1987</p>
            <p className="text-xs text-cream/70 tracking-wide uppercase">Est. Naples, Italy</p>
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="text-warm-orange text-xs tracking-widest uppercase font-semibold mb-3">
            Our Story
          </p>
          <h2 id="story-title" className="font-display text-4xl md:text-5xl font-bold text-dark-brown mb-6 leading-tight">
            Three Generations of Pizza Perfection
          </h2>
          <p id="story-desc" className="text-warm-gray text-base leading-relaxed mb-5">
            It all started in a small trattoria in Naples, where Nonno Giuseppe
            perfected his dough recipe over decades of early mornings and late
            nights. His secret? Simple, honest ingredients — and never rushing
            the fermentation.
          </p>
          <p className="text-warm-gray text-base leading-relaxed mb-8">
            Today, we carry that same philosophy across the ocean. Every pizza
            we make honors that tradition: 72-hour cold-fermented dough, San
            Marzano tomatoes, and a wood-fired oven that reaches 900°F — just
            like Nonno's.
          </p>
          <div className="flex gap-10">
            <div>
              <p className="font-display text-4xl font-bold text-pizza-red">35+</p>
              <p className="text-warm-gray text-sm mt-1">Years of Craft</p>
            </div>
            <div>
              <p className="font-display text-4xl font-bold text-pizza-red">12</p>
              <p className="text-warm-gray text-sm mt-1">Signature Pizzas</p>
            </div>
            <div>
              <p className="font-display text-4xl font-bold text-pizza-red">100%</p>
              <p className="text-warm-gray text-sm mt-1">Italian Ingredients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
