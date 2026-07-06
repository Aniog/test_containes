import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { BackgroundImage } from "@/components/ImageTag"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const tiles = [
  { id: "earrings", label: "Earrings", query: "gold earrings on model ear" },
  { id: "necklaces", label: "Necklaces", query: "gold necklace on model neck" },
  { id: "huggies", label: "Huggies", query: "gold huggie earrings close up" },
]

export function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-cream px-4 py-16 md:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center md:mb-14">
          <p className="font-sans text-xs font-medium uppercase tracking-extra-wide text-gold">
            Shop by Category
          </p>
          <h2 className="mt-3 font-serif text-3xl font-normal text-espresso md:text-4xl">
            Find Your Finish
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop/${tile.id}`}
              className="group relative aspect-[3/4] overflow-hidden md:aspect-[4/5]"
            >
              <BackgroundImage
                id={`category-${tile.id}`}
                query={`[category-${tile.id}-label]`}
                ratio="3x4"
                width={800}
                className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105"
              >
                <div className="absolute inset-0 bg-espresso/20 transition-colors duration-300 group-hover:bg-espresso/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    id={`category-${tile.id}-label`}
                    className="border border-white/70 px-6 py-3 font-sans text-sm font-medium uppercase tracking-extra-wide text-white backdrop-blur-sm transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-espresso"
                  >
                    {tile.label}
                  </span>
                </div>
              </BackgroundImage>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
