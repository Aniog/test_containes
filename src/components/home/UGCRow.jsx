import { ugcReelItems } from '../../data/products'

export default function UGCRow() {
  return (
    <section className="py-12 lg:py-16 bg-brand-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-xs tracking-[0.15em] uppercase text-gold-400/70 font-sans mb-3">
            As seen on
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-cream-50 tracking-wide">
            Worn by You
          </h2>
          <div className="w-12 h-px bg-gold-500/30 mx-auto mt-4" />
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto pb-4 px-6 lg:px-8 scrollbar-hide">
        <div className="flex gap-4 w-max">
          {ugcReelItems.map((item) => (
            <div
              key={item.id}
              className="relative w-40 md:w-52 aspect-[9/16] flex-shrink-0 rounded-sm overflow-hidden group cursor-pointer"
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-xs text-cream-50/90 font-serif italic leading-relaxed">
                "{item.caption}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}