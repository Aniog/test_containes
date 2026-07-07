import { ugcItems } from '@/data/products';

export function UGCStrip() {
  return (
    <section className="py-16 lg:py-20 bg-cream overflow-hidden">
      <div className="mb-10 text-center">
        <p className="font-sans text-xs font-medium uppercase tracking-extra-wide text-gold mb-3">
          Styled by You
        </p>
        <h2 className="font-serif text-3xl lg:text-4xl font-light text-charcoal">
          @velmorajewelry
        </h2>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 overflow-x-auto px-4 lg:px-8 pb-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-40 md:w-52 lg:w-64 relative overflow-hidden group cursor-pointer"
          >
            <div className="aspect-[9/16] overflow-hidden">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-richBlack/70 via-transparent to-transparent
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <p className="font-serif text-sm italic text-ivory leading-snug">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
