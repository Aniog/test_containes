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
    <section ref={ref} className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
      <div className="mb-12 text-center">
        <p className="text-[11px] uppercase tracking-widest2 text-gold">Explore</p>
        <h2 className="mt-3 font-serif text-4xl font-light text-ink md:text-5xl">
          Shop by Category
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.name}`}
            className="group relative aspect-[4/5] overflow-hidden bg-cream"
          >
            <img
              alt={cat.name}
              data-strk-img-id={cat.imgId}
              data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-center text-ivory">
              <h3
                id={cat.titleId}
                className="font-serif text-2xl uppercase tracking-widest3"
              >
                {cat.name}
              </h3>
              <p
                id={cat.descId}
                className="mt-1 translate-y-2 text-[11px] uppercase tracking-widest2 text-ivory/80 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
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
