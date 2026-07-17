import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useStrkImages } from '@/hooks/useStrkImages';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const BrandStory = () => {
  const containerRef = useRef(null);
  const [revealRef, revealed] = useScrollReveal();
  useStrkImages(containerRef);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={revealRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${revealed ? 'revealed' : ''}`}
        >
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden scroll-reveal animate-reveal-right">
            <img
              data-strk-img-id="brand-story-img-d4e5f6"
              data-strk-img="[brand-story-subtitle] [brand-story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8 scroll-reveal animate-reveal-left">
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl tracking-wide text-brand-charcoal"
            >
              Our Story
            </h2>
            <div className="w-12 h-px bg-brand-gold mt-4 mb-6" />
            <p
              id="brand-story-subtitle"
              className="text-base text-brand-warm-gray font-sans leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that luxury shouldn&apos;t be exclusive. We craft demi-fine jewelry with the same care and attention as the finest houses, using 18K gold plating over premium brass to create pieces that look and feel extraordinary.
            </p>
            <p className="text-base text-brand-warm-gray font-sans leading-relaxed mb-8">
              Every piece is designed in our studio and rigorously tested for durability and comfort. Hypoallergenic, water-resistant, and made to be worn every day — not saved for special occasions.
            </p>
            <Link
              to="/about"
              className="inline-block border border-brand-gold text-brand-gold font-sans text-xs font-semibold tracking-super-wide uppercase px-8 py-3 hover:bg-brand-gold hover:text-white transition-colors duration-200"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
