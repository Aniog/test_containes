import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { CATEGORIES } from "@/data/products"

export function CategoryTiles() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="bg-velmora-cream px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="font-sans text-xs uppercase tracking-widest text-velmora-gold">
            Shop by Category
          </p>
          <h2 className="mt-2 font-serif text-4xl text-velmora-espresso md:text-5xl">
            Find Your Finish
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-velmora-sand"
            >
              <img
                data-strk-img-id={`category-${category.id}`}
                data-strk-img={`[category-${category.id}-label] ${category.query}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={category.label}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-velmora-charcoal/20 transition-colors group-hover:bg-velmora-charcoal/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  id={`category-${category.id}-label`}
                  className="border border-white/60 bg-white/10 px-6 py-3 font-sans text-xs uppercase tracking-widest text-white backdrop-blur-sm transition-all group-hover:bg-white/20"
                >
                  {category.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
