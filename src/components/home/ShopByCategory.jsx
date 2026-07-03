import { Link } from "react-router-dom"
import { PLACEHOLDER } from "@/components/ui/StrkImage"

const TILES = [
  {
    id: "earrings",
    name: "Earrings",
    tagline: "Sculpted gold for every lobe",
    imgId: "cat-tile-earrings-velmora",
    desc: "gold earrings worn on the ear warm editorial",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    tagline: "Layers of warm gold light",
    imgId: "cat-tile-necklaces-velmora",
    desc: "gold necklace on the neck warm editorial light",
  },
  {
    id: "huggies",
    name: "Huggies",
    tagline: "Chunky, cozy, everyday",
    imgId: "cat-tile-huggies-velmora",
    desc: "chunky gold huggie earrings on the ear close up",
  },
]

export default function ShopByCategory() {
  return (
    <section className="mx-auto max-w-8xl px-5 py-20 md:px-8 md:py-28">
      <div className="mb-12 text-center">
        <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold">
          Explore
        </p>
        <h2 className="mt-3 font-serif text-4xl font-light text-ink md:text-5xl">
          Shop by Category
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
        {TILES.map((tile) => (
          <Link
            key={tile.id}
            to={`/shop?category=${tile.id}`}
            className="group relative block aspect-[4/5] overflow-hidden bg-cream md:aspect-[3/4]"
          >
            <img
              alt={tile.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-strk-img-id={tile.imgId}
              data-strk-img={`[cat-desc-${tile.id}] [cat-name-${tile.id}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src={PLACEHOLDER}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-center">
              <h3
                id={`cat-name-${tile.id}`}
                className="font-serif text-2xl uppercase tracking-[0.15em] text-ivory md:text-3xl"
              >
                {tile.name}
              </h3>
              <p
                id={`cat-desc-${tile.id}`}
                className="mt-2 max-w-xs mx-auto font-sans text-xs text-ivory/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              >
                {tile.tagline}
              </p>
              <span className="mt-4 inline-block font-sans text-[10px] uppercase tracking-[0.25em] text-gold">
                Shop Now
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
