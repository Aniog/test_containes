import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const COLLECTIONS = [
  {
    slug: 'the-aurea-edit',
    name: 'The Aurea Edit',
    blurb:
      'Our quiet bestsellers — domes, cuffs, and chains designed to be layered and lived in.',
    eyebrow: 'Edit No. 01',
  },
  {
    slug: 'florals-in-gold',
    name: 'Florals, in Gold',
    blurb:
      'Hand-set crystal florals on whisper-thin chains. Inspired by pressed botanicals.',
    eyebrow: 'Edit No. 02',
  },
  {
    slug: 'heirloom-gifting',
    name: 'Heirloom Gifting',
    blurb:
      'Matched sets, gift-boxed and ribbon-tied — for the people you love most.',
    eyebrow: 'Edit No. 03',
  },
];

export default function Collections() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <p className="text-[11px] uppercase tracking-[0.4em] text-mocha">Collections</p>
        <h1 className="mt-4 font-serif text-5xl font-light leading-[1.05] text-ink md:text-7xl">
          Small editions.<br />
          <em className="italic">Made to last.</em>
        </h1>

        <div className="mt-20 space-y-24 md:space-y-32">
          {COLLECTIONS.map((c, i) => (
            <article
              key={c.slug}
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                i % 2 ? 'md:[&>div:first-child]:order-2' : ''
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-ivory">
                <img
                  alt={c.name}
                  data-strk-img-id={`coll-${c.slug}-img`}
                  data-strk-img={`[coll-${c.slug}-name] [coll-${c.slug}-blurb] gold jewelry editorial warm light close up`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="1100"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] ease-out hover:scale-105"
                />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.4em] text-champagne-deep">
                  {c.eyebrow}
                </p>
                <h2
                  id={`coll-${c.slug}-name`}
                  className="mt-4 font-serif text-4xl font-light leading-[1.1] text-ink md:text-5xl"
                >
                  {c.name}
                </h2>
                <p
                  id={`coll-${c.slug}-blurb`}
                  className="mt-6 max-w-md text-base leading-relaxed text-mocha md:text-lg"
                >
                  {c.blurb}
                </p>
                <Link
                  to="/shop"
                  className="mt-8 inline-block border-b border-ink pb-1 text-[11px] uppercase tracking-[0.3em] text-ink"
                >
                  Shop the edit →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
