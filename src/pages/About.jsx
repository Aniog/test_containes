import React from 'react';
import { Link } from 'react-router-dom';
import { StrkImage } from '@/components/product/ProductImage';
import Reveal from '@/components/Reveal';

const VALUES = [
  {
    title: 'Honest Materials',
    text: 'A generous layer of 18k gold over recycled brass. No nickel, no lead, no surprises — ever.',
  },
  {
    title: 'Small Batches',
    text: 'Every piece is finished by hand in limited runs, so what you wear feels considered, not mass-made.',
  },
  {
    title: 'Fair Prices',
    text: 'By selling directly to you, we skip the middlemen — heirloom feel, everyday price.',
  },
];

export default function About() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Intro */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 py-16 md:grid-cols-2 md:gap-16 md:px-8 md:py-28">
        <Reveal>
          <div className="max-w-xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-gold">
              About Velmora
            </p>
            <h1 className="mt-4 font-serif text-4xl font-light leading-tight text-espresso md:text-6xl">
              Quiet luxury, <span className="italic">made to be lived in</span>
            </h1>
            <p className="mt-6 text-sm leading-relaxed text-taupe md:text-base">
              Velmora Fine Jewelry was born from a simple frustration: jewelry
              that looked beautiful in photos but faded after a month — or
              cost a month’s rent. We believed there was a middle ground.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-taupe md:text-base">
              Since 2019, our small atelier has crafted demi-fine pieces in 18k
              gold: substantial enough to treasure, gentle enough for sensitive
              skin, and priced so that “everyday luxury” is not an oxymoron.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="aspect-[4/5] w-full overflow-hidden bg-ivory">
            <span id="about-hero-caption" className="sr-only">
              portrait of a woman wearing layered 18k gold jewelry, warm soft
              editorial light, quiet luxury aesthetic
            </span>
            <StrkImage
              imgId="about-hero-img"
              query="[about-hero-caption]"
              ratio="4x5"
              width={900}
              alt="Woman wearing Velmora gold jewelry"
              className="h-full w-full"
            />
          </div>
        </Reveal>
      </div>

      {/* Values */}
      <div className="border-y border-espresso/10 bg-ivory">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-16 md:grid-cols-3 md:gap-8 md:px-8 md:py-24">
          {VALUES.map((value, i) => (
            <Reveal key={value.title} delay={i * 100}>
              <div className="border-t-2 border-gold pt-6">
                <h2 className="font-serif text-2xl text-espresso">{value.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-taupe">{value.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-7xl px-5 py-16 text-center md:px-8 md:py-24">
        <Reveal>
          <h2 className="font-serif text-3xl font-light text-espresso md:text-5xl">
            Find your <span className="italic">everyday heirloom</span>
          </h2>
          <Link
            to="/shop"
            className="mt-8 inline-block bg-gold px-10 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-cream transition-colors hover:bg-gold-deep"
          >
            Shop the Collection
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
