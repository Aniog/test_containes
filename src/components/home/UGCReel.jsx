import React from 'react';

const ugcItems = [
  {
    id: 'ugc-1',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=600&fit=crop',
    caption: 'Everyday golden glow',
  },
  {
    id: 'ugc-2',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=600&fit=crop',
    caption: 'Stacked & styled',
  },
  {
    id: 'ugc-3',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=600&fit=crop',
    caption: 'Effortless elegance',
  },
  {
    id: 'ugc-4',
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=600&fit=crop',
    caption: 'Golden hour moments',
  },
  {
    id: 'ugc-5',
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=400&h=600&fit=crop',
    caption: 'Gift yourself',
  },
  {
    id: 'ugc-6',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=600&fit=crop',
    caption: 'The finishing touch',
  },
];

export default function UGCReel() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="text-center mb-10 section-padding">
        <p className="font-sans text-caption uppercase tracking-widest-2xl text-gold mb-3">
          @VelmoraJewelry
        </p>
        <h2 className="font-serif text-heading-xl text-velmora-dark">
          Styled by You
        </h2>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-4 px-5 md:px-8 pb-2" style={{ paddingLeft: 'max(1.25rem, calc((100vw - 1280px) / 2 + 2rem))' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-serif text-sm md:text-base text-white/90 italic leading-snug">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
