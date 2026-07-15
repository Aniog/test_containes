import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export function ReelRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-velmora-cream py-16 md:py-24">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="mb-8 md:mb-10">
          <p className="mb-2 font-sans text-xs font-medium uppercase tracking-widest-xl text-velmora-gold">
            @velmorafine
          </p>
          <h2 className="font-serif text-3xl text-velmora-charcoal md:text-4xl">
            Styled by You
          </h2>
        </div>
      </div>
      <div className="hide-scrollbar flex gap-4 overflow-x-auto px-5 md:px-10 pb-2">
        <div className="group relative w-[180px] flex-shrink-0 cursor-pointer overflow-hidden rounded-sm md:w-[220px]">
          <div className="aspect-[9/16]">
            <img
              data-strk-img-id="reel-img-1"
              data-strk-img="[reel-caption-1] gold jewelry on model ear neck"
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Everyday gold moments"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/60 via-transparent to-transparent" />
          </div>
          <p
            id="reel-caption-1"
            className="absolute bottom-4 left-4 right-4 font-serif text-lg italic text-white"
          >
            Everyday gold moments
          </p>
        </div>

        <div className="group relative w-[180px] flex-shrink-0 cursor-pointer overflow-hidden rounded-sm md:w-[220px]">
          <div className="aspect-[9/16]">
            <img
              data-strk-img-id="reel-img-2"
              data-strk-img="[reel-caption-2] gold jewelry on model ear neck"
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="A little sparkle goes a long way"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/60 via-transparent to-transparent" />
          </div>
          <p
            id="reel-caption-2"
            className="absolute bottom-4 left-4 right-4 font-serif text-lg italic text-white"
          >
            A little sparkle goes a long way
          </p>
        </div>

        <div className="group relative w-[180px] flex-shrink-0 cursor-pointer overflow-hidden rounded-sm md:w-[220px]">
          <div className="aspect-[9/16]">
            <img
              data-strk-img-id="reel-img-3"
              data-strk-img="[reel-caption-3] gold jewelry on model ear neck"
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Gifted myself today"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/60 via-transparent to-transparent" />
          </div>
          <p
            id="reel-caption-3"
            className="absolute bottom-4 left-4 right-4 font-serif text-lg italic text-white"
          >
            Gifted myself today
          </p>
        </div>

        <div className="group relative w-[180px] flex-shrink-0 cursor-pointer overflow-hidden rounded-sm md:w-[220px]">
          <div className="aspect-[9/16]">
            <img
              data-strk-img-id="reel-img-4"
              data-strk-img="[reel-caption-4] gold jewelry on model ear neck"
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Date night essentials"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/60 via-transparent to-transparent" />
          </div>
          <p
            id="reel-caption-4"
            className="absolute bottom-4 left-4 right-4 font-serif text-lg italic text-white"
          >
            Date night essentials
          </p>
        </div>

        <div className="group relative w-[180px] flex-shrink-0 cursor-pointer overflow-hidden rounded-sm md:w-[220px]">
          <div className="aspect-[9/16]">
            <img
              data-strk-img-id="reel-img-5"
              data-strk-img="[reel-caption-5] gold jewelry on model ear neck"
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Minimal but never boring"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/60 via-transparent to-transparent" />
          </div>
          <p
            id="reel-caption-5"
            className="absolute bottom-4 left-4 right-4 font-serif text-lg italic text-white"
          >
            Minimal but never boring
          </p>
        </div>
      </div>
    </section>
  );
}
