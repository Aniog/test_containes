import { ugcItems } from '@/data/products';

export default function UGCRow() {
  return (
    <section className="py-12 sm:py-16 bg-charcoal-950">
      <div className="px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-[11px] font-sans font-medium tracking-[0.35em] uppercase text-gold-400 mb-2">
          @velmorajewelry
        </p>
        <h2 className="font-serif text-2xl sm:text-3xl text-cream-50 tracking-wide">
          Styled by You
        </h2>
      </div>

      <div className="flex gap-3 sm:gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 snap-x snap-mandatory scrollbar-hide">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-[200px] sm:w-[240px] aspect-[9/16] snap-start overflow-hidden group"
          >
            <img
              src={item.image}
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-charcoal-950/20 group-hover:bg-charcoal-950/10 transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-charcoal-950/40 backdrop-blur-sm">
              <p className="font-serif text-sm text-cream-50 italic tracking-wide">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
