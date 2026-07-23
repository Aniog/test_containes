import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import { ImageScope, StrkImg } from '@/components/StrkImage.jsx';
import strkImgConfig from '@/strk-img-config.json';

const VALUES = [
  {
    title: 'Honest Materials',
    text: 'Recycled brass cores, generous 2.5-micron 18K gold plating, and stones set by hand — never glued.',
  },
  {
    title: 'Small Batches',
    text: 'We produce in limited runs at a family-run atelier, so nothing sits in a warehouse and nothing goes to waste.',
  },
  {
    title: 'Fair Pricing',
    text: 'By selling directly to you, we skip the middlemen and the markups — demi-fine quality at $30–$120.',
  },
];

export default function About() {
  const heroRef = useRef(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, heroRef.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="pt-16 md:pt-[72px]">
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative flex min-h-[60vh] items-center overflow-hidden bg-espresso"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          data-strk-bg-id="about-hero-bg"
          data-strk-bg="jewelry atelier workbench with gold pieces and tools in warm window light, editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-espresso/90 via-espresso/60 to-espresso/30" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-24 md:px-10">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-bronze-light">Our Story</p>
          <h1 className="mt-4 max-w-xl font-serif text-5xl font-medium leading-[1.05] text-ivory md:text-6xl">
            Made slowly, worn daily
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ivory/85">
            Velmora is a small, independent jewelry house making demi-fine pieces for the
            women who wear them hardest — ourselves included.
          </p>
        </div>
      </section>

      {/* Story split */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <ImageScope className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-bronze">Est. 2019</p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-espresso">
              From one workbench to your jewelry box
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-umber">
              <p>
                Our founder began soldering gold at a kitchen table, frustrated that
                “affordable” jewelry turned skin green and “fine” jewelry required a
                four-figure budget. Velmora was her answer: demi-fine pieces with the look
                and longevity of fine jewelry, priced for real life.
              </p>
              <p>
                Six years on, every piece still begins as a hand sketch and is finished in
                the same family-run atelier. We launch a handful of designs each season —
                never more — and we wear every sample for a month before it earns the name.
              </p>
            </div>
          </div>
          <div className="overflow-hidden">
            <StrkImg
              imgId="about-founder"
              query="portrait of a woman jewelry designer holding gold earrings at a sunlit atelier, warm editorial photography"
              ratio="4x3"
              width={1000}
              alt="Velmora atelier"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </ImageScope>
      </section>

      {/* Values */}
      <section className="border-y border-linen bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
          <div className="mb-12 text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-bronze">
              What We Stand For
            </p>
            <h2 className="mt-3 font-serif text-4xl font-medium text-espresso">Three quiet promises</h2>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <div key={v.title} className="text-center animate-fade-up" style={{ animationDelay: `${i * 0.12}s` }}>
                <span className="font-serif text-5xl text-bronze/40">0{i + 1}</span>
                <h3 className="mt-4 font-serif text-2xl text-espresso">{v.title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-umber">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-16 text-center md:px-10 md:py-24">
        <h2 className="mx-auto max-w-xl font-serif text-4xl font-medium leading-tight text-espresso">
          Begin your own Velmora story
        </h2>
        <Link
          to="/shop"
          className="mt-8 inline-block bg-bronze px-10 py-4 text-[11px] font-medium uppercase tracking-luxe text-ivory transition-colors duration-300 hover:bg-bronze-dark"
        >
          Shop the Collection
        </Link>
      </section>
    </div>
  );
}
