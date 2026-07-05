import { ugcImages } from '@/data/products';

export default function UGCStrip() {
  return (
    <section className="py-16 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-[#d4af37] text-xs tracking-[0.3em] uppercase">
            Styled by You
          </span>
          <h2 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] mt-3">
            @velmorajewelry
          </h2>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8" style={{ width: 'max-content' }}>
          {ugcImages.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-[180px] sm:w-[220px] aspect-[9/16] overflow-hidden group"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-white text-sm italic">
                  {item.caption}
                </p>
              </div>
              {/* Play icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
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
