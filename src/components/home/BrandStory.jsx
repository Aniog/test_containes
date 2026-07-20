import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function BrandStory() {
  const containerRef = useRef(null);
  const textRef = useReveal();

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto grid max-w-8xl grid-cols-1 gap-10 px-5 sm:px-8 md:grid-cols-12 md:gap-14 lg:px-12">
        {/* Image left */}
        <div
          ref={containerRef}
          className="relative aspect-[4/5] overflow-hidden bg-linen md:col-span-6 md:aspect-[5/6]"
        >
          <div
            data-strk-img-id="brand-story-main"
            data-strk-img="artisan hands crafting gold jewelry, soft warm light, editorial documentary photography, neutral background"
            data-strk-img-ratio="5x6"
            data-strk-img-width="1000"
            className="absolute inset-0 h-full w-full bg-cover bg-center"
          />
        </div>

        {/* Text right */}
        <div
          ref={textRef}
          className="flex flex-col justify-center md:col-span-6 md:pl-6 lg:pl-10"
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-gold-deep">
            Our story
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light leading-[1.05] tracking-tight text-espresso sm:text-5xl lg:text-[3.5rem]">
            Quietly considered, made to last.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-mink">
            Velmora began with a single, stubborn idea: that demi-fine jewelry
            should feel as personal as fine jewelry, without the wait, the
            markup, or the occasion.
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-mink">
            Every piece is hand-finished in 18K gold plate over a sterling
            silver core. We work with small workshops — slowly, in small
            batches — and we name the things we make for the women who wear
            them.
          </p>
          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.24em] text-espresso"
          >
            Read our story
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
