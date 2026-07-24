import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { ArrowUpRight } from "lucide-react"

const TILES = [
  {
    slug: "earrings",
    label: "Earrings",
    query:
      "editorial flat lay of gold earrings on warm cream linen with soft natural light, close up detail",
  },
  {
    slug: "necklaces",
    label: "Necklaces",
    query:
      "editorial flat lay of gold necklaces with crystal pendant on warm linen, soft natural light",
  },
  {
    slug: "huggies",
    label: "Huggies",
    query:
      "editorial close up of chunky gold huggie hoop earrings on warm beige background, soft light",
  },
]

export default function CategoryTiles() {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return
    return ImageHelper.loadImages(strkImgConfig, sectionRef.current)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-paper py-20 md:py-32"
    >
      <div className="mx-auto max-w-8xl px-5 md:px-8">
        <div className="max-w-xl">
          <p className="eyebrow">Shop by Category</p>
          <h2 className="mt-3 font-display text-4xl font-light leading-[1.05] md:text-5xl">
            Find your everyday piece
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3 md:gap-6">
          {TILES.map((tile) => (
            <Link
              key={tile.slug}
              to={`/shop?category=${tile.slug}`}
              className="group relative block aspect-[4/5] overflow-hidden bg-paper-2"
            >
              <img
                alt={tile.label}
                data-strk-img-id={`cat-${tile.slug}-tile`}
                data-strk-img={tile.query}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out-soft group-hover:scale-105"
              />
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(20,17,15,0) 50%, rgba(20,17,15,0.55) 100%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 md:p-8">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-paper/80 md:text-[11px]">
                    Category
                  </p>
                  <p className="mt-2 font-display text-3xl font-light text-paper md:text-4xl">
                    {tile.label}
                  </p>
                </div>
                <span className="inline-flex h-10 w-10 items-center justify-center border border-paper/40 text-paper transition-all duration-500 group-hover:rotate-45 group-hover:border-paper">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.25} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
