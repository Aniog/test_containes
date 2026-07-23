import { Link } from "react-router-dom"
import { categories } from "@/data/products"
import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function CategoryTiles() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        return ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="mb-12 text-center">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold">
            Explore
          </p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.label}`}
              className="group relative aspect-[4/5] overflow-hidden bg-sand md:aspect-[3/4]"
            >
              <img
                alt={cat.label}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry editorial`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src={PLACEHOLDER}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-center">
                <h3
                  id={cat.titleId}
                  className="font-serif text-2xl uppercase tracking-widest2 text-cream"
                >
                  {cat.label}
                </h3>
                <p
                  id={cat.descId}
                  className="mt-1.5 font-sans text-xs text-cream/75 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  {cat.desc}
                </p>
                <span className="mt-3 inline-block font-sans text-[11px] uppercase tracking-widest2 text-gold-soft">
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
