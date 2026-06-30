import { UGC_ITEMS } from "../../data/products"

export default function UGCRow() {
  return (
    <section className="py-16 lg:py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-brand-gold text-xs font-sans uppercase tracking-[0.2em] mb-3">
            As Seen On You
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-dark font-light tracking-[0.05em]">
            Wear It Your Way
          </h2>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-4" />
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div className="overflow-x-auto pb-4 -mx-4 sm:mx-0">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 w-max">
          {UGC_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className="relative w-48 sm:w-56 aspect-[9/16] bg-brand-warm rounded-sm overflow-hidden flex-shrink-0 group cursor-pointer"
            >
              {/* Placeholder image — warm gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/20 via-brand-warm to-brand-dark/40" />

              {/* Decorative jewelry silhouette */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border-2 border-brand-gold/30" />
                <div className="absolute top-1/4 w-16 h-8 border-2 border-brand-gold/20 rounded-full" />
              </div>

              {/* Caption overlay */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-brand-white font-serif text-sm leading-snug italic">
                  "{item.caption}"
                </p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}