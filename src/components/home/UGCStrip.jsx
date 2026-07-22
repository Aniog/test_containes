import { ugcItems } from '../../data/products';

export default function UGCStrip() {
  return (
    <section className="py-16 lg:py-20 bg-charcoal-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <span className="text-xs tracking-extra-wide uppercase text-gold-400 mb-2 block text-center">
          Styled By You
        </span>
        <h2 className="section-title text-ivory-100 text-center">
          @velmorajewelry
        </h2>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory">
          {ugcItems.map((item, index) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-56 md:w-64 snap-start animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-[9/16] overflow-hidden group">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-warmblack/80 via-warmblack/20 to-transparent" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-serif italic text-ivory-100 text-lg mb-1">
                    "{item.caption}"
                  </p>
                  <p className="text-xs text-ivory-300 tracking-wide">
                    {item.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-charcoal-900 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-charcoal-900 to-transparent pointer-events-none" />
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
