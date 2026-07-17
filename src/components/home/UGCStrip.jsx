import { ugcItems } from '@/data/products';

export default function UGCStrip() {
  return (
    <section className="py-12 bg-ivory overflow-hidden">
      <div className="container-custom mb-8">
        <p className="text-sm tracking-extra-wide uppercase text-gold text-center mb-2">
          @velmorajewelry
        </p>
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-charcoal text-center">
          Real Moments, Real Jewelry
        </h2>
      </div>

      {/* Horizontal scroll container */}
      <div className="relative">
        <div className="flex gap-3 px-4 md:px-6 overflow-x-auto scrollbar-hide pb-4">
          {ugcItems.map((item) => (
            <div 
              key={item.id}
              className="flex-shrink-0 w-40 md:w-48 relative group cursor-pointer"
            >
              {/* Vertical Card */}
              <div className="relative aspect-[9/16] overflow-hidden bg-charcoal">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-sm text-white/90 italic leading-snug">
                    "{item.caption}"
                  </p>
                </div>

                {/* Play indicator */}
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-3 h-3 text-white ml-0.5" viewBox="0 0 12 12" fill="currentColor">
                      <path d="M3 2L10 6L3 10V2Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-ivory to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-ivory to-transparent pointer-events-none" />
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
