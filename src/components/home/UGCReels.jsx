import { UGC_ITEMS } from '@/data/products'

export default function UGCReels() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <div className="text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 font-sans">
            As Seen On You
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-foreground">
            Worn by the Velmora Community
          </h2>
        </div>
      </div>

      <div className="overflow-x-auto scrollbar-hide pb-4">
        <div className="flex gap-4 md:gap-6 px-4 md:px-8" style={{ width: 'max-content' }}>
          {UGC_ITEMS.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-[200px] md:w-[260px] aspect-[9/16] overflow-hidden group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-sm font-serif italic leading-tight">
                  &ldquo;{item.caption}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}