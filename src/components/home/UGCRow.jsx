import React from 'react';
import { Heart } from 'lucide-react';

const UGC_ITEMS = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&q=80',
    caption: 'obsessed with my new huggies ✨',
    handle: '@sophia_wears',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    caption: 'the perfect everyday necklace',
    handle: '@emma_style',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=80',
    caption: 'gold on gold on gold 🥇',
    handle: '@julia.gold',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1598641795816-a84ac9eac40c?w=800&q=80',
    caption: 'gift for my bestie — she cried',
    handle: '@rachel.gifts',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80',
    caption: 'layering my flora nectar ✨',
    handle: '@lily_jewelry',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&q=80',
    caption: 'the royal set is EVERYTHING',
    handle: '@ava.lux',
  },
];

export default function UGCRow() {
  return (
    <section className="py-16 md:py-24 bg-near-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 md:mb-12">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-gold font-sans font-medium mb-3">
            As Seen On You
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white">
            Worn by Women Like You
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-6" />
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto pb-6 scrollbar-hide">
        <div className="flex gap-4 md:gap-6 px-4 sm:px-6 lg:px-8 w-max">
          {UGC_ITEMS.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-48 md:w-56 aspect-[9/16] overflow-hidden group cursor-pointer"
            >
              <img
                src={item.image}
                alt={`${item.handle} wearing Velmora`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-xs font-serif italic leading-snug line-clamp-2">
                  "{item.caption}"
                </p>
                <p className="text-gold-light text-[10px] uppercase tracking-wider mt-1.5 font-sans">
                  {item.handle}
                </p>
              </div>
              <button
                className="absolute top-3 right-3 text-white/60 hover:text-red-400 transition-colors"
                aria-label="Like"
              >
                <Heart className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-xs text-taupe-light uppercase tracking-wider">
          Tag <span className="text-gold">@velmorajewelry</span> to be featured
        </p>
      </div>
    </section>
  );
}