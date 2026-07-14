import { reels } from '@/data/products'
import { useStrkImages } from '@/lib/useStrkImages'

export default function ReelsStrip() {
  const ref = useStrkImages([])
  return (
    <section ref={ref} className="bg-espresso text-ivory py-20 md:py-28 overflow-hidden">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-[11px] uppercase tracking-widest2 text-champagne mb-3">
              As Worn
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ivory leading-tight">
              On the Community
            </h2>
          </div>
          <p className="hidden md:block text-sm text-ivory/60 max-w-xs">
            Real moments, real wear. Tag <span className="text-champagne">@velmora</span> to be featured.
          </p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="no-scrollbar overflow-x-auto">
        <div className="flex gap-4 md:gap-5 px-6 md:px-10 pb-2">
          {reels.map((reel) => (
            <article
              key={reel.id}
              className="relative shrink-0 w-[60vw] sm:w-[44vw] md:w-[260px] aspect-[9/16] bg-ink overflow-hidden group"
            >
              <img
                data-strk-img-id={reel.imgId}
                data-strk-img={`[reel-cap-${reel.id}] gold jewelry worn on ear neck`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <p
                id={`reel-cap-${reel.id}`}
                className="absolute bottom-0 inset-x-0 p-5 font-serif text-lg md:text-xl italic text-ivory leading-snug"
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
