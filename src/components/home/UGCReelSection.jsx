import { ugcPosts } from '../../data/products';

const UGCReelSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-12">
          <span className="font-sans text-xs font-medium tracking-ultra-wide uppercase text-gold-600">
            @velmorajewelry
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal-900">
            Styled by You
          </h2>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div className="flex gap-4 px-4 sm:px-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory">
          {ugcPosts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-40 sm:w-48 md:w-56 lg:w-64 snap-start"
            >
              <div className="relative aspect-[9/16] overflow-hidden group">
                <img
                  src={post.image}
                  alt={`Styled by ${post.author}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="font-serif text-sm text-cream-50 italic leading-relaxed">
                    "{post.caption}"
                  </p>
                  <span className="mt-2 block font-sans text-xs text-cream-100/70">
                    @{post.author}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient fade edges on mobile */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-cream-50 to-transparent pointer-events-none lg:hidden" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-cream-50 to-transparent pointer-events-none lg:hidden" />
      </div>
    </section>
  );
};

export default UGCReelSection;
