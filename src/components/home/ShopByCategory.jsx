import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { categories } from "@/data/products"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function ShopByCategory() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.name}`}
              className="group relative aspect-[4/5] overflow-hidden bg-cream"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={cat.bgId}
                data-strk-bg={`[${cat.descId}] [${cat.titleId}] gold jewelry editorial`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="700"
              />
              <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/35 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 text-center">
                <h3
                  id={cat.titleId}
                  className="font-serif text-ivory text-3xl uppercase tracking-[0.18em] translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
                >
                  {cat.name}
                </h3>
                <p id={cat.descId} className="sr-only">
                  {cat.desc}
                </p>
                <span className="mt-3 text-[11px] uppercase tracking-[0.25em] text-ivory/0 group-hover:text-ivory/90 transition-all duration-500 delay-75">
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
