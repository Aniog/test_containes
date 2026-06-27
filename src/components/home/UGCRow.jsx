import { ugcContent } from '../../data/products';

export default function UGCRow() {
  return (
    <section className="py-12 md:py-16 bg-ivory overflow-hidden">
      <div className="container-wide mb-8">
        <div className="text-center">
          <span className="text-xs tracking-[0.2em] uppercase text-gold mb-2 block">
            Community
          </span>
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal">
            As Seen On You
          </h2>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 px-4 md:px-0 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div className="flex gap-3 md:gap-4" style={{ minWidth: 'max-content' }}>
          {ugcContent.map((item) => (
            <div
              key={item.id}
              className="relative w-40 md:w-52 flex-shrink-0 aspect-[9/16] overflow-hidden snap-center group"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-sm text-white italic">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
