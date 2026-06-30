import { ugcReels } from "../../data/products"

export default function UGCSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.15em] text-warm-gold font-medium mb-3">
            As Seen On You
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-dark-charcoal font-light">
            Worn in Real Life
          </h2>
        </div>
      </div>

      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 pb-4" style={{ minWidth: "max-content" }}>
          {ugcReels.map((reel) => (
            <div
              key={reel.id}
              className="relative w-44 sm:w-52 aspect-[9/16] flex-shrink-0 overflow-hidden rounded-sm group cursor-pointer"
            >
              <img
                src={reel.image}
                alt={reel.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="w-6 h-6 rounded-full border-2 border-white/50 flex items-center justify-center mb-2">
                  <span className="text-white text-[10px] font-medium">▶</span>
                </div>
                <p className="text-white/90 text-xs leading-relaxed font-serif italic">
                  {reel.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}