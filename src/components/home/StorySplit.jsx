import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function StorySplit() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-cream border-t border-hairline">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-6 order-2 md:order-1">
            <div className="relative aspect-[4/5] overflow-hidden bg-ivory">
              <img
                data-strk-img-id="velmora-story-c41b07"
                data-strk-img="[velmora-story-body] [velmora-story-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="The Velmora atelier"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-6 order-1 md:order-2 md:pl-6">
            <p className="text-[11px] uppercase tracking-[0.3em] text-ink-soft mb-5">
              Our Story
            </p>
            <h2
              id="velmora-story-title"
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]"
            >
              A quieter kind of <span className="italic">luxury.</span>
            </h2>
            <div id="velmora-story-body" className="mt-8 space-y-5 text-ink-soft text-base leading-relaxed max-w-xl">
              <p>
                Velmora was founded in a small Manhattan studio with a single belief:
                that the most beautiful jewelry doesn&rsquo;t announce itself. It
                listens. It lingers. It earns its place in a life.
              </p>
              <p>
                Every piece is hand-finished in 18K gold plate over hypoallergenic
                metals, designed to be worn daily and passed down softly. No trends,
                no shouting — just quietly considered jewelry, made to be treasured.
              </p>
            </div>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center text-xs uppercase tracking-[0.3em] text-ink hover:text-gold-deep transition-colors duration-300 border-b border-ink/40 hover:border-gold-deep pb-1"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
