import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';
import { PLACEHOLDER_IMG } from '@/data/products';
import SectionHeading from '@/components/ui/SectionHeading';

const posts = [
  {
    id: 'journal-care',
    title: 'The Art of Caring for Gold',
    excerpt: 'Small rituals that keep demi-fine pieces luminous for years.',
    date: 'Atelier Notes · 4 min',
  },
  {
    id: 'journal-stacking',
    title: 'How to Stack, Quietly',
    excerpt: 'A study in restraint — layering huggies and cuffs with intention.',
    date: 'Style Journal · 6 min',
  },
  {
    id: 'journal-gifting',
    title: 'Gifting, Without the Guesswork',
    excerpt: 'What her jewelry box says about what she will love next.',
    date: 'Gift Guide · 5 min',
  },
];

export default function JournalTeaser() {
  const containerRef = useRef(null);

  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), []);

  return (
    <section ref={containerRef} id="journal" className="border-t border-umber bg-onyx/30">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-28">
        <SectionHeading
          eyebrow="The Journal"
          title="Notes from the Atelier"
        />
        <div className="mt-12 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-3 md:gap-6">
          {posts.map((post, index) => (
            <article
              key={post.id}
              className="reveal group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[3/2] overflow-hidden border border-umber bg-noir">
                <img
                  data-strk-img-id={`${post.id}-j1`}
                  data-strk-img={`[${post.id}-excerpt] [${post.id}-title] editorial gold jewelry flat lay warm tones`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src={PLACEHOLDER_IMG}
                  alt={post.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-5 text-[10px] font-sans uppercase tracking-[0.22em] text-gold">
                {post.date}
              </p>
              <h3
                id={`${post.id}-title`}
                className="mt-2 font-serif text-xl font-medium text-ivory transition-colors duration-300 group-hover:text-goldlight"
              >
                {post.title}
              </h3>
              <p id={`${post.id}-excerpt`} className="mt-2 font-sans text-sm leading-relaxed text-sand">
                {post.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-[10px] font-sans font-medium uppercase tracking-[0.24em] text-gold">
                Read More
                <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
