const ugcItems = [
  {
    image: 'https://placehold.co/400x711/1a1512/d4a853?text=Elegance',
    caption: 'Everyday elegance',
  },
  {
    image: 'https://placehold.co/400x711/1a1512/d4a853?text=Stacked',
    caption: 'Stacked & styled',
  },
  {
    image: 'https://placehold.co/400x711/1a1512/d4a853?text=Golden+Hour',
    caption: 'Golden hour glow',
  },
  {
    image: 'https://placehold.co/400x711/1a1512/d4a853?text=Statement',
    caption: 'Statement pieces',
  },
  {
    image: 'https://placehold.co/400x711/1a1512/d4a853?text=Timeless',
    caption: 'Timeless charm',
  },
  {
    image: 'https://placehold.co/400x711/1a1512/d4a853?text=Layers',
    caption: 'Effortless layers',
  },
];

export default function UGCReel() {
  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <div className="text-center mb-12 px-6">
        <p className="text-xs tracking-[0.2em] uppercase text-gold-400 mb-3">
          As Seen On You
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-warm-50 tracking-wide">
          Styled by Our Community
        </h2>
      </div>

      <div className="flex gap-4 overflow-x-auto px-6 md:px-10 pb-4 snap-x snap-mandatory scrollbar-hide">
        {ugcItems.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[180px] md:w-[240px] snap-center group cursor-pointer"
          >
            <div className="relative aspect-[9/16] rounded-sm overflow-hidden bg-velvet-800">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velvet-950/80 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 font-serif text-sm italic text-warm-200">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
