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
    <section
      ref={containerRef}
      className="bg-cream-deep py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div className="relative aspect-[4/5] overflow-hidden bg-bone order-1 md:order-none">
          <img
            alt="Velmora atelier"
            data-strk-img-id="velmora-story-image-7a31b9"
            data-strk-img="[story-headline] [story-body] hands of jeweler crafting gold ring atelier warm light editorial"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="max-w-lg">
          <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-champagne mb-4">
            Our story
          </p>
          <h2
            id="story-headline"
            className="font-serif font-light text-3xl md:text-5xl text-ink leading-[1.05]"
          >
            Quiet, considered jewelry — built to be passed down.
          </h2>
          <p
            id="story-body"
            className="mt-6 text-base text-ink-soft leading-relaxed"
          >
            Velmora began with a question: why should heirloom-quality jewelry
            only live in vintage shops? Every piece is plated in 18K gold over a
            hypoallergenic core, finished by a small team of jewelers, and made
            in limited runs. No fast trends. No filler.
          </p>
          <p className="mt-4 text-base text-ink-soft leading-relaxed">
            We design for the long calendar — the everyday huggie you forget you
            are wearing, the pendant your daughter borrows, the gift that
            travels through years.
          </p>
          <Link
            to="/about"
            className="inline-block mt-8 text-xs uppercase tracking-[0.3em] text-ink link-underline"
          >
            Read our story
          </Link>
        </div>
      </div>
    </section>
  );
}
