import { useStrkImages, STRK_PLACEHOLDER } from '@/lib/useStrkImages'
import { reels } from '@/data/products'

export default function ReelStrip() {
  const ref = useStrkImages([])

  return (
    <section className="bg-espresso py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-gold-light">As Worn By You</p>
          <h2 className="mt-3 font-serif text-3xl text-ivory md:text-5xl">#VelmoraMoments</h2>
        </div>
      </div>

      <div
        ref={ref}
        className="no-scrollbar flex gap-4 overflow-x-auto px-5 pb-4 md:px-8"
      >
        {reels.map((reel) => (
          <article
            key={reel.id}
            className="group relative aspect-[9/16] w-[230px] shrink-0 overflow-hidden bg-ink md:w-[260px]"
          >
            <img
              alt={reel.caption}
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] gold jewelry worn on ear neck model editorial vertical`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src={STRK_PLACEHOLDER}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
            <p
              id={reel.titleId}
              className="absolute bottom-5 left-5 right-5 font-serif text-lg italic leading-snug text-ivory"
            >
              {reel.caption}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
