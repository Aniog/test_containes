import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useReveal } from '@/hooks/useReveal';

const COLLECTIONS = [
  {
    id: 'the-everyday-edit',
    title: 'The Everyday Edit',
    description:
      'Huggies, studs and fine chains — the quiet foundations of a jewelry wardrobe, made for never taking off.',
    category: 'huggies',
    count: '8 pieces',
    imgId: 'collection-everyday-b3f517',
    wide: true,
  },
  {
    id: 'statement-earrings',
    title: 'Statement Earrings',
    description:
      'Sculptural cuffs, filigree drops and crystal accents — pieces that start conversations at dinner.',
    category: 'earrings',
    count: '12 pieces',
    imgId: 'collection-statement-71d8a4',
    wide: false,
  },
  {
    id: 'the-layering-bar',
    title: 'The Layering Bar',
    description:
      'Chains and pendants in graduated lengths, designed to be stacked, mixed and made yours.',
    category: 'necklaces',
    count: '9 pieces',
    imgId: 'collection-layering-c59e12',
    wide: false,
  },
  {
    id: 'the-gift-atelier',
    title: 'The Gift Atelier',
    description:
      'Boxed sets and keepsake pieces, wrapped in linen with a hand-written note. Gifting, perfected.',
    category: 'sets',
    count: '5 pieces',
    imgId: 'collection-gift-4a72d9',
    wide: true,
  },
];

export default function Collections() {
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
        <header className="border-b border-hairline bg-cream">
          <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
            <p className="reveal text-[11px] uppercase tracking-[0.35em] text-bronze">Curated Edits</p>
            <h1 className="reveal mt-3 font-serif text-4xl font-light text-ink md:text-6xl">
              The Collections
            </h1>
            <p className="reveal mt-4 max-w-xl text-sm leading-relaxed text-taupe">
              Small, deliberate edits — each built around a mood, a moment, or a person you love
              (including yourself).
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
          <div className="grid gap-6 md:grid-cols-2">
            {COLLECTIONS.map((collection) => (
              <Link
                key={collection.id}
                to={`/shop?category=${collection.category}`}
                className={`reveal group relative block overflow-hidden bg-espresso ${
                  collection.wide ? 'md:col-span-2' : ''
                }`}
              >
                <div className={collection.wide ? 'aspect-[16/9] md:aspect-[21/9]' : 'aspect-[4/3]'}>
                  <img
                    data-strk-img-id={collection.imgId}
                    data-strk-img={`[collection-${collection.id}-desc] [collection-${collection.id}-title] gold jewelry editorial campaign photography, warm cinematic light, quiet luxury`}
                    data-strk-img-ratio={collection.wide ? '16x9' : '4x3'}
                    data-strk-img-width={collection.wide ? '1600' : '900'}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={collection.title}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-90 transition-all duration-700 ease-out-soft group-hover:scale-105 group-hover:opacity-75"
                  />
                </div>
                <div
                  className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/25 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-7 md:p-9">
                  <div className="max-w-md">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-gold">
                      {collection.count}
                    </p>
                    <h2
                      id={`collection-${collection.id}-title`}
                      className="mt-2 font-serif text-2xl font-light text-ivory md:text-4xl"
                    >
                      {collection.title}
                    </h2>
                    <p
                      id={`collection-${collection.id}-desc`}
                      className="mt-2 hidden text-sm leading-relaxed text-ivory/75 md:block"
                    >
                      {collection.description}
                    </p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-2 border border-ivory/40 px-5 py-3 text-[10px] uppercase tracking-[0.25em] text-ivory transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-espresso">
                    Explore
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
