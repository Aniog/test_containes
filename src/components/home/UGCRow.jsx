import { ugcItems } from '@/data/products';

export default function UGCRow() {
  return (
    <section className="py-12 md:py-16 bg-charcoal-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="label text-gold-400 text-center mb-2">@velmora</p>
        <h2 className="heading-3 text-cream-50 text-center font-light">
          Real women, real jewelry
        </h2>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-4">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-40 sm:w-48 md:w-56 relative group cursor-pointer"
          >
            {/* Vertical image card */}
            <div className="aspect-[9/16] overflow-hidden bg-charcoal-800">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Caption on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-serif text-sm italic text-cream-100 leading-snug mb-1">
                  "{item.caption}"
                </p>
                <span className="text-[10px] font-sans text-gold-400 uppercase tracking-ultra-wide">
                  {item.handle}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
