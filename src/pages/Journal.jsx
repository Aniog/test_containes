import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowUpRight } from 'lucide-react';

const POSTS = [
  {
    id: 'j1',
    title: 'How we finish 18K gold plate (and why it matters)',
    excerpt:
      'A note from our founder on the difference between flash plating and the slow, hand-finished process that gives Velmora its depth.',
    date: 'May 2026',
    query:
      'artisan hands dipping jewelry in gold plating solution, close up, soft warm light, editorial documentary',
  },
  {
    id: 'j2',
    title: 'Five ways our community wears the Golden Sphere Huggies',
    excerpt:
      'A lookbook of the ways real women — from stylists to pediatricians — style our most-loved everyday hoop.',
    date: 'April 2026',
    query:
      'women wearing gold huggie hoop earrings, editorial portrait series, warm light, neutral background',
  },
  {
    id: 'j3',
    title: 'A guide to layering necklaces without tangles',
    excerpt:
      'Three lengths, two rules, and one cheat sheet from our design lead on building a stack that lasts all day.',
    date: 'April 2026',
    query:
      'layered gold necklaces on linen background, editorial flat lay, soft warm light, premium still life',
  },
];

function PostCard({ post, large = false }) {
  return (
    <article className="group block">
      <Link to={`/journal/${post.id}`} aria-label={post.title}>
        <div
          className={`relative w-full overflow-hidden bg-linen ${
            large ? 'aspect-[16/10]' : 'aspect-[4/3]'
          }`}
        >
          <div
            data-strk-img-id={`journal-${post.id}`}
            data-strk-img={post.query}
            data-strk-img-ratio={large ? '16x10' : '4x3'}
            data-strk-img-width={large ? '1400' : '800'}
            className="absolute inset-0 h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
        <div className="mt-5 flex items-baseline justify-between gap-4">
          <h3
            className={`font-serif font-light text-espresso group-hover:text-gold-deep ${
              large ? 'text-3xl sm:text-4xl' : 'text-2xl'
            }`}
          >
            {post.title}
          </h3>
          <ArrowUpRight
            className="h-4 w-4 flex-shrink-0 text-espresso opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            strokeWidth={1.25}
          />
        </div>
        <p className="mt-3 max-w-prose text-sm leading-relaxed text-mink">
          {post.excerpt}
        </p>
        <p className="mt-3 text-[10px] uppercase tracking-[0.24em] text-stone">
          {post.date}
        </p>
      </Link>
    </article>
  );
}

export default function Journal() {
  const containerRef = useRef(null);
  useEffect(() => {
    document.title = 'Journal · Velmora';
  }, []);
  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-bone pb-24 pt-28">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <div className="text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-gold-deep">
            Journal
          </p>
          <h1 className="mt-3 font-serif text-5xl font-light tracking-tight sm:text-6xl">
            Notes from the studio
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-mink">
            Occasional writing on craft, materials, and the small details that
            make a piece last.
          </p>
        </div>

        <div className="mt-16">
          <PostCard post={POSTS[0]} large />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 border-t border-sand pt-16 md:grid-cols-2 md:gap-14">
          {POSTS.slice(1).map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
