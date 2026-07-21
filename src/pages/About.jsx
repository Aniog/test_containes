import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useReveal } from '@/hooks/useReveal';

const VALUES = [
  {
    id: 'craft',
    title: 'Craft Over Speed',
    text: 'Every piece is plated, polished and finished by hand in our Lisbon atelier. No shortcuts, no compromises.',
  },
  {
    id: 'honesty',
    title: 'Honest Materials',
    text: 'Recycled sterling silver cores, generous 18K gold plating, nickel-free everything. What touches your skin matters.',
  },
  {
    id: 'longevity',
    title: 'Made to Last',
    text: 'Demi-fine means designed for decades, not seasons. Each piece passes a 48-hour wear test before it ships.',
  },
];

export default function About() {
  const imageRef = useRef(null);
  const revealRef = useReveal();

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, imageRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={imageRef} className="pt-16 md:pt-20">
      <div ref={revealRef}>
        {/* Header */}
        <header className="relative overflow-hidden bg-espresso text-ivory">
          <div
            data-strk-bg-id="about-hero-bg-c74e19"
            data-strk-bg="[about-hero-title] jewelry artisan hands crafting gold jewelry at atelier bench, warm window light, cinematic, quiet luxury"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1800"
            className="absolute inset-0 bg-cover bg-center opacity-45"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/40 to-espresso/30" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
            <p className="reveal text-[11px] uppercase tracking-[0.35em] text-gold">Our Story</p>
            <h1
              id="about-hero-title"
              className="reveal mt-4 max-w-2xl font-serif text-4xl font-light leading-tight md:text-6xl"
            >
              A third way between fine and fashion
            </h1>
            <p className="reveal mt-6 max-w-xl text-sm leading-relaxed text-ivory/80 md:text-base">
              Velmora was born from a simple frustration: jewelry was either precious and
              precious-priced, or beautiful for a season and gone. We spent two years developing a
              demi-fine standard we could be proud of.
            </p>
          </div>
        </header>

        {/* Story split */}
        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center md:gap-16 md:px-8 md:py-24">
          <div className="reveal order-2 md:order-1">
            <p className="text-[11px] uppercase tracking-[0.35em] text-bronze">Lisbon, 2019</p>
            <h2 className="mt-4 font-serif text-3xl font-light leading-tight text-ink md:text-4xl">
              It started at a kitchen table
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-taupe md:text-base">
              <p>
                Our founder, Helena Marques, grew up watching her grandmother rotate the same
                three gold pieces for sixty years — jewelry as ritual, not consumption. When
                Helena couldn’t find pieces with that soul at an honest price, she made them.
              </p>
              <p>
                Today Velmora is a small team of eleven — designers, platers, and polishers —
                working from a sunlit atelier in Lisbon’s Alcântara district. Every collection is
                still prototyped by hand, worn by the team for a month, and only then released.
              </p>
            </div>
          </div>
          <div className="reveal order-1 md:order-2">
            <img
              data-strk-img-id="about-founder-8d31c6"
              data-strk-img="[about-hero-title] portrait of elegant woman jewelry designer in warm atelier, gold jewelry on workbench, editorial photography"
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="The Velmora atelier"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </section>

        {/* Values */}
        <section className="border-y border-hairline bg-cream py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="reveal text-center">
              <p className="text-[11px] uppercase tracking-[0.35em] text-bronze">What We Believe</p>
              <h2 className="mt-3 font-serif text-3xl font-light text-ink md:text-5xl">
                The Velmora Standard
              </h2>
            </div>
            <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
              {VALUES.map((value, index) => (
                <div key={value.id} className="reveal border-t border-bronze/40 pt-7">
                  <p className="font-serif text-4xl font-light text-gold">0{index + 1}</p>
                  <h3 className="mt-4 font-serif text-xl text-ink md:text-2xl">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-taupe">{value.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-5 py-16 text-center md:px-8 md:py-24">
          <h2 className="reveal font-serif text-3xl font-light text-ink md:text-4xl">
            Find the piece that becomes yours
          </h2>
          <Link
            to="/shop"
            className="reveal group mt-8 inline-flex items-center gap-3 bg-bronze px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-ivory transition-colors duration-300 hover:bg-bronze-deep"
          >
            Shop the Collection
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
          </Link>
        </section>
      </div>
    </div>
  );
}
