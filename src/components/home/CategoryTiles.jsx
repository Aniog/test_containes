import { Link } from "react-router-dom"
import { useStrkImages } from "@/lib/useStrkImages"

const TILES = [
  {
    id: "earrings",
    name: "Earrings",
    to: "/shop?category=earrings",
    imgId: "cat-earrings-tile-1a",
    titleId: "cat-earrings-title",
    descId: "cat-earrings-desc",
    desc: "Gold earrings, drops and cuffs",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    to: "/shop?category=necklaces",
    imgId: "cat-necklaces-tile-2b",
    titleId: "cat-necklaces-title",
    descId: "cat-necklaces-desc",
    desc: "Fine gold chains and pendants",
  },
  {
    id: "huggies",
    name: "Huggies",
    to: "/shop?category=huggies",
    imgId: "cat-huggies-tile-3c",
    titleId: "cat-huggies-title",
    descId: "cat-huggies-desc",
    desc: "Polished gold huggie hoops",
  },
]


export default function CategoryTiles() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="mx-auto max-w-8xl px-5 py-20 md:px-8 md:py-28">
      <div className="mb-12 text-center">
        <p className="text-[11px] uppercase tracking-widest3 text-taupe">
          Explore
        </p>
        <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
          Shop by Category
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3 md:gap-6">
        {TILES.map((tile) => (
          <Link
            key={tile.id}
            to={tile.to}
            className="group relative block aspect-[4/5] overflow-hidden bg-sand/40"
          >
            <img
              alt={tile.name}
              data-strk-img-id={tile.imgId}
              data-strk-img={`[${tile.descId}] [${tile.titleId}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-center">
              <h3
                id={tile.titleId}
                className="font-serif text-2xl uppercase tracking-widest2 text-ivory md:text-3xl"
              >
                {tile.name}
              </h3>
              <p id={tile.descId} className="sr-only">
                {tile.desc}
              </p>
              <span className="mt-2 inline-block text-[11px] uppercase tracking-widest2 text-champagne opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Shop Now
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
