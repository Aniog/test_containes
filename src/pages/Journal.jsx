import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import JewelryImage from '@/components/ui/JewelryImage';
import { useStrkImages } from '@/lib/useStrkImages';

const POSTS = [
  {
    id: 'j1',
    title: 'How to layer huggies and a cuff for an effortless ear',
    excerpt:
      'A simple three-piece formula that works on any ear, for any occasion.',
    cat: 'Styling',
    imgId: 'velmora-journal-1-7a4c2d',
    imgQuery: 'gold ear stack styling close up natural light editorial',
    kind: 'huggie',
  },
  {
    id: 'j2',
    title: 'Caring for your gold-plated jewelry, the right way',
    excerpt:
      'A few simple habits that will keep every piece looking new for years.',
    cat: 'Care',
    imgId: 'velmora-journal-2-3e9b4f',
    imgQuery: 'gold jewelry on linen cloth soft daylight still life detail',
    kind: 'set',
  },
  {
    id: 'j3',
    title: 'Inside the atelier — a day with the Velmora team',
    excerpt: 'Behind the workbench: how each piece is finished, by hand.',
    cat: 'Atelier',
    imgId: 'velmora-journal-3-2f6d8a',
    imgQuery: 'jewelry artisan workbench gold tools warm light',
    kind: 'earring',
  },
];

export default function Journal() {
  const ref = useRef(null);
  useStrkImages(ref, []);

  return (
    <Layout>
      <div ref={ref} className="bg-porcelain">
        <section className="py-16 md:py-24 border-b border-hairline">
          <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
            <p className="text-[11px] uppercase tracking-[0.3em] text-mute font-sans">
              Journal
            </p>
            <h1 className="mt-3 font-serif font-light text-espresso text-4xl md:text-6xl lg:text-7xl">
              Field notes from the atelier
            </h1>
            <p className="mt-6 text-base text-mute max-w-xl mx-auto font-sans leading-relaxed">
              Styling guides, care notes, and the occasional letter from the
              studio.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {POSTS.map((post) => (
              <Link
                to="/journal"
                key={post.id}
                className="group block"
              >
                <div className="aspect-[4/5] overflow-hidden bg-espresso">
                  <JewelryImage
                    imgId={post.imgId}
                    query={`[journal-${post.id}-title]`}
                    fallbackQuery={post.imgQuery}
                    ratio="4x3"
                    width={900}
                    kind={post.kind}
                    theme="warm"
                    alt={post.title}
                    className="w-full h-full transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-sans">
                    {post.cat}
                  </p>
                  <h3
                    id={`journal-${post.id}-title`}
                    className="mt-3 font-serif text-2xl md:text-3xl text-espresso group-hover:text-gold transition-colors"
                  >
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm text-mute font-sans leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
