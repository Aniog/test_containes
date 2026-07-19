import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StockImage } from '@/components/ui/StockImage.jsx';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, sectionRef.current);
  }, []);

  return (
    <section ref={sectionRef} className="bg-surface">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden bg-background md:aspect-auto">
            <StockImage
              id="brand-story-img"
              query="[brand-story-title] [brand-story-body]"
              ratio="1x1"
              width="800"
              alt="Velmora brand story"
              className="h-full w-full"
              containerRef={sectionRef}
            />
          </div>

          <div className="flex flex-col justify-center px-6 py-16 md:px-12 lg:px-20">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">Our Philosophy</p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl font-light leading-tight md:text-4xl lg:text-5xl"
            >
              Quiet Luxury, Made for Real Life
            </h2>
            <p
              id="brand-story-body"
              className="mt-6 text-sm leading-relaxed text-muted md:text-base"
            >
              Velmora was born from a simple belief: fine-feeling jewelry should not sit in a box waiting for special occasions. Each piece is designed in-house, cast in recycled brass, and finished with thick 18k gold plate — so it keeps its glow through morning coffee, evening plans, and everything between.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex w-fit border-b border-foreground pb-1 text-xs font-medium uppercase tracking-[0.16em] text-foreground transition-colors hover:text-accent hover:border-accent"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
