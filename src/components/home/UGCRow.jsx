import { ugcReels } from '../../data/products'

export default function UGCRow() {
  return (
    <section className="py-16 lg:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 mb-8">
        <span className="text-[10px] tracking-[0.2em] uppercase text-gold-600">
          As Seen On You
        </span>
        <h2 className="font-serif text-3xl lg:text-4xl text-midnight-900 mt-2 font-light">
          Worn in Real Life
        </h2>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-5 lg:px-8 pb-2 w-max">
          {ugcReels.map((reel) => (
            <div
              key={reel.id}
              className="flex-shrink-0 w-[180px] sm:w-[220px] lg:w-[260px]"
            >
              <div className="aspect-[9/16] rounded-sm overflow-hidden bg-midnight-100 relative group cursor-pointer">
                <img
                  src={reel.image}
                  alt={reel.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/70 via-transparent to-transparent" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-xs text-cream/90 font-serif italic leading-relaxed line-clamp-2">
                    &ldquo;{reel.caption}&rdquo;
                  </p>
                </div>

                {/* Avatar placeholder */}
                <div className="absolute top-3 left-3 w-7 h-7 rounded-full bg-cream/20 backdrop-blur-sm flex items-center justify-center border border-cream/30">
                  <span className="text-[10px] font-medium text-cream">
                    {reel.initial}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}