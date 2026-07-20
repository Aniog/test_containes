import { ugcItems } from '../../data/products';

export default function UGCSection() {
  return (
    <section className="py-16 bg-[var(--velmora-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-sm tracking-widest uppercase text-[var(--velmora-taupe)] mb-3 block">
            Styled by You
          </span>
          <h2 className="font-serif text-2xl md:text-3xl text-[var(--velmora-charcoal)]">
            @velmorajewelry
          </h2>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-6 px-4 sm:px-6 lg:px-8 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-44 sm:w-52 md:w-60 relative group"
            >
              {/* Image */}
              <div className="aspect-[9/16] rounded-lg overflow-hidden bg-[var(--velmora-gray-200)]">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Caption Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg flex items-end p-4">
                <p className="font-serif text-white text-sm italic">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Fade Edges */}
        <div className="absolute left-0 top-0 bottom-6 w-8 bg-gradient-to-r from-[var(--velmora-cream)] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-6 w-8 bg-gradient-to-l from-[var(--velmora-cream)] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
