import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { FEATURED_CATEGORIES } from "@/data/products"
import { useReveal } from "@/lib/useReveal"

export default function CategoryTiles() {
  const containerRef = useRef(null)
  useReveal(containerRef, [])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-cream py-20 sm:py-28 lg:py-32">
      <div className="container-editorial">
        <div className="reveal text-center mb-12 sm:mb-16">
          <p className="eyebrow">Find Your Piece</p>
          <h2 className="font-serif text-[36px] sm:text-[48px] lg:text-[56px] mt-3 text-espresso">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {FEATURED_CATEGORIES.map((cat, i) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="reveal group relative block aspect-[3/4] overflow-hidden bg-taupe-100"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.label}] [velmora jewelry]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-105"
              />
              <div
                className="absolute inset-0 transition-opacity duration-500 ease-editorial"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(26,18,8,0.0) 40%, rgba(26,18,8,0.7) 100%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] text-cream leading-none">
                  {cat.label}
                </p>
                <div className="mt-3 flex items-center gap-2 text-cream/85 text-[12px] uppercase tracking-wider-3 font-medium translate-y-2 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-editorial">
                  <span>Shop {cat.label}</span>
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </div>
                <p className="mt-1 text-[12px] text-cream/65 italic">{cat.blurb}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
