const reelItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
    caption: 'Golden hour essentials',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80',
    caption: 'Stack it up',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80',
    caption: 'Everyday elegance',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80',
    caption: 'Ear candy',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80',
    caption: 'Date night ready',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&q=80',
    caption: 'Luminous layers',
  },
];

export default function UGCReel() {
  return (
    <section className="py-12 md:py-16 bg-surface overflow-hidden">
      <div className="container-wide mx-auto px-4 md:px-8 mb-8">
        <h2 className="heading-display text-center">Worn by You</h2>
        <p className="text-text-secondary text-sm text-center mt-2">
          Tag @velmora to be featured
        </p>
      </div>

      {/* Horizontal scroll reel */}
      <div className="flex gap-3 md:gap-4 px-4 md:px-8 overflow-x-auto scrollbar-hide pb-4">
        {reelItems.map(item => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] rounded-xl overflow-hidden group cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 font-serif text-white text-sm italic leading-snug">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
