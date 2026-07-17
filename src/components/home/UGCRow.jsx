import { ugcItems } from '../../data/products';

export default function UGCRow() {
  return (
    <section className="py-16 bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
            Real Moments
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white">
            Styled by You
          </h2>
        </div>
      </div>

      {/* Scroll Container */}
      <div className="relative">
        <div className="flex gap-3 px-4 sm:px-6 lg:px-8 pb-4 overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {ugcItems.map((item, index) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-40 sm:w-48 md:w-56 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[9/16] rounded-lg overflow-hidden group">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-sm text-white italic">
                    "{item.caption}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-1 text-white/50">
          <span className="text-xs tracking-wider">Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
