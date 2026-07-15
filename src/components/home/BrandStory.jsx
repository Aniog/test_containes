import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useImageLoader } from '@/hooks/useImageLoader';

export default function BrandStory() {
  const containerRef = useImageLoader();

  return (
    <section className="bg-cream py-16 md:py-24" ref={containerRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden bg-warm-gray md:aspect-square">
            <p id="brand-story-query" className="sr-only">
              gold jewelry
            </p>
            <div
              data-strk-bg-id="brand-story-velmora"
              data-strk-bg="[brand-story-query] [story-title]"
              data-strk-bg-ratio="1x1"
              data-strk-bg-width="800"
              role="img"
              aria-label="Velmora brand story"
              className="absolute inset-0 bg-warm-gray bg-cover bg-center"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Our Philosophy
            </span>
            <h2
              id="story-title"
              className="font-serif text-3xl font-medium leading-tight text-espresso md:text-4xl lg:text-5xl"
            >
              Jewelry for the Long Game
            </h2>
            <p
              id="story-body"
              className="mt-6 font-sans text-sm leading-relaxed text-taupe md:text-base"
            >
              Velmora was born from a simple belief: the best jewelry is the kind
              you never want to take off. We design demi-fine pieces in small
              batches, using 18k gold plating and hypoallergenic materials so
              every earring, necklace, and huggie feels as good as it looks. No
              fast trends. No compromise.
            </p>
            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-espresso transition-colors hover:text-gold"
            >
              Our Story
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
