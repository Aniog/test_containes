import { reels } from "@/data/products"
import { useStrkImages } from "@/lib/useStrkImages"

export default function ReelStrip() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-sand">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-10">
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest2 text-champagne mb-3">
            As Worn By You
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">
            #VelmoraMoments
          </h2>
        </div>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-4 md:gap-6 px-6 md:px-10 pb-2">
          {reels.map((reel) => (
            <article
              key={reel.id}
              className="relative shrink-0 w-[220px] md:w-[260px] aspect-[9/16] overflow-hidden bg-ink group"
            >
              <img
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.titleId}] jewelry worn on ear neck editorial vertical`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <p
                id={reel.titleId}
                className="absolute bottom-0 inset-x-0 p-5 font-serif text-cream text-lg italic leading-snug"
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
