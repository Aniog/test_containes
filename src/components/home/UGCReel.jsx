import React from 'react';

const ugcItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=700&fit=crop',
    caption: 'Everyday elegance',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=700&fit=crop',
    caption: 'Golden hour glow',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=700&fit=crop',
    caption: 'Stack & style',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=700&fit=crop',
    caption: 'Treasured moments',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=700&fit=crop',
    caption: 'Quiet luxury',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=700&fit=crop&crop=faces',
    caption: 'Self-care ritual',
  },
];

export default function UGCReel() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 mb-12 sm:mb-16">
        <div className="text-center">
          <p className="text-xs tracking-[0.3em] uppercase font-sans text-velmora-gold mb-3">
            @VelmoraJewelry
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-velmora-black">
            Styled by You
          </h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto mt-6" />
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 sm:gap-4 px-4 pb-4" style={{ width: 'max-content' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative w-44 sm:w-52 aspect-[9/16] rounded-lg overflow-hidden flex-shrink-0 group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-serif text-sm sm:text-base text-white italic">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
