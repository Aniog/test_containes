import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const COLLECTIONS = [
  {
    id: "earrings",
    name: "Earrings",
    desc: "Drops, studs & cuffs for every ear",
    to: "/shop?category=earrings",
    imgId: "coll-earrings-img-7q9s1u",
    titleId: "coll-earrings-title",
    descId: "coll-earrings-desc",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    desc: "Pendants & chains that frame the neckline",
    to: "/shop?category=necklaces",
    imgId: "coll-necklaces-img-3v5w7y",
    titleId: "coll-necklaces-title",
    descId: "coll-necklaces-desc",
  },
  {
    id: "huggies",
    name: "Huggies",
    desc: "Everyday hoops, polished to perfection",
    to: "/shop?category=huggies",
    imgId: "coll-huggies-img-9a1c3e",
    titleId: "coll-huggies-title",
    descId: "coll-huggies-desc",
  },
  {
    id: "sets",
    name: "Gift Sets",
    desc: "Coordinating duos, beautifully boxed",
    to: "/shop?category=sets",
    imgId: "coll-sets-img-5g7i9k",
    titleId: "coll-sets-title",
    descId: "coll-sets-desc",
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
    <div ref={ref} className="bg-cream pt-16 md:pt-20">
      <div className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-champagne-deep">Curated</p>
          <h1 className="mt-3 font-serif text-5xl md:text-6xl text-ink">Collections</h1>
          <p className="mt-4 max-w-lg mx-auto text-sm text-stone">
            Explore our jewelry by category — each piece hand-finished in
            warm 18K gold plate.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {COLLECTIONS.map((c) => (
            <Link
              key={c.id}
              to={c.to}
              className="group relative block aspect-[4/3] overflow-hidden bg-sand"
            >
              <img
                alt={c.name}
                data-strk-img-id={c.imgId}
                data-strk-img={`[${c.descId}] [${c.titleId}] gold jewelry editorial warm`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src={PLACEHOLDER}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <h2
                  id={c.titleId}
                  className="font-serif text-3xl md:text-4xl uppercase tracking-widest3 text-cream"
                >
                  {c.name}
                </h2>
                <p
                  id={c.descId}
                  className="mt-2 text-sm text-cream/85"
                >
                  {c.desc}
                </p>
                <span className="mt-4 inline-block border-b border-cream/60 pb-1 text-[10px] uppercase tracking-widest2 text-cream">
                  Shop Collection
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
