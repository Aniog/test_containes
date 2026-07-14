import { reels } from '@/data/products'
import { useStrkImages, getStrkImageUrl } from '@/lib/strk-image'

export default function ReelStrip() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-sand">
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-10">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">As Seen On You</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">#VelmoraWorn</h2>
        </div>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-4 md:gap-6 px-5 md:px-8 pb-2">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="relative shrink-0 w-[230px] md:w-[280px] aspect-[9/16] overflow-hidden bg-ink group"
            >
              <img
                src={getStrkImageUrl(reel.imgId)}
                alt={reel.caption}
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.captionId}] gold jewelry worn on ear neck editorial vertical`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <p
                id={reel.captionId}
                className="absolute bottom-5 left-5 right-5 font-serif text-cream text-lg italic leading-snug"
              >
                {reel.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
