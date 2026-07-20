import { ugcReels } from '@/lib/products'

export default function UGCRow() {
  return (
    <section className="py-16 md:py-20 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A]">
            As Seen On You
          </h2>
          <p className="text-muted-text text-sm md:text-base mt-3">
            Tag <span className="text-gold font-medium">@velmorajewelry</span> to be featured
          </p>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 md:gap-4 px-4 sm:px-6 lg:px-8 pb-2" style={{ width: 'max-content' }}>
          {ugcReels.map((reel) => (
            <div
              key={reel.id}
              className="relative flex-shrink-0 w-[180px] sm:w-[220px] aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer"
            >
              <img
                src={reel.image}
                alt={reel.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <p className="text-white text-xs md:text-sm font-serif italic leading-relaxed">
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