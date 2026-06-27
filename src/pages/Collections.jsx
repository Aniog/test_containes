import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import Reveal from "@/components/ui/Reveal"

const COLLECTIONS = [
  {
    id: "col-gilded-everyday",
    name: "The Gilded Everyday",
    description:
      "Huggies, studs, and chains you forget you’re wearing — and miss when you don’t.",
    count: 4,
    query: "everyday gold jewelry stack earrings necklace editorial",
  },
  {
    id: "col-gift-edit",
    name: "The Gift Edit",
    description:
      "Pre-boxed, hand-wrapped, and ready to make someone tear up.",
    count: 1,
    query: "luxury gold jewelry gift box flat lay warm tones",
  },
  {
    id: "col-statement",
    name: "Quietly Statement",
    description:
      "Pieces that carry a room without raising their voice.",
    count: 2,
    query: "statement gold necklace drop earrings editorial portrait",
  },
  {
    id: "col-minimal",
    name: "Minimal & Modern",
    description:
      "Single lines, single stones, considered silhouettes.",
    count: 2,
    query: "minimal modern gold jewelry editorial close up warm",
  },
]

export default function Collections() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [])

  return (
    <div ref={containerRef} className="bg-ivory">
      <section className="bg-ivory-soft border-b border-hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-32 md:pt-40 pb-14 text-center">
          <span className="eyebrow">Curated</span>
          <h1 className="mt-3 font-serif text-4xl md:text-6xl text-espresso tracking-tight">
            Collections
          </h1>
          <p className="mt-4 text-sm md:text-base text-muted max-w-md mx-auto">
            Small, considered edits of our pieces — grouped by mood, ritual, or
            recipient.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {COLLECTIONS.map((collection, idx) => (
            <Reveal key={collection.id} delay={idx * 80}>
              <Link
                to="/shop"
                className="group block relative aspect-[4/3] overflow-hidden bg-espresso-deep"
              >
                <img
                  data-strk-img-id={collection.id}
                  data-strk-img={collection.query}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  alt={collection.name}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-deep/80 via-transparent to-transparent" />
                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end text-ivory">
                  <span className="eyebrow !text-gold-soft">
                    {collection.count} {collection.count === 1 ? "piece" : "pieces"}
                  </span>
                  <h2 className="mt-2 font-serif text-3xl md:text-4xl">
                    {collection.name}
                  </h2>
                  <p className="mt-2 text-sm text-ivory/80 max-w-md">
                    {collection.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ivory/90">
                    Explore Collection
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}