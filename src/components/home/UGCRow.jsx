import { ugcItems } from '@/data/products'

export default function UGCRow() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-velmora-gold mb-3 font-sans">
            Wear It Your Way
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-dark">
            As Seen On You
          </h2>
          <div className="w-12 h-px bg-velmora-gold/40 mx-auto mt-4" />
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8 lg:px-12" style={{ width: 'max-content' }}>
          {ugcItems.map(item => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-[200px] md:w-[260px] aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif-alt text-sm text-white italic leading-snug">
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