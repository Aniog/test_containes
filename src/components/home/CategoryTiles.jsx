import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { categories } from "@/data/products"

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="font-serif text-3xl lg:text-4xl text-midnight-900 mb-2">
            Shop by Category
          </h2>
          <div className="w-12 h-[1px] bg-gold-400 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/3] lg:aspect-[3/4] overflow-hidden bg-midnight-900"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[cat-title-${cat.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex items-center gap-2 text-white font-serif text-2xl lg:text-3xl tracking-wide opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                  <span id={`cat-title-${cat.id}`}>{cat.name}</span>
                  <ArrowRight size={18} className="text-gold-300" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}