import React from 'react';

const REELS = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=700&fit=crop',
    caption: 'Everyday gold',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=700&fit=crop',
    caption: 'Layered luxe',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=700&fit=crop',
    caption: 'Golden hour',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=700&fit=crop',
    caption: 'Subtle shine',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=700&fit=crop',
    caption: 'Gift ready',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=700&fit=crop',
    caption: 'Vintage vibes',
  },
];

export default function UGCReels() {
  return (
    <section className="py-16 md:py-24 bg-cream overflow-hidden">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-text-secondary mb-2">
              @velmorajewelry
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-text-primary">
              As Worn By You
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block font-sans text-xs uppercase tracking-widest text-text-secondary hover:text-accent-gold transition-colors"
          >
            View Gallery
          </a>
        </div>
      </div>

      <div className="flex gap-3 md:gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-2">
        {REELS.map(reel => (
          <div
            key={reel.id}
            className="flex-shrink-0 w-[160px] md:w-[200px] aspect-[9/16] relative rounded-sm overflow-hidden group cursor-pointer"
          >
            <img
              src={reel.image}
              alt={reel.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep/60 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 font-serif text-sm text-text-on-dark italic">
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
