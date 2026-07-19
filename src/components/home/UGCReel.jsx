import React from 'react';

const ugcItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1626784215013-13322cb0e471?w=400&h=700&fit=crop',
    caption: 'Golden hour with my Golden Sphere Huggies',
    handle: '@sophia.elena',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1603561596112-0a132b757442?w=400&h=700&fit=crop',
    caption: 'The Vivid Aura cuff is everything',
    handle: '@claire.rstyle',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=700&fit=crop',
    caption: 'Stacked and styled with Velmora',
    handle: '@maria.jewels',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?w=400&h=700&fit=crop',
    caption: 'Necklace of the season',
    handle: '@emma.kate',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=700&fit=crop',
    caption: 'Date night in Amber Lace',
    handle: '@julia.rose',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1705326454933-9685fc6888e1?w=400&h=700&fit=crop',
    caption: 'Gift from my bestie — Royal Heirloom',
    handle: '@nicole.advent',
  },
];

export default function UGCReel() {
  return (
    <section className="py-16 md:py-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-10">
          <p className="text-brand-gold text-xs tracking-[0.2em] uppercase font-sans font-medium mb-3">
            As Seen On
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-dark font-light">
            Worn by You
          </h2>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-4" />
        </div>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-4 px-4 md:px-8 lg:px-16 pb-2" style={{ width: 'max-content' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative w-[200px] md:w-[260px] flex-shrink-0 rounded-sm overflow-hidden group cursor-pointer"
              style={{ aspectRatio: '9/16' }}
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-xs md:text-sm font-serif italic leading-relaxed">
                  "{item.caption}"
                </p>
                <p className="text-brand-gold text-xs mt-1 font-sans">{item.handle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}