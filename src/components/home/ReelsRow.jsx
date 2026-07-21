import { StrkImage } from "@/components/ui/StrkImage"
import { reels } from "@/data/products"
import { useImageLoader } from "@/hooks/useImageLoader"

export default function ReelsRow() {
  const ref = useImageLoader([])
  return (
    <section ref={ref} className="py-20 md:py-28 bg-stone">
      <div className="max-w-8xl mx-auto px-5 md:px-8">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <p className="text-xs uppercase tracking-widest2 text-gold mb-3">
              As Seen On You
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-espresso">
              Worn & Loved
            </h2>
          </div>
          <p className="hidden md:block text-sm text-muted max-w-xs text-right">
            Tag <span className="text-gold">@velmora</span> to be featured.
          </p>
        </div>
      </div>

      {/* Horizontal scroll strip, full-bleed */}
      <div className="no-scrollbar overflow-x-auto pb-4">
        <div className="flex gap-4 md:gap-6 px-5 md:px-8 max-w-8xl mx-auto">
          {reels.map((reel) => (
            <article
              key={reel.id}
              className="relative shrink-0 w-[68vw] sm:w-[300px] aspect-[9/16] overflow-hidden bg-espresso group"
            >
              <StrkImage
                imgId={reel.imgId}
                query={`[${reel.titleId}] gold jewelry worn on model editorial`}
                ratio="9x16"
                width={600}
                alt={reel.caption}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
              <p
                id={reel.titleId}
                className="absolute bottom-5 left-5 right-5 font-serif text-cream text-lg italic leading-snug"
              >
                {reel.caption}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
