import StrkImage from "@/components/ui/StrkImage"
import { reels } from "@/data/products"
import { useStrkImages } from "@/hooks/useStrkImages"

export default function ReelStrip() {
  const ref = useStrkImages([])

  return (
    <section className="py-20 md:py-28 bg-sand/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-10">
        <p className="text-[11px] uppercase tracking-[0.25em] text-gold mb-3">
          #VelmoraOnYou
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-light">Worn & Adored</h2>
      </div>

      <div
        ref={ref}
        className="no-scrollbar overflow-x-auto px-6 md:px-10"
      >
        <div className="flex gap-4 md:gap-6 pb-4">
          {reels.map((reel) => (
            <article
              key={reel.id}
              className="relative shrink-0 w-[60vw] sm:w-[44vw] md:w-[260px] aspect-[9/16] overflow-hidden bg-ink group"
            >
              <StrkImage
                imgId={reel.imgId}
                query={`[${reel.titleId}]`}
                ratio="9x16"
                width={520}
                alt={reel.caption}
                className="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <p
                id={reel.titleId}
                className="absolute bottom-5 left-5 right-5 font-serif text-lg md:text-xl text-cream italic leading-snug"
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
