import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { CATEGORY_TILES } from "@/data/categories"
import { makeStrkImageLoaderRef } from "@/components/ui/StrkImage"

export default function CategoryTiles() {
  return (
    <section
      ref={makeStrkImageLoaderRef()}
      className="bg-cream-100 py-20 md:py-28"
      aria-label="Shop by category"
    >
      <div className="mx-auto max-w-editorial px-5 md:px-10">
        <div className="mb-10 md:mb-14 text-center">
          <p className="eyebrow">Shop By Category</p>
          <h2
            id="cat-tiles-title"
            className="mt-3 font-serif text-4xl md:text-5xl text-espresso-800"
          >
            Find your <span className="italic">forever</span> piece
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {CATEGORY_TILES.map((tile) => (
            <Link
              key={tile.id}
              to={tile.href}
              className="group relative block aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-cream-300"
            >
              <img
                data-strk-img-id={tile.imgId}
                data-strk-img={tile.imageQuery}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                alt={tile.label}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-espresso-800/15 group-hover:bg-espresso-800/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <h3
                  id={`cat-${tile.id}-label`}
                  className="font-serif text-cream-50 text-3xl md:text-4xl text-balance"
                >
                  {tile.label}
                </h3>
                <span className="mt-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-widest3 text-cream-100 opacity-80 group-hover:opacity-100 transition-opacity">
                  Shop
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.6} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
