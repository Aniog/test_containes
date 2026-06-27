import { Link } from "react-router-dom"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const TILES = [
  {
    id: "earrings",
    name: "Earrings",
    to: "/shop?category=earrings",
    imgId: "cat-earrings-velmora-1a",
    titleId: "cat-title-earrings",
    descId: "cat-desc-earrings",
    desc: "Studs, drops & cuffs",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    to: "/shop?category=necklaces",
    imgId: "cat-necklaces-velmora-2b",
    titleId: "cat-title-necklaces",
    descId: "cat-desc-necklaces",
    desc: "Pendants & layered chains",
  },
  {
    id: "huggies",
    name: "Huggies",
    to: "/shop?category=huggies",
    imgId: "cat-huggies-velmora-3c",
    titleId: "cat-title-huggies",
    descId: "cat-desc-huggies",
    desc: "Dome & pearl huggies",
  },
]

export default function CategoryTiles() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="mb-12 text-center sm:mb-16">
        <p className="mb-3 text-[11px] uppercase tracking-[0.28em] text-gold">
          Explore
        </p>
        <h2 className="font-serif text-4xl font-light text-ink sm:text-5xl">
          Shop by Category
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3">
        {TILES.map((tile) => (
          <Link
            key={tile.id}
            to={tile.to}
            className="group relative aspect-[4/5] overflow-hidden bg-cream md:aspect-[3/4]"
          >
            <img
              data-strk-img-id={tile.imgId}
              data-strk-img={`[${tile.descId}] [${tile.titleId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
              src={PLACEHOLDER}
              alt={tile.name}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent transition-opacity duration-500 group-hover:from-ink/80" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-center">
              <p
                id={tile.titleId}
                className="font-serif text-3xl uppercase tracking-[0.15em] text-ivory"
              >
                {tile.name}
              </p>
              <p
                id={tile.descId}
                className="mt-1 text-[11px] uppercase tracking-[0.2em] text-ivory/0 transition-all duration-500 group-hover:text-ivory/80"
              >
                {tile.desc}
              </p>
              <span className="mt-4 inline-block border-b border-champagne pb-1 text-[10px] uppercase tracking-[0.25em] text-champagne">
                Shop Now
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
