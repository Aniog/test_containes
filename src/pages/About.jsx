import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    document.title = 'Our Story · Velmora';
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="relative h-[60vh] min-h-[440px] w-full overflow-hidden bg-espresso">
        <div
          data-strk-bg-id="about-hero"
          data-strk-bg="artisan hands crafting fine jewelry, soft warm window light, editorial documentary photography, neutral background"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-espresso/10 to-espresso/70" />
        <div className="relative z-10 mx-auto flex h-full max-w-8xl flex-col items-center justify-end px-5 pb-14 pt-24 text-center text-bone sm:px-8 lg:px-12">
          <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-bone/85">
            Velmora
          </p>
          <h1 className="mt-3 font-serif text-5xl font-light tracking-tight sm:text-6xl md:text-7xl">
            Our story
          </h1>
        </div>
      </section>

      <section className="bg-bone py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <p className="text-base leading-relaxed text-mink">
            Velmora was started at a kitchen table in Brooklyn in 2019. We
            were tired of two things: jewelry that turned green after a month,
            and fine jewelry that required a calendar invite to buy.
          </p>
          <p className="mt-5 text-base leading-relaxed text-mink">
            So we set out to build a third thing: demi-fine jewelry,
            hand-finished in 18K gold plate, made slowly and priced fairly.
            Pieces you can wear to brunch, to a wedding, to the corner store
            on a Tuesday afternoon.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto grid max-w-8xl grid-cols-1 gap-10 px-5 sm:px-8 md:grid-cols-2 md:gap-14 lg:px-12">
          <div className="aspect-[4/5] overflow-hidden bg-linen">
            <div
              data-strk-img-id="about-1"
              data-strk-img="artisan polishing gold jewelry, close up hands, soft warm light"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1000"
              className="h-full w-full bg-cover bg-center"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-gold-deep">
              The craft
            </p>
            <h2 className="mt-3 font-serif text-4xl font-light tracking-tight text-espresso sm:text-5xl">
              Slow, by design.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-mink">
              We work with small workshops in New York, Istanbul, and Bangkok.
              Each piece passes through the hands of at least four artisans
              before it reaches ours. We name batches, not SKUs.
            </p>
            <Link
              to="/shop"
              className="group mt-8 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.24em] text-espresso"
            >
              See the collection
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
