import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const tiles = [
  { id: "earrings", label: "Earrings", query: "gold earrings" },
  { id: "necklaces", label: "Necklaces", query: "gold necklace" },
  { id: "huggies", label: "Huggies", query: "gold huggie earrings" },
]

export function CategoryTiles() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const cleanup = ImageHelper.loadImages(strkImgConfig, ref.current)
    return () => {
      if (typeof cleanup === "function") cleanup()
    }
  }, [])

  return (
    <section ref={ref} className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-2 text-center text-xs uppercase tracking-[0.22em] text-primary">
          Shop by Category
        </p>
        <h2 className="mb-12 text-center font-serif text-3xl font-medium text-foreground sm:text-4xl">
          Find Your Finish
        </h2>

        <div className="grid gap-4 sm:grid-cols-3">
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop?category=${tile.id}`}
              className="group relative aspect-[3/4] overflow-hidden rounded-md sm:aspect-[4/5]"
            >
              <div
                className="absolute inset-0 bg-muted transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={`category-bg-${tile.id}`}
                data-strk-bg={`[category-title-${tile.id}]`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`category-title-${tile.id}`}
                  className="font-serif text-2xl uppercase tracking-[0.18em] text-white sm:text-3xl"
                >
                  {tile.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
