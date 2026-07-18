import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const TILES = [
  {
    id: "earrings",
    name: "Earrings",
    to: "/shop?category=earrings",
    desc: "Drops, studs & cuffs",
    imgId: "cat-earrings-img-9s1t2u",
    titleId: "cat-earrings-title",
    descId: "cat-earrings-desc",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    to: "/shop?category=necklaces",
    desc: "Pendants & chains",
    imgId: "cat-necklaces-img-3v4w5x",
    titleId: "cat-necklaces-title",
    descId: "cat-necklaces-desc",
  },
  {
    id: "huggies",
    name: "Huggies",
    to: "/shop?category=huggies",
    desc: "Everyday hoops",
    imgId: "cat-huggies-img-6y7z8a",
    titleId: "cat-huggies-title",
    descId: "cat-huggies-desc",
  },
]

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

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
    <section ref={ref} className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 flex flex-col items-center text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-champagne-deep">
            Explore
          </p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-ink">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {TILES.map((tile) => (
            <Link
              key={tile.id}
              to={tile.to}
              className="group relative block aspect-[4/5] overflow-hidden bg-sand md:aspect-[3/4]"
            >
              <img
                alt={tile.name}
                data-strk-img-id={tile.imgId}
                data-strk-img={`[${tile.descId}] [${tile.titleId}] gold jewelry editorial`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src={PLACEHOLDER}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-center">
                <h3
                  id={tile.titleId}
                  className="font-serif text-2xl md:text-3xl uppercase tracking-widest3 text-cream"
                >
                  {tile.name}
                </h3>
                <p
                  id={tile.descId}
                  className="mt-1.5 text-[11px] uppercase tracking-widest2 text-cream/80"
                >
                  {tile.desc}
                </p>
                <span className="mt-4 inline-block border-b border-cream/60 pb-1 text-[10px] uppercase tracking-widest2 text-cream opacity-0 transition-opacity duration-500 group-hover:opacity-100">
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
