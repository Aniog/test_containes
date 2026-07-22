import { ugcReels } from '@/data/products';

export default function UgcRow() {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <div className="text-center">
          <p className="text-xs tracking-[0.15em] uppercase text-[#C9A96E] mb-3 font-sans">As Seen On</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#F5F0EB] font-serif">Worn by You</h2>
          <div className="w-12 h-[1px] bg-[#C9A96E] mx-auto mt-4" />
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {ugcReels.map((reel) => (
            <div
              key={reel.id}
              className="relative w-[180px] md:w-[220px] aspect-[9/16] flex-shrink-0 bg-[#1A1A1A] rounded-sm overflow-hidden group cursor-pointer"
            >
              <img
                src={reel.image}
                alt={reel.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/80 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-3 right-3 text-xs text-[#F5F0EB] font-serif leading-snug">
                {reel.caption}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}