import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { StrkImage } from '@/components/product/ProductImage';
import Reveal from '@/components/Reveal';

const POSTS = [
  {
    id: 'care-guide',
    title: 'How to Care for Demi-Fine Jewelry',
    excerpt: 'Five small rituals that keep 18k gold glowing for years — not months.',
    date: 'July 2026',
    readTime: '4 min read',
  },
  {
    id: 'ear-stack-guide',
    title: 'The Art of the Ear Stack',
    excerpt: 'How to build a curated ear: where to start, what to mix, and the one rule we always break.',
    date: 'June 2026',
    readTime: '6 min read',
  },
  {
    id: 'gifting-guide',
    title: 'A Quiet Guide to Gifting Gold',
    excerpt: 'For birthdays, bridesmaids, and just-because — how to choose a piece they will actually wear.',
    date: 'May 2026',
    readTime: '5 min read',
  },
];

export default function Journal() {
  return (
    <div className="pt-16 md:pt-20">
      <div className="border-b border-espresso/10 bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-gold">
            Notes from the Atelier
          </p>
          <h1 className="mt-3 font-serif text-4xl font-light text-espresso md:text-6xl">
            The Journal
          </h1>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-taupe">
            Styling notes, care rituals, and quiet thoughts on wearing gold well.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 py-12 md:grid-cols-3 md:px-8 md:py-16">
        {POSTS.map((post, i) => (
          <Reveal key={post.id} delay={i * 100}>
            <article className="group flex h-full flex-col">
              <div className="aspect-[4/3] w-full overflow-hidden bg-ivory">
                <span id={`journal-${post.id}-title`} className="sr-only">
                  {post.title} — {post.excerpt} 18k gold jewelry editorial photography
                </span>
                <StrkImage
                  imgId={`journal-${post.id}`}
                  query={`[journal-${post.id}-title]`}
                  ratio="4x3"
                  width={700}
                  alt={post.title}
                  className="h-full w-full"
                  imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col pt-5">
                <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-gold">
                  {post.date} · {post.readTime}
                </p>
                <h2 className="mt-2 font-serif text-2xl leading-snug text-espresso">
                  {post.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-taupe">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-espresso transition-colors group-hover:text-gold-deep">
                  Read More
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="border-t border-espresso/10">
        <div className="mx-auto max-w-7xl px-5 py-14 text-center md:px-8">
          <p className="font-serif text-2xl italic text-cocoa">
            “Jewelry is the quiet punctuation of an outfit.”
          </p>
          <Link
            to="/shop"
            className="mt-6 inline-block border border-espresso/30 px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.25em] text-espresso transition-colors hover:bg-espresso hover:text-cream"
          >
            Shop the Edit
          </Link>
        </div>
      </div>
    </div>
  );
}
