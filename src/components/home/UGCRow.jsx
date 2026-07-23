const ugcItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80',
    caption: 'Obsessed with my new gold hoops',
    handle: '@sophia_style',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80',
    caption: 'Elegance in every detail',
    handle: '@elena_editorial',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80',
    caption: 'The Flora Nectar necklace is everything',
    handle: '@claire_adorns',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=400&q=80',
    caption: 'Stacking my Velmora pieces',
    handle: '@maya_jewelbox',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1611597617014-9970403724e9?w=400&q=80',
    caption: 'Gift-ready and gorgeous',
    handle: '@laura_gifted',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1508766206392-8bd5cf550d1c?w=400&q=80',
    caption: 'Everyday luxury that lasts',
    handle: '@isabellethes',
  },
];

export default function UGCRow() {
  return (
    <section className="py-16 md:py-20 bg-warm-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-espresso">As Seen On You</h2>
            <p className="text-taupe text-sm mt-2 font-sans">
              Tag @velmorajewelry to be featured
            </p>
          </div>
          <span className="hidden md:inline text-xs text-taupe tracking-wider uppercase font-sans">
            Scroll &rarr;
          </span>
        </div>
      </div>

      <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
        <div className="flex gap-4 md:gap-6 w-max">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative w-[180px] md:w-[220px] aspect-[9/16] flex-shrink-0 overflow-hidden group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.handle}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-xs font-serif italic leading-snug">
                  &ldquo;{item.caption}&rdquo;
                </p>
                <p className="text-white/60 text-[10px] uppercase tracking-wider mt-1 font-sans">
                  {item.handle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}