import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { categoryTiles } from "@/data/products"
import { cn } from "@/lib/utils"

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      ref={containerRef}
      className="container-x py-20 md:py-28"
      aria-labelledby="homepage-categories-title"
    >
      <div className="mb-10 md:mb-14">
        <p className="label-2 text-mist mb-3">Shop by Category</p>
        <h2
          id="homepage-categories-title"
          className="font-serif text-3xl md:text-5xl text-ink leading-tight"
        >
          Find your piece.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categoryTiles.map((cat, i) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.id}`}
            className={cn(
              "group relative overflow-hidden bg-ink aspect-[3/4] md:aspect-[4/5]",
              i === 1 && "md:translate-y-8",
            )}
          >
            <div
              data-strk-bg-id={`cat-tile-${cat.id}`}
              data-strk-bg={cat.query}
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="900"
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(22,19,17,0.15) 0%, rgba(22,19,17,0.55) 100%)",
              }}
              aria-hidden="true"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex items-end justify-between text-cream">
              <div>
                <p
                  id={`home-category-${cat.id}-name`}
                  className="font-serif text-2xl md:text-3xl leading-tight"
                >
                  {cat.name}
                </p>
                <p className="label-2 text-cream/70 mt-2">Shop {cat.name}</p>
              </div>
              <span className="w-10 h-10 rounded-full bg-cream/95 text-ink flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
