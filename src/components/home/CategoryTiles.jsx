import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { categories } from "@/data/products"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function CategoryTiles() {
  const containerRef = useRef(null)
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <div className="mb-12 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-taupe">
          Explore
        </p>
        <h2 className="mt-3 font-serif text-3xl text-espresso md:text-4xl">
          Shop by Category
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {categories.map((cat) => {
          const titleId = `cat-${cat.id}-title`
          const descId = `cat-${cat.id}-desc`
          return (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-sand md:aspect-[3/4]"
            >
              <img
                alt={cat.name}
                data-strk-img-id={`cat-${cat.id}-img`}
                data-strk-img={`[${descId}] [${titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src={PLACEHOLDER}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-center">
                <h3
                  id={titleId}
                  className="font-serif text-2xl text-cream md:text-3xl"
                >
                  {cat.name}
                </h3>
                <p id={descId} className="sr-only">
                  {cat.desc}
                </p>
                <span className="mt-2 inline-block text-[11px] uppercase tracking-[0.25em] text-champagne opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Shop Now
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
