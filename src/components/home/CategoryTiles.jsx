import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { ArrowUpRight } from "lucide-react"

const TILES = [
  {
    id: "cat-earrings",
    title: "Earrings",
    sub: "Studs, cuffs, drops",
    href: "/shop?category=earrings",
    query: "gold drop earrings editorial warm lighting on neutral",
  },
  {
    id: "cat-necklaces",
    title: "Necklaces",
    sub: "Pendants, chains, sets",
    href: "/shop?category=necklaces",
    query: "delicate gold necklace editorial warm close-up model",
  },
  {
    id: "cat-huggies",
    title: "Huggies",
    sub: "Daily essentials",
    href: "/shop?category=huggies",
    query: "gold huggie earrings on model editorial close-up",
  },
]

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [])

  return (
    <section ref={containerRef} className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="eyebrow">Shop By Category</span>
          <h2 className="mt-3 font-serif text-3xl md:text-5xl text-espresso tracking-tight">
            The Quiet Edit
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {TILES.map((tile) => (
            <Link
              key={tile.id}
              to={tile.href}
              className="group relative block aspect-[3/4] overflow-hidden bg-espresso-deep"
            >
              <img
                data-strk-img-id={tile.id}
                data-strk-img={tile.query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                alt={tile.title}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-deep/75 via-espresso-deep/10 to-espresso-deep/0 transition-opacity duration-500 group-hover:opacity-90" />

              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 md:pb-10 text-center">
                <span className="eyebrow !text-gold-soft">{tile.sub}</span>
                <h3 className="mt-2 font-serif text-3xl md:text-4xl text-ivory">
                  {tile.title}
                </h3>
                <span className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ivory/90 opacity-0 -translate-y-1 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  Shop {tile.title}
                  <ArrowUpRight size={14} strokeWidth={1.5} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}