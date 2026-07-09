import { ugcItems } from '@/data/products';

export default function UGCRow() {
  return (
    <section className="py-16 md:py-20 bg-brand-cream overflow-hidden">
      <div className="mb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="heading-serif text-3xl md:text-4xl text-brand-charcoal font-light mb-3">
            As Seen On You
          </h2>
          <div className="w-12 h-0.5 bg-brand-gold mx-auto" />
          <p className="font-sans text-sm text-brand-taupe mt-3 max-w-md mx-auto">
            Tag <span className="text-brand-gold font-medium">@velmora</span> to be featured
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-48 md:w-56 snap-start group cursor-pointer"
            >
              <div className="aspect-[9/16] bg-brand-cream-dark overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="font-serif text-white text-sm italic leading-tight">
                    &ldquo;{item.caption}&rdquo;
                  </p>
                  <p className="font-sans text-white/70 text-xs mt-1">{item.username}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}