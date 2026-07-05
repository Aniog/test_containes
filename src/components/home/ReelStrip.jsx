import { reels } from "@/data/products"
import { useStrkImages } from "@/hooks/useStrkImages"
import { useReveal } from "@/hooks/useReveal"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ReelStrip() {
  const containerRef = useStrkImages([])
  const revealRef = useReveal([])

  return (
    <section
      ref={(node) => {
        containerRef.current = node
        revealRef.current = node
      }}
      className="bg-espresso-900 py-20 md:py-28"
    >
      <div className="reveal mx-auto max-w-8xl px-5 md:px-10">
        <div className="mb-10 text-center text-cream">
          <p className="font-sans text-[11px] uppercase tracking-ultra text-gold-300">
            As Worn
          </p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">
            Styled by You
          </h2>
        </div>
      </div>

      <div className="no-scrollbar reveal flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:px-10">
        {reels.map((reel) => (
          <article
            key={reel.id}
            className="relative aspect-[9/16] w-[230px] shrink-0 snap-start overflow-hidden bg-espresso-800 md:w-[260px]"
          >
            <img
              alt={reel.title}
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] gold jewelry worn on model`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src={PLACEHOLDER}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-cream">
              <p
                id={reel.titleId}
                className="font-sans text-[10px] uppercase tracking-widest text-gold-200"
              >
                {reel.title}
              </p>
              <p className="mt-1 font-serif text-lg italic">{reel.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
