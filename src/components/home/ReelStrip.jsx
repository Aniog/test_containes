import { reels } from "@/data/products"
import { useStrkImages } from "@/lib/useStrkImages"

export default function ReelStrip() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-10 flex flex-col items-center text-center">
          <p className="text-[11px] uppercase tracking-widest3 text-gold-soft">As Worn</p>
          <h2 className="mt-3 font-serif text-4xl text-cream md:text-5xl">#VelmoraOnYou</h2>
        </div>
      </div>

      <div className="no-scrollbar flex gap-4 overflow-x-auto px-6 pb-4 md:px-10">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative aspect-[9/16] w-[230px] shrink-0 overflow-hidden bg-ink-soft md:w-[260px]"
          >
            <img
              alt={reel.caption}
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] gold jewelry worn on ear neck editorial vertical`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <p
              id={reel.titleId}
              className="absolute bottom-5 left-5 right-5 font-serif text-lg italic leading-snug text-cream"
            >
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
