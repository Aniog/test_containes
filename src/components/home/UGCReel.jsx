import { ugcItems } from '@/data/products';

export default function UGCReel() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="px-5 md:px-8 max-w-7xl mx-auto mb-10">
        <p className="text-xs tracking-[0.2em] uppercase text-velmora-muted mb-3">Community</p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-charcoal">Styled by You</h2>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 md:gap-4 px-5 md:px-8 pb-2" style={{ minWidth: 'max-content' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative w-40 md:w-52 aspect-[9/16] rounded-sm overflow-hidden flex-shrink-0 group bg-gradient-to-br from-[#C9BCAA] to-[#A89680]"
            >
              <img
                data-strk-img-id={`ugc-${item.id}`}
                data-strk-img={`gold jewelry ear neck closeup elegant warm`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-serif text-white text-sm italic leading-snug">{item.caption}</p>
                <p className="text-white/60 text-[10px] mt-1 tracking-wide">{item.handle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
