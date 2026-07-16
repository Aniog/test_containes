import { ugcItems } from '@/data/products'

export default function UGCReel() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-velmora-gold text-xs tracking-widest-2xl uppercase font-medium mb-3">
              @VelmoraJewelry
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-black">
              Styled by You
            </h2>
            <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
          </div>

          {/* Horizontal scroll */}
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x snap-mandatory">
            {ugcItems.map((item) => (
              <div
                key={item.id}
                className="relative flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] rounded-lg overflow-hidden snap-start group"
              >
                <div
                  className="absolute inset-0"
                  style={{ background: item.gradient }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-base md:text-lg text-white italic leading-snug">
                    {item.caption}
                  </p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-velmora-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
