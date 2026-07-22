import { Link } from "react-router-dom"
import { categories } from "@/data/products"
import { resolveImgUrl } from "@/lib/utils"

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center mb-12">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Explore</p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso font-light">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative block aspect-[4/5] overflow-hidden bg-cream"
            >
              <img
                alt={cat.name}
                src={resolveImgUrl(cat.imgId)}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-espresso/25 group-hover:bg-espresso/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h3
                  id={`cat-${cat.id}-name`}
                  className="font-serif text-ivory text-3xl md:text-4xl tracking-[0.12em] uppercase"
                >
                  {cat.name}
                </h3>
                <p
                  id={`cat-${cat.id}-desc`}
                  className="mt-2 text-ivory/80 text-xs uppercase tracking-[0.2em] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                >
                  {cat.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
