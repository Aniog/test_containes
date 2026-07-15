import { reels } from "@/data/products"
import { useStrkImages, StrkImage } from "@/components/ui/StrkImage"

export default function ReelStrip() {
  const ref = useStrkImages([])

  return (
    <section className="py-20 md:py-28 bg-sand">
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
          As Worn By You
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-ink">
          Styled in the Wild
        </h2>
      </div>

      <div
        ref={ref}
        className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar px-6 md:px-8 pb-4 snap-x snap-mandatory"
      >
        {reels.map((reel) => (
          <article
            key={reel.id}
            className="relative shrink-0 w-[260px] md:w-[300px] aspect-[9/16] snap-start overflow-hidden bg-ink group"
          >
            <StrkImage
              imgId={reel.imgId}
              query={`[${reel.titleId}] gold jewelry worn on model editorial`}
              ratio="9x16"
              width={400}
              alt={reel.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <p
              id={reel.titleId}
              className="absolute bottom-0 inset-x-0 p-5 font-serif text-cream text-lg italic leading-snug"
            >
              {reel.caption}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
