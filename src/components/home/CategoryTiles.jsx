import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { categories } from "@/data/products"

export default function CategoryTiles() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-widest3 text-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.name}`}
              className="group relative overflow-hidden aspect-[4/5] md:aspect-[3/4] block"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={cat.imgId}
                data-strk-bg={`[cat-${cat.id}-desc] [cat-${cat.id}-name] gold jewelry`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width={800}
              />
              <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h3
                  id={`cat-${cat.id}-name`}
                  className="font-serif text-ivory text-3xl md:text-4xl uppercase tracking-product translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
                >
                  {cat.name}
                </h3>
                <p
                  id={`cat-${cat.id}-desc`}
                  className="text-ivory/0 group-hover:text-ivory/85 text-sm mt-3 max-w-[220px] opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75"
                >
                  {cat.description}
                </p>
                <span className="mt-5 text-ivory text-[11px] uppercase tracking-widest2 border-b border-ivory/60 pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
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
