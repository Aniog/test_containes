import { ugcItems } from '../../data/products'

export function UGCRow() {
  return (
    <section className="py-12 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <p className="text-gold-600 text-sm tracking-extra-wide uppercase mb-2">
            Styled by You
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal-900">
            @velmora on Instagram
          </h2>
        </div>
      </div>

      {/* Scrolling Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-cream-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-cream-50 to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 overflow-x-auto scrollbar-hide pb-4">
          {[...ugcItems, ...ugcItems].map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 w-40 sm:w-48 md:w-56 aspect-[9/16] relative rounded-lg overflow-hidden group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-serif text-cream-50 text-sm italic mb-1">
                  "{item.caption}"
                </p>
                <p className="text-cream-100/70 text-xs">
                  {item.username}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View All Link */}
      <div className="text-center mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-charcoal-900 font-medium text-sm tracking-wide hover:text-gold-600 transition-colors"
        >
          <span>Follow us @velmora</span>
          <span>→</span>
        </a>
      </div>
    </section>
  )
}
