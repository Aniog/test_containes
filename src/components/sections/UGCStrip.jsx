import { ugcItems } from '@/data/products';

export function UGCStrip() {
  return (
    <section className="py-16 md:py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <p className="text-gold text-sm tracking-ultra-wide uppercase mb-3">Real Style</p>
          <h2 className="section-title">Seen on You</h2>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div className="overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4">
        <div className="flex gap-4" style={{ width: 'max-content' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative w-[200px] md:w-[240px] aspect-[9/16] rounded-sm overflow-hidden flex-shrink-0 group"
            >
              {/* Image */}
              <img
                src={item.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="font-serif text-ivory text-sm italic leading-relaxed mb-2">
                  "{item.caption}"
                </p>
                <p className="text-ivory/60 text-xs tracking-wide">
                  {item.handle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <p className="text-center text-sm text-taupe">
          <span className="hidden md:inline">Scroll</span>
          <span className="md:hidden">Swipe</span>
          {' '}to see more
        </p>
      </div>
    </section>
  );
}
