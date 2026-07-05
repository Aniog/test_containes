import { ugcItems } from '../../data/products';

export function UGCRow() {
  return (
    <section className="py-16 md:py-20 bg-warmWhite overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-block font-sans text-xs tracking-extra-wide uppercase text-gold-600 mb-3">
            Community Love
          </span>
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal">
            Styled by You
          </h2>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-4 snap-x snap-mandatory">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-36 sm:w-44 md:w-52 snap-start"
            >
              <div className="relative aspect-[9/16] rounded-lg overflow-hidden group">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="font-serif text-sm text-warmWhite italic">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fade edges on desktop */}
        <div className="hidden lg:block absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-r from-warmWhite to-transparent pointer-events-none" />
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-warmWhite to-transparent pointer-events-none" />
      </div>

      {/* Instagram CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <p className="text-center text-sm text-charcoal/50">
          Share your look with <span className="text-gold-600">#VelmoraJewels</span>
        </p>
      </div>
    </section>
  );
}
