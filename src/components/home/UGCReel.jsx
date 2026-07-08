import React from 'react';
import { products } from '../../data/products';

export default function UGCReel() {
  const ugcItems = [
    { id: 1, image: products[0].images[0], caption: 'Everyday elegance ✨', author: '@maria_styling' },
    { id: 2, image: products[1].images[0], caption: 'Layered to perfection 💫', author: '@jewelry_lover' },
    { id: 3, image: products[2].images[0], caption: 'My new favorite set 💍', author: '@goldenaura' },
    { id: 4, image: products[3].images[0], caption: 'Subtle sparkle, major impact ✨', author: '@minimalchic' },
    { id: 5, image: products[4].images[0], caption: 'Gifted myself these beauties 🎁', author: '@selfcarefirst' },
    { id: 6, image: products[0].images[1], caption: 'Gold vibes only ✨', author: '@velmora_vibes' },
    { id: 7, image: products[1].images[1], caption: 'Perfect for gifting 🎀', author: '@giftguide' },
  ];

  return (
    <section className="bg-velmora-soft-beige py-20 lg:py-32 overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-12 px-6">
        <h2
          className="font-serif text-4xl md:text-5xl mb-4"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          #VelmoraStyle
        </h2>
        <p className="font-sans text-sm text-velmora-warm-gray tracking-wide">
          Tag us @VelmoraFineJewelry for a chance to be featured
        </p>
      </div>

      {/* Horizontal Scroll Reel */}
      <div className="relative">
        <div className="flex gap-4 px-6 md:px-12 lg:px-24 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-64 md:w-72 lg:w-80 snap-center"
            >
              {/* Vertical 9:16 Card */}
              <div className="relative aspect-[9/16] bg-velmora-cream overflow-hidden group cursor-pointer">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient Overlay with Caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="font-sans text-sm mb-2">{item.caption}</p>
                    <p className="font-sans text-xs text-white/70">{item.author}</p>
                  </div>
                </div>

                {/* Play Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                    <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.84A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.27l9.344-5.891a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-velmora-soft-beige to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-velmora-soft-beige to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
