import { ugcItems } from "@/data/products";

const UgcReelRow = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between">
        <div>
          <p className="eyebrow">From the community</p>
          <h2 className="section-heading mt-2">Worn by you</h2>
        </div>
      </div>

      <div className="mt-8 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative h-[420px] w-[220px] flex-shrink-0 snap-start overflow-hidden rounded-sm bg-[var(--color-surface-alt)]"
          >
            <img
              src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&q=80"
              alt={item.caption}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4">
              <p className="text-xs font-medium text-white/90">{item.handle}</p>
              <p className="mt-1 font-serif text-sm italic text-white/80">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UgcReelRow;
