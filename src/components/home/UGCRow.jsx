import { ugcReels } from '@/data/products'

export default function UGCRow() {
  return (
    <section className="py-16 md:py-24 bg-velvet-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-[11px] uppercase tracking-[0.2em] text-velvet-500 mb-3 font-sans">
            As Seen On
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-ink">
            Worn by You
          </h2>
          <div className="w-12 h-[1px] bg-velvet-300 mx-auto mt-4" />
        </div>
      </div>

      <div className="overflow-x-auto pb-4">
        <div className="flex gap-4 px-6 reel-scroll" style={{ width: 'max-content' }}>
          {ugcReels.map((reel) => (
            <div
              key={reel.id}
              className="flex-shrink-0 w-[180px] md:w-[220px] relative rounded-sm overflow-hidden group cursor-pointer"
            >
              <div className="aspect-[9/16] bg-velvet-200 overflow-hidden">
                <img
                  src={reel.image}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-white/90 text-xs font-serif italic leading-snug">
                {reel.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}