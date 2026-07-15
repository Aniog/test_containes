import { ugcContent } from '@/data/products';

export function UGCRow() {
  return (
    <section className="py-12 lg:py-16 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 
              className="heading-serif text-2xl md:text-3xl mb-1"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Styled by You
            </h2>
            <p className="text-soft-gray text-sm">
              Tag us @velmorajewelry to be featured
            </p>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div className="flex gap-3 px-4 sm:px-6 lg:px-8 overflow-x-auto scrollbar-hide pb-4">
          {ugcContent.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-36 sm:w-44 md:w-52 aspect-[9/16] relative group cursor-pointer"
            >
              {/* Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={`Styled look by ${item.username}`}
                  className="w-full h-full object-cover transition-transform duration-500 ease-luxury group-hover:scale-105"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p 
                  className="heading-serif text-white text-sm leading-tight mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {item.caption}
                </p>
                <p className="text-white/70 text-xs">
                  {item.username}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Fade Edges */}
        <div className="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-ivory to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-ivory to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
