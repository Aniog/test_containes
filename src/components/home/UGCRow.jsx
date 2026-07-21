const ugcItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=711&fit=crop',
    caption: 'Everyday elegance',
    handle: '@sarah.m'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop',
    caption: 'Golden hour glow',
    handle: '@emma.l'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=711&fit=crop',
    caption: 'Dress to impress',
    handle: '@maya.k'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=400&h=711&fit=crop',
    caption: 'Minimalist luxury',
    handle: '@zoe.r'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=711&fit=crop',
    caption: 'Statement piece',
    handle: '@alexis.n'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=711&fit=crop',
    caption: 'Gift for myself',
    handle: '@chloe.w'
  }
];

const UGCRow = () => {
  return (
    <section className="py-12 bg-[var(--color-bg-secondary)]">
      <div className="container mx-auto px-4 md:px-6 mb-8">
        <div className="text-center">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--color-gold)] mb-2 block">
            Styled by You
          </span>
          <h2 className="font-serif text-2xl md:text-3xl text-[var(--color-text-primary)]">
            @velmorajewelry
          </h2>
        </div>
      </div>
      
      {/* Horizontal Scroll Container */}
      <div className="overflow-x-auto scrollbar-hide pb-4">
        <div className="flex gap-4 px-4 md:px-6" style={{ width: 'max-content' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-40 md:w-52 group cursor-pointer"
            >
              {/* Vertical Image Card */}
              <div className="relative aspect-[9/16] overflow-hidden bg-[var(--color-surface)]">
                <img
                  src={item.image}
                  alt={`Customer photo from ${item.handle}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Caption on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-serif text-sm italic text-[var(--color-text-primary)] mb-1">
                    "{item.caption}"
                  </p>
                  <span className="text-xs text-[var(--color-gold-light)]">
                    {item.handle}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCRow;
