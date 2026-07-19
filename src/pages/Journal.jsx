import React from 'react';

const posts = [
  {
    id: 1,
    title: 'How to Layer Necklaces Like a Stylist',
    date: 'July 10, 2026',
    excerpt: 'The art of the perfect neck stack — from chain lengths to metal mixing.',
  },
  {
    id: 2,
    title: 'Why Demi-Fine is the Future of Jewelry',
    date: 'June 22, 2026',
    excerpt: 'Exploring the rise of accessible luxury and what it means for conscious consumers.',
  },
  {
    id: 3,
    title: 'A Guide to Jewelry Care',
    date: 'June 5, 2026',
    excerpt: 'Simple habits to keep your gold-plated pieces shining for years.',
  },
];

export default function Journal() {
  return (
    <div className="pt-20 md:pt-24 pb-16 bg-velmora-bg min-h-screen">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-velmora-gold text-xs tracking-[0.35em] uppercase font-medium mb-3">
            Journal
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-light text-velmora-ink">
            Stories & Styling
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-velmora-cream flex flex-col cursor-pointer group"
            >
              <div className="aspect-[4/3] bg-velmora-sand/30" />
              <div className="p-5 md:p-6 flex flex-col flex-1">
                <p className="text-[11px] tracking-widest uppercase text-velmora-stone mb-2">
                  {post.date}
                </p>
                <h3 className="font-serif text-lg md:text-xl text-velmora-ink mb-2 group-hover:text-velmora-golddark transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-velmora-stone leading-relaxed flex-1">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
