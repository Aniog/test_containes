import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "../../strk-img-config.json"
import { ArrowUpRight } from "lucide-react"

const tiles = [
  {
    id: "tile-earrings",
    title: "Earrings",
    href: "/shop?category=earrings",
    imgQuery: "gold drop earrings editorial portrait on model warm light [tile-earrings-title]",
    titleId: "tile-earrings-title",
    imgId: "tile-earrings-img-3a8f1c",
    imgRatio: "3x4",
    imgWidth: 800,
  },
  {
    id: "tile-necklaces",
    title: "Necklaces",
    href: "/shop?category=necklaces",
    imgQuery: "delicate gold crystal necklace on model neck editorial portrait [tile-necklaces-title]",
    titleId: "tile-necklaces-title",
    imgId: "tile-necklaces-img-7c2d9b",
    imgRatio: "3x4",
    imgWidth: 800,
  },
  {
    id: "tile-huggies",
    title: "Huggies",
    href: "/shop?category=huggies",
    imgQuery: "gold huggie hoop earrings on woman editorial close up warm [tile-huggies-title]",
    titleId: "tile-huggies-title",
    imgId: "tile-huggies-img-5e4b8a",
    imgRatio: "3x4",
    imgWidth: 800,
  },
]

export default function CategoryTiles() {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section className="bg-bone py-20 md:py-28" ref={ref}>
      <div className="mx-auto max-w-editorial px-6 md:px-10">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:mb-12 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-champagne-700">Shop the edit</p>
            <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">By Category</h2>
          </div>
          <Link
            to="/shop"
            className="text-[11px] font-medium uppercase tracking-[0.24em] text-ink/70 hover:text-ink"
          >
            View all jewelry
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 md:gap-7">
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              to={tile.href}
              className="group relative block luxury-tone overflow-hidden"
              style={{ aspectRatio: "3 / 4" }}
            >
              <img
                alt={tile.title}
                data-strk-img-id={tile.imgId}
                data-strk-img={tile.imgQuery}
                data-strk-img-ratio={tile.imgRatio}
                data-strk-img-width={tile.imgWidth}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-soft group-hover:scale-[1.04]"
              />
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(26,18,11,0.05) 0%, rgba(26,18,11,0.45) 100%)",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6 md:p-8">
                <div className="flex w-full items-end justify-between">
                  <h3
                    id={tile.titleId}
                    className="font-serif text-3xl text-bone md:text-4xl"
                  >
                    {tile.title}
                  </h3>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-bone/40 text-bone transition-all duration-300 group-hover:border-bone group-hover:bg-bone group-hover:text-ink">
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                </div>
                <div className="mt-2 h-px w-12 bg-bone/60 transition-all duration-500 group-hover:w-20" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
