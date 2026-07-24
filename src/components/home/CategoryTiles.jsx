import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { CATEGORIES } from "@/data/products"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const TILES = [
  {
    ...CATEGORIES[0],
    imgId: "cat-earrings-01",
    titleId: "cat-earrings-title",
    descId: "cat-earrings-desc",
    desc: "Gold earrings, cuffs and drops for every lobe.",
  },
  {
    ...CATEGORIES[1],
    imgId: "cat-necklaces-01",
    titleId: "cat-necklaces-title",
    descId: "cat-necklaces-desc",
    desc: "Fine chains and crystal pendants at the collarbone.",
  },
  {
    ...CATEGORIES[2],
    imgId: "cat-huggies-01",
    titleId: "cat-huggies-title",
    descId: "cat-huggies-desc",
    desc: "Chunky dome huggies that hug the lobe close.",
  },
]

export default function CategoryTiles() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-ivory">
      <div className="max-w-8xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12">
          <p className="text-[11px] uppercase tracking-widest3 text-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TILES.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop?category=${tile.id}`}
              className="group relative block overflow-hidden aspect-[4/5] bg-cream"
            >
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={tile.name}
                data-strk-img-id={tile.imgId}
                data-strk-img={`[${tile.descId}] [${tile.titleId}] gold jewelry editorial warm`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="700"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-center">
                <p id={tile.descId} className="sr-only">{tile.desc}</p>
                <h3
                  id={tile.titleId}
                  className="font-serif text-3xl md:text-4xl text-white mb-2"
                >
                  {tile.name}
                </h3>
                <span className="inline-block text-[11px] uppercase tracking-widest2 text-white/90 border-b border-white/60 pb-0.5 group-hover:border-gold-light group-hover:text-gold-light transition-colors">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
