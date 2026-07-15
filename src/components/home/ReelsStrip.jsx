import { reels } from '@/data/products'
import { useStrkImages } from '@/lib/useStrkImages'

export default function ReelsStrip() {
  const ref = useStrkImages([])

  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-10">
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest2 text-champagne mb-3">
            As Worn
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink">
            Styled by You
          </h2>
        </div>
      </div>

      <div
        ref={ref}
        className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar px-5 md:px-8 pb-2 snap-x"
      >
        {reels.map((reel) => (
          <article
            key={reel.id}
            className="relative shrink-0 w-[260px] md:w-[300px] aspect-[9/16] bg-ink overflow-hidden snap-start group"
          >
            <img
              alt={reel.caption}
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] gold jewelry worn on ear neck editorial vertical`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <p
              id={reel.titleId}
              className="absolute bottom-0 inset-x-0 p-5 font-serif text-cream text-lg leading-snug"
            >
              {reel.caption}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
