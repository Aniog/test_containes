import React from 'react';

const ugcPosts = [
  {
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=700&fit=crop',
    caption: '"My everyday earrings — I never take them off"',
    author: '@sophia.m',
  },
  {
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=700&fit=crop',
    caption: '"The perfect gift for myself"',
    author: '@emma.j',
  },
  {
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=700&fit=crop',
    caption: '"Layered with my other Velmora pieces"',
    author: '@olivia.r',
  },
  {
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=700&fit=crop',
    caption: '"He proposed and I was wearing Velmora"',
    author: '@claire.w',
  },
  {
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=700&fit=crop',
    caption: '"The quality is unreal for the price"',
    author: '@mia.k',
  },
  {
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=400&h=700&fit=crop',
    caption: '"Obsessed with the huggies"',
    author: '@ava.l',
  },
];

export default function UGCRow() {
  return (
    <section className="py-16 md:py-20 bg-[var(--velmora-bg-alt)]">
      <div className="text-center mb-10 px-6">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--velmora-text-light)] mb-3">As Seen On You</p>
        <h2 className="serif-heading text-3xl md:text-4xl tracking-wide">The Velmora Edit</h2>
      </div>

      <div className="flex gap-4 overflow-x-auto px-6 pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: 'none' }}>
        {ugcPosts.map((post, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 w-48 md:w-56 aspect-[9/16] rounded-lg overflow-hidden snap-center group"
          >
            <img
              src={post.image}
              alt={post.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <p className="serif-heading text-sm italic leading-snug mb-2">{post.caption}</p>
              <p className="text-xs text-white/70">{post.author}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
