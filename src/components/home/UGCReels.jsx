import { ugcItems } from '@/data/testimonials';

export function UGCReels() {
  return (
    <section className="py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="section-title text-center text-2xl md:text-3xl">
          Seen on You
        </h2>
        <p className="text-charcoal-500 font-light text-center mt-2">
          @velmorajewelry
        </p>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-4">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-44 md:w-56 aspect-[9/16] rounded-xl overflow-hidden relative group"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-sm text-cream-50 italic text-balance">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient Fade on Edges */}
        <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-cream-50 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-cream-50 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
