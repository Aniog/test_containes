import React from 'react';

const ugcItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=85',
    caption: 'Golden hour with my Vivid Aura cuff',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=85',
    caption: 'New favorite necklace for layering',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c8ab60908?w=400&q=85',
    caption: 'Huggies that literally go with everything',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=85',
    caption: 'The Royal Set arrived — obsessed',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1629224316810-9d6d07f79a5b?w=400&q=85',
    caption: 'Stacking my new gold pieces',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=85',
    caption: 'Ear game strong with Amber Lace',
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=400&q=85',
    caption: 'Gift wrapping for my bestie ✨',
  },
];

export default function UgcReel() {
  return (
    <section className="py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <h2 className="section-heading">As Seen On You</h2>
        <p className="section-subheading">Tag @velmorajewelry for a chance to be featured</p>
      </div>

      <div className="relative">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-4">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-44 md:w-56 relative rounded-lg overflow-hidden group cursor-pointer"
            >
              <div className="aspect-[9/16] bg-velvet-surface">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-velvet-deep/90 to-transparent">
                <p className="text-velvet-cream text-xs font-serif italic leading-tight">
                  &ldquo;{item.caption}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Gradient edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-velvet-deep to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-velvet-deep to-transparent pointer-events-none" />
      </div>
    </section>
  );
}