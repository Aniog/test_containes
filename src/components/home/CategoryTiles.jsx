import { Link } from "react-router-dom"
import { categories } from "@/data/products"
import { resolveStrkImgUrl } from "@/lib/strkImg"

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((cat) => {
            const src = resolveStrkImgUrl(`${cat.imgId}-tile`)
            return (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.name}`}
                className="group relative aspect-[4/5] overflow-hidden bg-cream md:aspect-[3/4]"
              >
                <img
                  alt={cat.name}
                  src={src}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-center">
                  <h3 className="font-serif text-2xl md:text-3xl uppercase tracking-[0.18em] text-ivory">
                    {cat.name}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-ivory/80 translate-y-2 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                    {cat.desc}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
