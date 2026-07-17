import { ugcItems } from '../../data/products';

export default function UGCReel() {
  return (
    <section className="py-16 md:py-20 bg-warm-white overflow-hidden">
      <div className="container-site mb-10">
        <div className="text-center">
          <span className="text-[11px] uppercase tracking-[0.25em] text-stone font-medium">As Seen On</span>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mt-3 font-light">Worn by You</h2>
          <div className="w-12 h-[1px] bg-gold/40 mx-auto mt-4" />
        </div>
      </div>

      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-warm-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-warm-white to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 overflow-x-auto px-8 pb-4 scrollbar-hide snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-48 md:w-56 snap-start group cursor-pointer"
            >
              {/* 9:16 card */}
              <div className="aspect-[9/16] overflow-hidden bg-warm-white relative">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-xs font-serif italic leading-relaxed line-clamp-2">
                    "{item.caption}"
                  </p>
                  <p className="text-white/60 text-[10px] uppercase tracking-widest mt-1.5">
                    {item.handle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-10">
        <a
          href="#"
          className="text-xs uppercase tracking-widest text-charcoal hover:text-gold transition-colors border-b border-charcoal/20 hover:border-gold pb-0.5"
        >
          Follow @velmora
        </a>
      </div>
    </section>
  );
}