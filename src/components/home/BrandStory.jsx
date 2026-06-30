import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function BrandStory() {
  const containerRef = useRef(null);
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal();
  const { ref: textRef, isVisible: textVisible } = useScrollReveal();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div
            ref={imageRef}
            className={`aspect-[4/5] overflow-hidden transition-all duration-1000 ${
              imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-title] [brand-body]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
            />
          </div>
          <div
            ref={textRef}
            className={`py-4 md:py-8 transition-all duration-1000 delay-200 ${
              textVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-accent font-medium mb-4">
              Our Story
            </p>
            <h2
              id="brand-title"
              className="font-serif text-3xl md:text-4xl font-light leading-tight"
            >
              Jewelry That Moves With You
            </h2>
            <p
              id="brand-body"
              className="text-muted text-sm md:text-base mt-6 leading-relaxed max-w-md"
            >
              Velmora was born from a simple belief: fine jewelry should not be
              reserved for special occasions. Every piece in our collection is
              designed to be worn daily — lightweight, hypoallergenic, and
              finished in 18K gold plating that holds its warmth through every
              moment of your life.
            </p>
            <p className="text-muted text-sm md:text-base mt-4 leading-relaxed max-w-md">
              We work with skilled artisans who understand that beauty lives in
              the details. From the curve of a huggie to the setting of a crystal,
              each design is refined until it feels effortless.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 mt-8 text-xs uppercase tracking-[0.15em] font-medium text-base hover:text-accent transition-colors group"
            >
              Explore the Collection
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
