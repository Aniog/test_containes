import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const tiles = [
  {
    id: "earrings",
    label: "Earrings",
    to: "/shop?cat=earrings",
    img: {
      id: "cat-earrings",
      query: "[home-categories-title] gold earrings editorial portrait warm",
      ratio: "3x4",
      width: 900,
    },
  },
  {
    id: "necklaces",
    label: "Necklaces",
    to: "/shop?cat=necklaces",
    img: {
      id: "cat-necklaces",
      query: "[home-categories-title] gold necklace pendant editorial portrait",
      ratio: "3x4",
      width: 900,
    },
  },
  {
    id: "huggies",
    label: "Huggies",
    to: "/shop?cat=huggies",
    img: {
      id: "cat-huggies",
      query: "[home-categories-title] chunky gold huggie earrings closeup",
      ratio: "3x4",
      width: 900,
    },
  },
]

export default function CategoryTiles() {
  React.useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, document.body)
  }, [])

  return (
    <section
      id="home-categories"
      className="bg-bone py-20 md:py-28 lg:py-32"
    >
      <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="mb-10 md:mb-14 max-w-xl">
          <p className="text-[10px] md:text-[11px] tracking-widest3 uppercase text-champagne-deep mb-3">
            Shop by Category
          </p>
          <h2
            id="home-categories-title"
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink tracking-tight"
          >
            The Edit
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tiles.map((t) => (
            <Link
              key={t.id}
              to={t.to}
              className="group relative overflow-hidden bg-bone-soft aspect-[3/4]"
            >
              <img
                alt={t.label}
                data-strk-img-id={t.img.id}
                data-strk-img={t.img.query}
                data-strk-img-ratio={t.img.ratio}
                data-strk-img-width={t.img.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.04]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ink/40" />
              <div className="absolute inset-0 flex items-end p-6 md:p-8">
                <div className="w-full flex items-end justify-between text-bone">
                  <h3 className="font-serif text-3xl md:text-4xl tracking-tight">
                    {t.label}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-[10px] tracking-widest3 uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Shop
                    <ArrowRight
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      strokeWidth={1.5}
                    />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
