import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { StrkImage } from "@/components/StrkImage"
import { Reveal } from "@/components/Reveal"

const TILES = [
  { label: "Earrings", to: "/shop?category=earrings", blurb: "Cuffs, drops & statement silhouettes" },
  { label: "Necklaces", to: "/shop?category=necklaces", blurb: "Fine chains & pendant layers" },
  { label: "Huggies", to: "/shop?category=huggies", blurb: "The everyday essential, reimagined" },
]

export function CategoryTiles() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <Reveal className="text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-bronze md:text-[11px]">Explore</p>
          <h2 id="categories-heading" className="mt-3 font-serif text-3xl font-medium text-ink md:text-5xl">
            Shop by Category
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-3 md:mt-14 md:gap-5">
          {TILES.map((tile, i) => {
            const labelId = `category-tile-${tile.label.toLowerCase()}`
            return (
              <Reveal key={tile.label} delay={i * 90}>
                <Link to={tile.to} className="group relative block overflow-hidden rounded-sm bg-espresso">
                  <div className="aspect-[4/5]">
                    <StrkImage
                      imgId={`category-tile-${tile.label.toLowerCase()}-c41d`}
                      query={`[${labelId}] [categories-heading] elegant gold ${tile.label.toLowerCase()} jewelry still life, warm editorial light`}
                      ratio="4x3"
                      width={800}
                      alt={tile.label}
                      className="transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/10 to-transparent transition-opacity duration-500" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:translate-y-3 md:transition-transform md:duration-500 md:ease-out md:group-hover:translate-y-0">
                    <h3
                      id={labelId}
                      className="font-serif text-2xl font-medium uppercase tracking-[0.2em] text-ivory md:text-3xl"
                    >
                      {tile.label}
                    </h3>
                    <p className="mt-1 text-xs text-ivory/70 opacity-100 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100">
                      {tile.blurb}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.25em] text-bronze-light opacity-100 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100">
                      Shop Now <ArrowRight className="size-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
