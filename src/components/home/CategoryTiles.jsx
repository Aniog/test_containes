import { Link } from "react-router-dom"
import { PLACEHOLDERS } from "@/data/products"

const TILES = [
  {
    label: "Earrings",
    sub: "Cuffs, drops, studs",
    image: PLACEHOLDERS.categoryEarrings,
    to: "/shop?category=earrings",
  },
  {
    label: "Necklaces",
    sub: "Pendants, chains, lockets",
    image: PLACEHOLDERS.categoryNecklaces,
    to: "/shop?category=necklaces",
  },
  {
    label: "Huggies",
    sub: "The everyday staple",
    image: PLACEHOLDERS.categoryHuggies,
    to: "/shop?category=huggies",
  },
]

export default function CategoryTiles() {
  return (
    <section className="bg-cream py-20 md:py-32">
      <div className="container-velmora">
        <div className="text-center mb-10 md:mb-16">
          <p className="eyebrow mb-3 md:mb-4">Shop By Category</p>
          <h2 className="display-headline text-3xl md:text-5xl text-ink">
            The Velmora Edit
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {TILES.map((tile) => (
            <Link
              key={tile.label}
              to={tile.to}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-ink"
            >
              <img
                src={tile.image}
                alt={tile.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-elegant group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent transition-opacity duration-500 group-hover:from-ink/80" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold/90 mb-2 transition-all duration-500 group-hover:translate-y-0">
                  {tile.sub}
                </p>
                <h3 className="font-serif text-3xl md:text-4xl text-cream mb-3 leading-tight">
                  {tile.label}
                </h3>
                <span className="text-[10px] uppercase tracking-[0.25em] text-cream/85 border-b border-cream/40 self-start pb-0.5 transition-all duration-500 group-hover:text-gold group-hover:border-gold">
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
