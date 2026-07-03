import { Link } from "react-router-dom"
import { useStrkImages } from "@/hooks/useStrkImages"

const TILES = [
  {
    id: "earrings",
    name: "Earrings",
    to: "/shop?category=earrings",
    imgId: "cat-tile-earrings-1a2b",
    query: "gold earrings jewelry editorial dark background",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    to: "/shop?category=necklaces",
    imgId: "cat-tile-necklaces-3c4d",
    query: "gold necklace jewelry editorial dark background",
  },
  {
    id: "huggies",
    name: "Huggies",
    to: "/shop?category=huggies",
    imgId: "cat-tile-huggies-5e6f",
    query: "gold huggie earrings jewelry editorial dark background",
  },
]

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function CategoryTiles() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-stone mb-3">
            Explore
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {TILES.map((tile) => (
            <Link
              key={tile.id}
              to={tile.to}
              className="group relative block aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-ink"
            >
              <img
                src={PLACEHOLDER}
                alt={tile.name}
                data-strk-img-id={tile.imgId}
                data-strk-img={tile.query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/30 group-hover:bg-ink/45 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-cream text-3xl md:text-4xl uppercase tracking-[0.2em] translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {tile.name}
                </span>
              </div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[11px] uppercase tracking-[0.3em] text-cream border-b border-cream/60 pb-1">
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
