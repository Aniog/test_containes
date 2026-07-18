import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { PLACEHOLDER } from "@/context/CartContext"
import { resolveImgUrl } from "@/lib/utils"

const TILES = [
  {
    id: "earrings",
    name: "Earrings",
    to: "/shop?category=earrings",
    imgId: "cat-earrings-img-1a2b",
    titleId: "cat-earrings-title-1a2b",
    query: "gold drop earrings on neutral background editorial",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    to: "/shop?category=necklaces",
    imgId: "cat-necklaces-img-3c4d",
    titleId: "cat-necklaces-title-3c4d",
    query: "gold necklace on neutral background editorial",
  },
  {
    id: "huggies",
    name: "Huggies",
    to: "/shop?category=huggies",
    imgId: "cat-huggies-img-5e6f",
    titleId: "cat-huggies-title-5e6f",
    query: "gold huggie hoop earrings close up editorial",
  },
]

export default function ShopByCategory() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center mb-12">
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">Explore</p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {TILES.map((tile) => (
            <Link
              key={tile.id}
              to={tile.to}
              className="group relative block aspect-[4x5] overflow-hidden bg-cream-100"
            >
              <img
                alt={tile.name}
                src={resolveImgUrl(tile.imgId) || PLACEHOLDER}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/35 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-end justify-center pb-8">
                <span
                  id={tile.titleId}
                  className="font-serif text-cream text-3xl md:text-4xl uppercase tracking-widest2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
                >
                  {tile.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
