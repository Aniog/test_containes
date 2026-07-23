import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => {
      window.cancelAnimationFrame(frameId);
      if (containerRef.current) {
        ImageHelper.disconnect(containerRef.current);
      }
    };
  }, []);

  return (
    <section ref={containerRef} className="bg-white py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden bg-sand/40 lg:aspect-[4/3]">
            <div
              className="absolute inset-0 bg-sand"
              data-strk-bg-id="story-img-1"
              data-strk-bg="[story-title] [story-body]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="1000"
            />
          </div>

          <div className="lg:pl-8">
            <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Our Atelier
            </p>
            <h2
              id="story-title"
              className="font-playfair text-3xl font-medium leading-snug text-espresso md:text-4xl lg:text-5xl"
            >
              Designed for the Modern Heirloom
            </h2>
            <p
              id="story-body"
              className="mt-6 font-sans text-base font-light leading-relaxed text-taupe"
            >
              Velmora was born from a simple belief: fine jewelry should feel
              attainable, personal, and lasting. Every piece is designed in small
              batches, finished by hand, and created to become part of your daily
              ritual — not just your special occasions.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-espresso hover:text-gold"
            >
              Our Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
