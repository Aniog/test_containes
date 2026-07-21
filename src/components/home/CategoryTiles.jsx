import { useRef, useEffect } from "react"
import { Link } from "react-router-dom"

import { categories } from "@/data/products"
import { strkBgStyle } from "@/lib/images"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function CategoryTiles() {
  const ref = useRef(null)
  useEffect(() => {
      if (!ref.current) return
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      })
      return () => window.cancelAnimationFrame(frameId)
    }, [])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-ivory">
      <div className="max-w-8xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">Explore</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink font-light">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.name}`}
              className="group relative block aspect-[4/5] overflow-hidden bg-cream"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={strkBgStyle(cat.bgId)}
              />
              <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/35 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 text-center">
                <h3
                  id={cat.titleId}
                  className="font-serif text-ivory text-3xl md:text-4xl uppercase tracking-wider"
                >
                  {cat.name}
                </h3>
                <p
                  id={cat.descId}
                  className="text-ivory/80 text-sm mt-2 max-w-[80%] translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
                >
                  {cat.desc}
                </p>
                <span className="mt-4 text-ivory text-[11px] uppercase tracking-widest3 border-b border-ivory/60 pb-1 group-hover:border-gold group-hover:text-gold-light transition-colors duration-300">
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
