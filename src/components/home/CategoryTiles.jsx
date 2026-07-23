import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { categories } from "@/data/products"

export default function CategoryTiles() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
      <div className="text-center mb-12 reveal">
        <p className="text-xs uppercase tracking-widest3 text-gold mb-3">Explore</p>
        <h2 className="font-serif text-4xl md:text-5xl text-ink-800">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 reveal">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.name}`}
            className="relative group overflow-hidden aspect-[4/5] bg-sand"
          >
            <img
              alt={cat.name}
              data-strk-img-id={cat.imgId}
              data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/10 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-7 text-center translate-y-2 group-hover:translate-y-0 transition-transform duration-400 ease-smooth">
              <h3
                id={cat.titleId}
                className="font-serif text-2xl md:text-3xl text-cream uppercase tracking-wide"
              >
                {cat.name}
              </h3>
              <p id={cat.descId} className="text-xs uppercase tracking-widest2 text-cream/80 mt-1">
                {cat.tagline}
              </p>
              <span className="inline-block mt-3 text-[11px] uppercase tracking-widest2 text-gold-soft opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Shop Now
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
