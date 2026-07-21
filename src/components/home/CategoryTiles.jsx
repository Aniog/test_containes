import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { useReveal } from "@/hooks/useReveal"


const tiles = [
  {
    id: "earrings",
    name: "Earrings",
    to: "/shop?category=earrings",
    imgId: "cat-earrings-3f2a",
    titleId: "cat-earrings-title",
    descId: "cat-earrings-desc",
    desc: "Gold earrings, drops and hoops",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    to: "/shop?category=necklaces",
    imgId: "cat-necklaces-7b1c",
    titleId: "cat-necklaces-title",
    descId: "cat-necklaces-desc",
    desc: "Layered gold necklaces and pendants",
  },
  {
    id: "huggies",
    name: "Huggies",
    to: "/shop?category=huggies",
    imgId: "cat-huggies-9d4e",
    titleId: "cat-huggies-title",
    descId: "cat-huggies-desc",
    desc: "Gold huggie hoop earrings",
  },
]

export default function CategoryTiles() {
  const containerRef = useRef(null)
  const { ref, visible } = useReveal()

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? "is-visible" : ""} text-center`}
        >
          <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold">
            Explore
          </p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
            Shop by Category
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3">
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              to={tile.to}
              className="group relative aspect-[4/5] overflow-hidden bg-sand/40 md:aspect-[3/4]"
            >
              <img
                alt={tile.name}
                data-strk-img-id={tile.imgId}
                data-strk-img={`[${tile.descId}] [${tile.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-center">
                <h3
                  id={tile.titleId}
                  className="font-serif text-2xl uppercase tracking-[0.18em] text-cream md:text-3xl"
                >
                  {tile.name}
                </h3>
                <p id={tile.descId} className="sr-only">
                  {tile.desc}
                </p>
                <span className="mt-3 inline-block font-sans text-[10px] uppercase tracking-[0.22em] text-cream/80 opacity-0 transition-all duration-500 group-hover:opacity-100">
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
