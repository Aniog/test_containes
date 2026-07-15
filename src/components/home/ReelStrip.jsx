import { reels } from "@/data/products"
import { useStrkImages } from "@/lib/useStrkImages"

export default function ReelStrip() {
  const ref = useStrkImages([])

  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-editorial px-5 md:px-8">
        <div className="mb-10 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-gold-light">As Seen On You</p>
          <h2 className="mt-3 font-serif text-4xl text-cream md:text-5xl">Worn & Loved</h2>
        </div>
      </div>

      <div
        ref={ref}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:px-8"
      >
        {reels.map((reel) => (
          <article
            key={reel.id}
            className="relative aspect-[9/16] w-[230px] shrink-0 snap-start overflow-hidden bg-ink-soft sm:w-[260px]"
          >
            <img
              alt={reel.caption}
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] gold jewelry worn on ear neck editorial vertical`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover opacity-90 transition-transform duration-700 ease-luxury hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <p
              id={reel.titleId}
              className="absolute bottom-5 left-5 right-5 font-serif text-lg italic text-cream"
            >
              {reel.caption}
            </p>
          </article>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-cream/40">Swipe to explore →</p>
    </section>
  )
}
