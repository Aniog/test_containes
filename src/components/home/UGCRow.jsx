import React from 'react';

const ugcItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&q=80',
    caption: 'Golden hour with my Vivid Aura cuff',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1603975217912-64c3a75d8676?w=400&q=80',
    caption: 'The Flora Nectar necklace is everything',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=400&q=80',
    caption: 'Huggies that never leave my ears',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c106ab01a?w=400&q=80',
    caption: 'Amber Lace — my new obsession',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1515562141589-67f0d753c769?w=400&q=80',
    caption: 'Royal Heirloom set for the bride',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1611597617014-79f6e5f7e557?w=400&q=80',
    caption: 'Stacking gold for everyday luxury',
  },
];

export default function UGCRow() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <p className="text-gold text-xs uppercase tracking-superwide font-medium mb-3">
            Wear It Your Way
          </p>
          <h2 className="font-cormorant text-3xl sm:text-4xl uppercase tracking-wider text-charcoal">
            As Seen on You
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-48 sm:w-56 aspect-[9/16] overflow-hidden group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-cormorant text-sm text-white italic leading-snug">
                  "{item.caption}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hide scrollbar style */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}