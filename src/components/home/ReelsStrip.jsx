import { StrkImage, useStrkImages } from "@/components/ui/StrkImage"
import { reels } from "@/data/products"

export default function ReelsStrip() {
  const ref = useStrkImages([])
  return (
    <section ref={ref} className="bg-cream-100 py-20 md:py-28">
      <div className="container-editorial mb-10 flex items-end justify-between">
        <div>
          <p className="eyebrow">As Worn</p>
          <h2 className="heading-serif mt-3 text-4xl md:text-5xl">#VelmoraOnYou</h2>
        </div>
        <p className="hidden max-w-xs font-sans text-sm text-ink-muted md:block">
          Real moments, real wear. Tag us to be featured.
        </p>
      </div>

      <div className="no-scrollbar flex gap-4 overflow-x-auto px-5 pb-2 sm:px-8 lg:px-12">
        {reels.map((reel) => {
          const captionId = `reel-cap-${reel.id}`
          return (
            <article
              key={reel.id}
              className="group relative aspect-[9/16] w-[230px] shrink-0 overflow-hidden bg-ink sm:w-[260px]"
            >
              <StrkImage
                imgId={reel.imgId}
                query={`[${captionId}] gold jewelry worn`}
                ratio="9x16"
                width={520}
                alt={reel.caption}
                className="h-full w-full object-cover transition-transform duration-700 ease-elegant group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <p
                id={captionId}
                className="absolute bottom-5 left-5 right-5 font-serif text-lg italic leading-snug text-cream-50"
              >
                {reel.caption}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
