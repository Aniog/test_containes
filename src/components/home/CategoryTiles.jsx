import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { categories } from "@/data/products"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { PLACEHOLDER } from "@/lib/strk"

export default function CategoryTiles() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Explore</p>
        <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
          Shop by Category
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.name}`}
            className="group relative block aspect-[4/5] overflow-hidden bg-sand/40 md:aspect-[3/4]"
          >
            <img
              alt={cat.name}
              data-strk-img-id={cat.imgId}
              data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
              src={PLACEHOLDER}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-center">
              <h3
                id={cat.titleId}
                className="font-serif text-2xl uppercase tracking-[0.15em] text-cream"
              >
                {cat.name}
              </h3>
              <p
                id={cat.descId}
                className="mt-1 max-h-0 overflow-hidden text-xs text-cream/80 opacity-0 transition-all duration-500 group-hover:max-h-12 group-hover:opacity-100"
              >
                {cat.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
