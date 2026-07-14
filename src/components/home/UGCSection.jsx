import React from 'react';

const ugcItems = [
  {
    image: 'https://picsum.photos/seed/velmora-ugc-1/400/700',
    caption: 'Morning light, gold vibes',
  },
  {
    image: 'https://images.unsplash.com/photo-1611107683227-e9060eccd846?w=400&q=80',
    caption: 'Huggies for everyday',
  },
  {
    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=400&q=80',
    caption: 'Stacking my favorites',
  },
  {
    image: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=400&q=80',
    caption: 'Date night glam',
  },
  {
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80',
    caption: 'Gift for myself',
  },
  {
    image: 'https://picsum.photos/seed/velmora-ugc-6/400/700',
    caption: 'Gold on gold',
  },
];

export default function UGCSection() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="section-title">As Seen On You</h2>
          <p className="mt-2 text-warm-gray text-sm font-sans">
            Tag <span className="text-gold font-medium">@velmorajewelry</span> to be featured
          </p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto pb-4 hide-scrollbar">
        <div className="flex gap-4 px-4 md:px-6 min-w-max">
          {ugcItems.map((item, index) => (
            <div
              key={index}
              className="relative w-44 md:w-56 aspect-[9/16] rounded-lg overflow-hidden flex-shrink-0 group cursor-pointer"
            >
              <img
                src={item.image}
                alt={`UGC ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-white/90 font-serif text-sm italic">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}