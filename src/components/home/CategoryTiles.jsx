import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { categories } from "@/data/products"

export function CategoryTiles() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="mb-12 flex flex-col items-center text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
          Explore
        </p>
        <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
          Shop by Category
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3 md:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.name}`}
            className="group relative aspect-[4/5] overflow-hidden bg-cream md:aspect-[3/4]"
          >
            <img
              alt={cat.name}
              data-strk-img-id={cat.imgId}
              data-strk-img={`[cat-desc-${cat.id}] [cat-name-${cat.id}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-center">
              <h3
                id={`cat-name-${cat.id}`}
                className="font-serif text-2xl uppercase tracking-[0.15em] text-canvas md:text-3xl"
              >
                {cat.name}
              </h3>
              <p
                id={`cat-desc-${cat.id}`}
                className="mt-1.5 translate-y-2 text-xs text-canvas/0 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:text-canvas/80 group-hover:opacity-100"
              >
                {cat.desc}
              </p>
              <span className="mt-3 inline-block text-[10px] uppercase tracking-[0.2em] text-gold-soft">
                Shop Now
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
