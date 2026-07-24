import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const COLLECTIONS = [
  {
    id: "the-everyday-edit",
    name: "The Everyday Edit",
    desc: "Pieces made to be worn from morning to night, never taken off.",
    imgId: "coll-everyday-01",
    titleId: "coll-everyday-title",
    descId: "coll-everyday-desc",
  },
  {
    id: "the-gift-set",
    name: "The Gift Set",
    desc: "Boxed and ready to give — coordinated elegance for someone special.",
    imgId: "coll-gift-01",
    titleId: "coll-gift-title",
    descId: "coll-gift-desc",
  },
  {
    id: "the-ear-party",
    name: "The Ear Party",
    desc: "Cuffs, huggies and drops to stack into your own composition.",
    imgId: "coll-ear-01",
    titleId: "coll-ear-title",
    descId: "coll-ear-desc",
  },
]

export default function Collections() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={ref} className="pt-16 md:pt-20 bg-ivory min-h-screen">
      <div className="max-w-8xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="text-center mb-14">
          <p className="text-[11px] uppercase tracking-widest3 text-gold mb-3">
            Curated by Velmora
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">Collections</h1>
          <p className="mt-4 text-sm text-stone max-w-md mx-auto">
            Thoughtfully grouped edits — for everyday, for gifting, for the ear.
          </p>
        </div>

        <div className="space-y-6">
          {COLLECTIONS.map((c, i) => (
            <Link
              key={c.id}
              to="/shop"
              className="group grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden bg-cream"
            >
              <div
                className={`relative aspect-[4/3] md:aspect-auto md:min-h-[360px] overflow-hidden ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={c.name}
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.descId}] [${c.titleId}] gold jewelry collection editorial warm`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-10 md:p-16">
                <p className="text-[11px] uppercase tracking-widest3 text-gold mb-3">
                  Collection
                </p>
                <h2
                  id={c.titleId}
                  className="font-serif text-3xl md:text-4xl text-ink leading-tight"
                >
                  {c.name}
                </h2>
                <p id={c.descId} className="mt-4 text-sm text-ink-soft leading-relaxed max-w-sm">
                  {c.desc}
                </p>
                <span className="mt-7 inline-block text-[11px] uppercase tracking-widest2 text-ink border-b border-ink pb-0.5 group-hover:text-gold group-hover:border-gold transition-colors self-start">
                  Explore Collection
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
