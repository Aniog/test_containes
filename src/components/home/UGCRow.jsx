import { ugcContent } from '../../data/products';

export default function UGCRow() {
  return (
    <section className="py-12 md:py-16 bg-cream overflow-hidden">
      {/* Section Header */}
      <div className="section-container mb-8">
        <div className="flex items-center gap-4">
          <p className="text-overline text-warm-gray">@velmorajewelry</p>
          <div className="flex-1 h-px bg-sand" />
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div className="flex gap-4 px-4 md:px-8 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory">
          {ugcContent.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-48 md:w-56 snap-start"
            >
              <div className="relative aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-white text-sm italic leading-relaxed">
                    "{item.caption}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fade Edges */}
        <div className="absolute top-0 left-0 bottom-4 w-8 bg-gradient-to-r from-cream to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-4 w-8 bg-gradient-to-l from-cream to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
