import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import StrkImage from "@/components/StrkImage"

const TILES = [
  {
    to: "/shop?category=earrings",
    label: "Earrings",
    eyebrow: "01 — Earrings",
    image: {
      id: "cat-earrings",
      query: "[cat-earrings-label] [category-tiles-title] gold earrings editorial close up",
      ratio: "3x4",
      width: 900,
      alt: "Gold earrings editorial close-up",
    },
  },
  {
    to: "/shop?category=necklaces",
    label: "Necklaces",
    eyebrow: "02 — Necklaces",
    image: {
      id: "cat-necklaces",
      query: "[cat-necklaces-label] [category-tiles-title] gold necklace editorial model",
      ratio: "3x4",
      width: 900,
      alt: "Gold necklace on model",
    },
  },
  {
    to: "/shop?category=huggies",
    label: "Huggies",
    eyebrow: "03 — Huggies",
    image: {
      id: "cat-huggies",
      query: "[cat-huggies-label] [category-tiles-title] gold huggie earrings editorial close up",
      ratio: "3x4",
      width: 900,
      alt: "Gold huggie earrings editorial",
    },
  },
]

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-32">
      <div className="container-site">
        <div className="text-center mb-10 md:mb-14">
          <p className="eyebrow" id="category-tiles-eyebrow">
            Shop by Category
          </p>
          <h2
            id="category-tiles-title"
            className="display text-3xl md:text-5xl mt-3"
          >
            Find your signature
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {TILES.map((tile) => (
            <Link
              key={tile.to}
              to={tile.to}
              className="group relative block aspect-[3/4] overflow-hidden bg-surface"
              aria-label={`Shop ${tile.label}`}
            >
              <StrkImage
                id={tile.image.id}
                query={tile.image.query}
                ratio={tile.image.ratio}
                width={tile.image.width}
                alt={tile.image.alt}
                imgClassName="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-soft group-hover:scale-105"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(14,13,11,0.1) 0%, rgba(14,13,11,0.7) 100%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex items-end justify-between">
                <div>
                  <p className="eyebrow text-accent mb-2">{tile.eyebrow}</p>
                  <h3
                    id={`cat-${tile.label.toLowerCase()}-label`}
                    className="font-serif text-3xl md:text-4xl text-ink-primary"
                  >
                    {tile.label}
                  </h3>
                </div>
                <span
                  className="hidden md:flex w-10 h-10 items-center justify-center border border-ink-primary/60 text-ink-primary rounded-full transition-all duration-300 ease-soft group-hover:bg-accent group-hover:border-accent group-hover:text-ink-onAccent"
                  aria-hidden="true"
                >
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
