import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useReveal } from '@/hooks/useReveal';

const POSTS = [
  {
    id: 'art-of-layering',
    title: 'The Art of Layering: A Field Guide',
    excerpt: 'Three chains, one rule: vary the weight, keep the warmth. Our stylists break down the stacks we can’t stop wearing.',
    date: 'July 2026',
    readTime: '4 min read',
    category: 'Styling',
    imgId: 'journal-layering-4c81f2',
  },
  {
    id: 'demi-fine-explained',
    title: 'Demi-Fine, Explained Honestly',
    excerpt: 'What “demi-fine” actually means, how plating thickness changes everything, and the questions to ask before you buy.',
    date: 'June 2026',
    readTime: '6 min read',
    category: 'Education',
    imgId: 'journal-demifine-93a5d7',
  },
  {
    id: 'care-rituals',
    title: 'Care Rituals for Pieces You Live In',
    excerpt: 'The 30-second nightly habit that keeps 18K plating luminous for years — straight from our atelier bench.',
    date: 'May 2026',
    readTime: '3 min read',
    category: 'Care',
    imgId: 'journal-care-2f7b41',
  },
  {
    id: 'gifting-notes',
    title: 'Notes on Gifting Well',
    excerpt: 'How to choose jewelry for someone else without guessing — a gentle framework from a decade of gift consultations.',
    date: 'April 2026',
    readTime: '5 min read',
    category: 'Gifting',
    imgId: 'journal-gifting-e6c308',
  },
];

export default function Journal() {
  const imageRef = useRef(null);
  const revealRef = useReveal();
  const [featured, ...rest] = POSTS;

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
            <p className="reveal text-[11px] uppercase tracking-[0.35em] text-bronze">The Journal</p>
            <h1 className="reveal mt-3 font-serif text-4xl font-light text-ink md:text-6xl">
              Notes from the Atelier
            </h1>
            <p className="reveal mt-4 max-w-xl text-sm leading-relaxed text-taupe">
              Styling ideas, honest education and care rituals — written by the people who make
              your jewelry.
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
          {/* Featured post */}
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="reveal group grid gap-6 md:grid-cols-2 md:items-center md:gap-12"
          >
            <div className="overflow-hidden bg-sand">
              <img
                data-strk-img-id={featured.imgId}
                data-strk-img={`[journal-${featured.id}-title] editorial flat lay of layered gold necklaces on warm linen, luxury jewelry magazine photography`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="1100"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={featured.title}
                className="aspect-[16/9] w-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-105"
              />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-bronze">
                {featured.category} · {featured.date}
              </p>
              <h2
                id={`journal-${featured.id}-title`}
                className="mt-4 font-serif text-3xl font-light leading-tight text-ink transition-colors duration-300 group-hover:text-bronze md:text-4xl"
              >
                {featured.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-taupe md:text-base">
                {featured.excerpt}
              </p>
              <p className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-ink">
                Read the story
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
              </p>
            </div>
          </a>

          {/* Rest of posts */}
          <div className="mt-14 grid gap-x-6 gap-y-12 border-t border-hairline pt-14 md:grid-cols-3">
            {rest.map((post) => (
              <a
                key={post.id}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="reveal group block"
              >
                <div className="overflow-hidden bg-sand">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[journal-${post.id}-title] gold jewelry editorial still life, warm tones, magazine photography`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-105"
                  />
                </div>
                <p className="mt-5 text-[11px] uppercase tracking-[0.3em] text-bronze">
                  {post.category} · {post.readTime}
                </p>
                <h3
                  id={`journal-${post.id}-title`}
                  className="mt-3 font-serif text-xl font-light leading-snug text-ink transition-colors duration-300 group-hover:text-bronze md:text-2xl"
                >
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-taupe">{post.excerpt}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
