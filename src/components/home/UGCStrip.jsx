import { ugcContent } from '@/data/products';

export default function UGCStrip() {
  return (
    <section className="py-12 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <span className="text-gold text-sm uppercase tracking-ultrawide mb-3 block">
            @Velmora
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-warm-black">
            Styled by You
          </h2>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div 
          className="flex gap-4 px-4 sm:px-6 lg:px-8 overflow-x-auto scrollbar-hide pb-4"
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {ugcContent.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-48 sm:w-56 md:w-64 aspect-[9/16] relative group cursor-pointer"
              style={{ scrollSnapAlign: 'start' }}
            >
              <img
                src={item.image}
                alt={item.caption}
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-warm-black/70 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="font-serif text-white text-sm italic">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-4 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
