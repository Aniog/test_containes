import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { PLACEHOLDER } from "@/context/CartContext"
import { resolveImgUrl } from "@/lib/utils"

const COLLECTIONS = [
  {
    id: "the-everyday-edit",
    name: "The Everyday Edit",
    desc: "Understated pieces made to be worn from morning to night.",
    to: "/shop",
    imgId: "col-everyday-img-1b2c",
    titleId: "col-everyday-title-1b2c",
    descId: "col-everyday-desc-1b2c",
    query: "minimal gold jewelry everyday wear editorial warm",
  },
  {
    id: "the-gift-edit",
    name: "The Gift Edit",
    desc: "Considered sets, presented in our signature keepsake box.",
    to: "/shop",
    imgId: "col-gift-img-3d4e",
    titleId: "col-gift-title-3d4e",
    descId: "col-gift-desc-3d4e",
    query: "gold jewelry gift box set elegant warm",
  },
  {
    id: "the-statement-edit",
    name: "The Statement Edit",
    desc: "Bolder pieces for the moments that call for presence.",
    to: "/shop",
    imgId: "col-statement-img-5f6a",
    titleId: "col-statement-title-5f6a",
    descId: "col-statement-desc-5f6a",
    query: "bold gold statement necklace crystal editorial warm",
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
    <div ref={ref} className="pt-16 md:pt-20">
      <div className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">Curated</p>
          <h1 className="font-serif text-4xl md:text-6xl text-espresso">Collections</h1>
          <p className="mt-4 text-espresso-700 max-w-lg mx-auto">
            Thoughtfully grouped edits, each with its own mood.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10 py-14 md:py-20 space-y-16 md:space-y-24">
        {COLLECTIONS.map((c, i) => (
          <div
            key={c.id}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center ${
              i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
            }`}
          >
            <Link to={c.to} className="relative aspect-[4x5] overflow-hidden bg-cream-100 group">
              <img
                alt={c.name}
                src={resolveImgUrl(c.imgId) || PLACEHOLDER}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </Link>
            <div className="md:px-4">
              <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">
                Collection {String(i + 1).padStart(2, "0")}
              </p>
              <h2
                id={c.titleId}
                className="font-serif text-4xl md:text-5xl text-espresso leading-tight"
              >
                {c.name}
              </h2>
              <p id={c.descId} className="mt-5 text-espresso-700 leading-relaxed max-w-md">
                {c.desc}
              </p>
              <Link
                to={c.to}
                className="inline-block mt-7 border border-espresso text-espresso text-[11px] uppercase tracking-widest2 px-8 py-3.5 hover:bg-espresso hover:text-cream transition-colors duration-300"
              >
                Shop the Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
