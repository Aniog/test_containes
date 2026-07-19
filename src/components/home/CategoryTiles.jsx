import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { categories } from "@/data/products"


export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="flex flex-col items-center text-center">
        <span className="text-[11px] uppercase tracking-[0.3em] text-gold">Explore</span>
        <h2 className="mt-3 font-serif text-3xl text-ink md:text-5xl">Shop by Category</h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.name}`}
            className="group relative aspect-[4/5] overflow-hidden bg-sand md:aspect-[3/4]"
          >
            <img
              alt={cat.name}
              data-strk-img-id={cat.imgId}
              data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry editorial`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-center">
              <h3
                id={cat.titleId}
                className="font-serif text-2xl uppercase tracking-[0.15em] text-cream"
              >
                {cat.name}
              </h3>
              <p
                id={cat.descId}
                className="mt-1 text-[11px] uppercase tracking-[0.2em] text-cream/70"
              >
                {cat.desc}
              </p>
              <span className="mt-4 inline-block text-[11px] uppercase tracking-[0.22em] text-champagne opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Shop Now →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
