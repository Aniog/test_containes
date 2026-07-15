import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="story"
      ref={containerRef}
      className="bg-velmora-porcelain py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden bg-velmora-stone">
            <img
              data-strk-img-id="brand-story-image"
              data-strk-img="[story-title] [story-body]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-10">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-velmora-gold">
              Our Story
            </p>
            <h2
              id="story-title"
              className="mt-4 font-serif text-3xl text-velmora-ink sm:text-4xl lg:text-5xl"
            >
              Jewelry for the Modern Romantic
            </h2>
            <div
              id="story-body"
              className="mt-6 space-y-4 text-base leading-relaxed text-velmora-taupe"
            >
              <p>
                Velmora was born from a simple belief: fine-feeling jewelry should
                be part of your everyday, not saved for special occasions alone.
              </p>
              <p>
                Each piece is thoughtfully designed in small batches, using
                responsibly sourced brass and a thick layer of 18k gold plating.
                The result is demi-fine jewelry that looks luxurious, wears
                beautifully, and remains accessible.
              </p>
            </div>
            <Link
              to="/shop"
              className="mt-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-velmora-ink transition-colors hover:text-velmora-gold"
            >
              Explore the Collection <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
