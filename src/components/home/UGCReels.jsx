import { ugcItems } from '@/data/products';

export default function UGCReels() {
  return (
    <section className="py-20 sm:py-28 bg-brand-base overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-3">
          @velmorajewelry
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-brand-cream">
          Styled by You
        </h2>
      </div>

      <div className="flex gap-3 overflow-x-auto scroll-snap-x px-4 sm:px-6 lg:px-8 pb-4">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-[200px] sm:w-[240px] aspect-[9/16] overflow-hidden scroll-snap-start group"
          >
            <img
              src={item.image}
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-serif text-lg text-brand-cream leading-snug">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}