const ugcItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1611590027211-b954fd027b51?w=400&q=80',
    caption: 'Golden hour with my Vivid Aura',
    handle: '@sarah_style',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&q=80',
    caption: 'Layer your Majestic Flora like this',
    handle: '@jessica_wears',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=80',
    caption: 'Huggies are my new obsession',
    handle: '@amanda_finds',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&q=80',
    caption: 'The Amber Lace — so delicate',
    handle: '@emma_adorns',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&q=80',
    caption: 'Gift-boxed perfection',
    handle: '@rachel_gifts',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1611590027211-b954fd027b51?w=400&q=80',
    caption: 'Stacking gold for everyday',
    handle: '@olivia_sparkle',
  },
];

export default function UGCRow() {
  return (
    <section className="py-16 md:py-24 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-warm-charcoal">
            As Seen On You
          </h2>
          <p className="mt-2 text-sm text-warm-gray">Tag @velmora to be featured.</p>
        </div>
      </div>

      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-36 md:w-48 relative group cursor-pointer"
            >
              <div className="aspect-[9/16] overflow-hidden bg-cream-dark">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <div>
                  <p className="text-white text-[10px] font-serif italic leading-tight">
                    &ldquo;{item.caption}&rdquo;
                  </p>
                  <p className="text-white/60 text-[8px] uppercase tracking-wider mt-1">
                    {item.handle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}