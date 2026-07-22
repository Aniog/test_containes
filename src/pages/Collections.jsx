import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { StrkImage } from '@/components/product/ProductImage';
import Reveal from '@/components/Reveal';

const COLLECTIONS = [
  {
    id: 'the-golden-edit',
    title: 'The Golden Edit',
    blurb: 'Warm, high-polish 18k gold essentials — the pieces our studio reaches for daily.',
    category: 'all',
    wide: true,
  },
  {
    id: 'everyday-earrings',
    title: 'Everyday Earrings',
    blurb: 'Studs, cuffs and drops designed to never come off.',
    category: 'earrings',
    wide: false,
  },
  {
    id: 'necklace-layers',
    title: 'Necklace Layers',
    blurb: 'Chains and pendants made for mixing.',
    category: 'necklaces',
    wide: false,
  },
  {
    id: 'the-huggie-bar',
    title: 'The Huggie Bar',
    blurb: 'Build your stack, from slim minis to bold domes.',
    category: 'huggies',
    wide: false,
  },
  {
    id: 'heirloom-gifts',
    title: 'Heirloom Gifts',
    blurb: 'Gift-boxed sets that say you thought of everything.',
    category: 'sets',
    wide: false,
  },
];

export default function Collections() {
  return (
    <div className="pt-16 md:pt-20">
      <div className="border-b border-espresso/10 bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-gold">
            Curated for You
          </p>
          <h1 className="mt-3 font-serif text-4xl font-light text-espresso md:text-6xl">
            Collections
          </h1>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-taupe">
            Thoughtfully edited capsules — each one a small story in 18k gold.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-5 py-12 sm:grid-cols-2 md:px-8 md:py-16 lg:grid-cols-4">
        {COLLECTIONS.map((col, i) => (
          <Reveal key={col.id} delay={i * 80} className={col.wide ? 'sm:col-span-2 lg:col-span-2 lg:row-span-2' : ''}>
            <Link
              to={col.category === 'all' ? '/shop' : `/shop?category=${col.category}`}
              className="group relative block h-full min-h-[280px] overflow-hidden bg-ivory"
            >
              <span id={`col-${col.id}-title`} className="sr-only">
                {col.title}, {col.blurb}, 18k gold demi-fine jewelry editorial photography
              </span>
              <StrkImage
                imgId={`collection-${col.id}`}
                query={`[col-${col.id}-title]`}
                ratio={col.wide ? '16x9' : '3x4'}
                width={900}
                alt={col.title}
                className="absolute inset-0 h-full w-full"
                imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/65 via-espresso/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <div>
                  <p className="font-serif text-2xl text-cream">{col.title}</p>
                  <p className="mt-1 max-w-xs text-xs leading-relaxed text-cream/80">{col.blurb}</p>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-cream/40 text-cream transition-all duration-300 group-hover:border-gold group-hover:bg-gold">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
