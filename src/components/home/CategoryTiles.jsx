import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { categories } from "@/data/products"

export function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <section
      ref={containerRef}
      id="categories"
      className="bg-velmora-cream py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 font-sans text-xs uppercase tracking-[0.25em] text-velmora-gold">
            Shop by Category
          </p>
          <h2 className="font-serif text-3xl font-light uppercase tracking-[0.12em] text-velmora-charcoal md:text-4xl">
            Find Your Finish
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-velmora-ivory"
            >
              <div
                data-strk-bg-id={`category-${category.id}`}
                data-strk-bg={`[category-title-${category.id}] [category-desc-${category.id}]`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
                className="absolute inset-0 bg-velmora-ivory transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-velmora-charcoal/20 transition-colors group-hover:bg-velmora-charcoal/30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-velmora-cream">
                <h3
                  id={`category-title-${category.id}`}
                  className="font-serif text-2xl uppercase tracking-[0.15em] md:text-3xl"
                >
                  {category.name}
                </h3>
                <p
                  id={`category-desc-${category.id}`}
                  className="mt-2 max-w-[200px] translate-y-2 font-sans text-sm text-velmora-cream/80 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
