import { ugcItems } from '@/data/products';

const UgcRow = () => {
  return (
    <section className="bg-white border-y border-brand-border">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-wide text-brand-ink">As Worn By You</h2>
          <a href="#" className="text-xs font-semibold tracking-widest uppercase text-brand-accent hover:text-brand-accentDark transition-colors">
            Follow @velmora
          </a>
        </div>
        <div className="mt-6 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
          {ugcItems.map(item => (
            <div key={item.id} className="relative h-72 w-44 flex-shrink-0 snap-start overflow-hidden rounded-2xl bg-brand-warm">
              <img
                src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80"
                alt={item.caption}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-3">
                <p className="text-[11px] font-medium text-white/90">{item.handle}</p>
                <p className="text-[11px] text-white/70">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UgcRow;
