import { Link } from "react-router-dom"
import { scenes } from "../../data/scenery.js"
import { ArrowRightIcon } from "../ui/Icons.jsx"

const tiles = [
  {
    label: "Earrings",
    to: "/shop?category=earrings",
    image: scenes.categoryEarrings,
    description: "From cuffs to drops",
  },
  {
    label: "Necklaces",
    to: "/shop?category=necklaces",
    image: scenes.categoryNecklaces,
    description: "Heirlooms, layered",
  },
  {
    label: "Huggies",
    to: "/shop?category=earrings-huggies",
    image: scenes.categoryHuggies,
    description: "Everyday, elevated",
  },
]

export default function CategoryTiles() {
  return (
    <section className="bg-ivory py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-editorial px-6 md:px-10 lg:px-16">
        <div className="mb-12 md:mb-16 max-w-2xl">
          <p className="eyebrow">Shop by Category</p>
          <h2 className="display-serif text-[36px] md:text-[52px] mt-3 leading-[1.05]">
            A small, considered edit.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.label}
              to={tile.to}
              className="group relative overflow-hidden bg-ivory-soft aspect-[3/4]"
            >
              <img
                src={tile.image}
                alt={tile.label}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ivory/70 via-ivory/10 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex items-end justify-between">
                <div>
                  <h3 className="font-serif text-[32px] md:text-[40px] text-ink leading-none">
                    {tile.label}
                  </h3>
                  <p className="mt-2 text-[11px] tracking-eyebrow uppercase text-ink/65">
                    {tile.description}
                  </p>
                </div>
                <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-ivory text-ink border border-ink/10 transition-transform duration-500 group-hover:translate-x-1">
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
